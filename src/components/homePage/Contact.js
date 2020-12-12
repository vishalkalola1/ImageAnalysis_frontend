import React from "react";
import { Form, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import styles from '../../../styles/components/Contact.module.css';

export default function Contact() {
    return (
        <section className={`pageSection bg-light`} id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center">
                            <FaMapMarkerAlt size="1.5rem" className={`${styles.icon} mb-2 mb-md-auto`} />
                            <span className="ml-2 text-center text-md-left">14-16 Rue Voltaire, 94270 Le Kremlin-Bicêtre, France</span>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center mt-3 mt-md-5">
                            <FaPhone size="1.5rem" className={`${styles.icon} mb-2 mb-md-auto`} />
                            <span className="ml-2 text-center text-md-left">+33 1 44 08 01 01</span>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center mt-3 mt-md-5">
                            <FaEnvelope size="1.5rem" className={`${styles.icon} mb-2 mb-md-auto`} />
                            <span className="ml-2 text-center text-md-left">contact.stalkmarket@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-5 mt-md-auto">
                        <h2 className="display-4 mb-4 text-center text-md-left">Contact Us</h2>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Control type="text" placeholder="Enter firstname" className={`${styles.formInput}`} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Control type="text" placeholder="Enter lastname" className={`${styles.formInput}`} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="mt-3">
                            <Form.Group as={Col} controlId="formEmail">
                                <Form.Control type="email" placeholder="Enter email address" className={`${styles.formInput}`} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="mt-3">
                            <Form.Group as={Col} controlId="formPhone">
                                <Form.Control type="phone" placeholder="Enter phone number" className={`${styles.formInput}`} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="mt-3">
                            <Form.Group as={Col} controlId="formMessage">
                                <Form.Control as="textarea" placeholder="Write message" rows="5" className={`${styles.formInput}`} />
                            </Form.Group>
                        </Form.Row>
                    </div>
                </div>
            </div>
        </section>
    );
}
