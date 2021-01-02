import React, { useState } from 'react';
import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Login.module.css";
import { Form, Container, Row, Col, InputGroup } from 'react-bootstrap'
import { AiOutlineUser, AiOutlineLock, AiOutlineLogin } from 'react-icons/ai';
import { FiArrowLeftCircle } from 'react-icons/fi';

export default function Login(props) {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <>
            <Head>
                <title>Image Analysis | Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`d-flex align-items-center ${styles.login}`}>
                <div className={styles.bg}></div>
                <Container className=" my-5">
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
                                Image processing is a cool thing in today’s date in technology.
                                But have you ever thought of implementing it to level up your branding
                                game and creating best marketing strategies?
                            </p>
                            <span>Sign-up today and get access to:</span>
                            <ul>
                                <li>Text processing and SEO</li>
                                <li>Insights of how product is consumed by their customers</li>
                                <li>Reports from the tool for optimizing their marketing strategies.</li>
                            </ul>
                            <div className={`mt-5`}>
                                <span className={`${styles.backBtn}`}>
                                    <Link href="/" >
                                        <a>
                                            <FiArrowLeftCircle className="mr-2" /> Back
                                        </a>
                                    </Link>
                                </span>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center mt-5 mt-md-0" md={6}>
                            <div className={`card ${styles.formCard}`}>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <h2 className="text-center">Login!</h2>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="email" id="inputEmail" className={styles.input} placeholder="Email address" required autoFocus />
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
                                                    <InputGroup.Text><AiOutlineLock /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="password" id="inputPassword" className={styles.input} placeholder="Password" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Last name is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <div className="checkbox mb-1">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <Form.Row className="mt-4">
                                        <Form.Group as={Col} controlId="formLogin" className="mb-3">
                                            <button className={`w-100 btn d-flex align-items-center justify-content-center ${styles.button}`} type="submit">
                                                <AiOutlineLogin className="mr-2" />
                                            LOGIN
                                        </button>
                                        </Form.Group>
                                    </Form.Row>
                                    <div className="text-center">
                                        Not a member? <Link href="/register">Register</Link>
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