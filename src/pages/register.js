import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Form, Container, Row, Col, InputGroup, Spinner } from 'react-bootstrap';
import styles from "../styles/Register.module.css";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai';
import { RiShieldUserLine } from 'react-icons/ri';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { scrollTo } from '../utils/scroller';
import { registerapi } from '../Services/authService';
import { useFormInput } from '../hooks/form';

export default function Register(props) {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const username = useFormInput('');
    const firstname = useFormInput('');
    const lastname = useFormInput('');
    const password = useFormInput('');
    const email = useFormInput('');
    const c_password = useFormInput('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (password.value !== c_password.value){
            alert("Password is not match with confirm password");
            return
        }
        setValidated(true);
        setLoading(true);
        const body = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            password: password.value,
            username:username.value
        };
        registerapi(body).then(response => {
            setError(null);
            setLoading(false);
            setData(response);
        }).catch(function (error) {
            setLoading(false);
            setData(null);
            setError(error);
        });
    };

    useEffect(() => {
        scrollTo('register')
    }, []);

    return (
        <>
            <Head>
                <title>Image Analysis | Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`d-flex align-items-center ${styles.register}`}>
                <div className={styles.bg}></div>
                <Container className="my-5">
                    <Row>
                        <Col className={styles.info} md={6}>
                            <div className={`d-flex flex-column align-items-start justify-content-center mb-4 ${styles.logo}`}>
                                <Link href="/">
                                    <a>
                                        <h3>Stalk</h3>
                                        <h2>Market</h2>
                                    </a>
                                </Link>
                            </div>
                            <p className={styles.heading}>
                                Brand Image Processing is more than a just a marketing hype! If you are serious about implementing image analysis to level up your branding game and create the best marketing strategies,you are at the right place.
                                Andes/StalkMarket makes it accessible and easy.
                            </p>
                            <span>Sign-up today and get access to:</span>
                            <ul>
                                <li className={styles.bullets} >Text processing and SEO</li>
                                <li className={styles.bullets} >Insights of how product is consumed by their customers</li>
                                <li className={styles.bullets} >Reports from the tool for optimizing their marketing strategies.</li>
                            </ul>
                            <div className={`mt-4`}>
                                <span className={`${styles.backBtn}`}>
                                    <Link href="/" >
                                        <a>
                                            <FiArrowLeftCircle className="mr-2" /> Back
                                        </a>
                                    </Link>
                                </span>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center mt-5 mt-md-0" md={6} id="register">
                            <div className={`card ${styles.formCard}`}>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <h2 className="text-center">Register Now!</h2>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...firstname} type="text" id="inputFirst" className={styles.input} placeholder="First Name" required />
                                                <Form.Control.Feedback type="invalid">
                                                    First name is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...lastname} type="text" id="inputLast" className={styles.input} placeholder="Last Name" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Last name is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><RiShieldUserLine /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...username} type="text" id="inputUsername" className={styles.input} placeholder="Username" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Username is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineMail /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...email} type="email" id="inputEmail" className={styles.input} placeholder="Email" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Email is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineLock /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...password} type="password" id="inputPassword" className={styles.input} placeholder="Password" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Password is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineLock /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...c_password} type="password" id="inputConfirmPassword" className={styles.input} placeholder="Confirm Password" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Confirm password is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
                                                {!loading && data && !error && <span className="text-success">{data.message}</span>}
                                                {!loading && error && !data && <span className="text-danger">{error.message}</span>}
                                                {loading && <Spinner animation="border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>}
                                            </div>
                                            <button className={`w-100 btn d-flex align-items-center justify-content-center ${styles.button}`} type="submit">
                                                <AiOutlineUserAdd />&nbsp;
                                                REGISTER
                                            </button>
                                        </Form.Group>
                                    </Form.Row>
                                    <div className="text-center">
                                        Already a member? <Link href="/login">Login</Link>
                                        <button className={`w-auto btn btn-sm ${styles.clearBtn}`} type="reset">Clear</button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
