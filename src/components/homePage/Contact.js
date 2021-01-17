import React, { useState } from "react";
import { Form, Col, Button, Spinner } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import styles from '../../styles/components/Contact.module.css';
import { useFormInput } from '../../hooks/form';
import { contactusapi } from '../../Services/contactService';

function Contact(props) {
    const [validated, setValidated] = useState(false);
    const firstName = useFormInput('');
    const lastName = useFormInput('');
    const email = useFormInput('');
    const message = useFormInput('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setError(null);
            setLoading(false);
            setData(null);
            event.stopPropagation();
            return
        }
        setValidated(true);
        setLoading(true);
        const body = {
            firstname: firstName.value,
            lastname: lastName.value,
            email: email.value,
            details: message.value
        };
        contactusapi(body).then(response => {
            setError(null);
            setLoading(false);
            setData(response);
        }).catch(function (error) {
            setLoading(false);
            setData(null);
            setError(error);
        });
    };

    return (
        <section className={`pageSection bg-light`} id="contact">
            <div className="container">
                <div className="row d-flex justify-content-center mb-3">
                    <h2 className="display-4 mb-4 text-center text-md-left">Contact Us</h2>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-6 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center">
                            <FaMapMarkerAlt size="1.5rem" className={`${styles.icon} mb-2 mb-md-auto`} />
                            <span className="ml-2 text-center text-md-left">14, Rue Mario Capra, 94400 Vitry-sur-seine, France</span>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center mt-3 mt-md-5">
                            <FaPhone size="1.5rem" className={`${styles.icon} mb-2 mb-md-auto`} />
                            <span className="ml-2 text-center text-md-left">+33 (0) 7 53 84 03 74</span>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center mt-3 mt-md-5">
                            <FaEnvelope size="1.5rem" className={`${styles.icon} mb-2 mb-md-auto`} />
                            <span className="ml-2 text-center text-md-left">andesinfotech@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-5 mt-md-auto">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formFirstName">
                                    <Form.Control {...firstName} type="text" required placeholder="Enter firstname" className={`${styles.formInput}`} />
                                    <Form.Control.Feedback type="invalid">
                                        First name is required.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Control {...lastName} type="text" required placeholder="Enter lastname" className={`${styles.formInput}`} />
                                    <Form.Control.Feedback type="invalid">
                                        Last name is required.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="mt-3">
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Control {...email} type="email" required placeholder="Enter email address" className={`${styles.formInput}`} />
                                    <Form.Control.Feedback type="invalid">
                                        Email address is required. Please enter valid email address.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="mt-3">
                                <Form.Group as={Col} controlId="formMessage">
                                    <Form.Control {...message} required as="textarea" placeholder="Write message" rows="5" className={`${styles.formInput}`} />
                                    <Form.Control.Feedback type="invalid">
                                        Message is required.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
                                {!loading && data && !error && <span className="text-success">{data.message}</span>}
                                {!loading && error && !data && <span className="text-danger">{error.message}</span>}
                                {loading && <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>}
                            </div>
                            <Button variant="primary" size="lg" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;
