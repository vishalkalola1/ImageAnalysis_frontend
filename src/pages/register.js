import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import styles from "../styles/Register.module.css";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai';
import { RiShieldUserLine } from 'react-icons/ri';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { scrollTo } from '../utils/scroller';

export default function Register(props) {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
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
                                                <Form.Control type="text" id="inputFirst" className={styles.input} placeholder="First Name" required />
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
                                                <Form.Control type="text" id="inputLast" className={styles.input} placeholder="Last Name" required />
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
                                                <Form.Control type="text" id="inputUsername" className={styles.input} placeholder="Username" required />
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
                                                <Form.Control type="email" id="inputEmail" className={styles.input} placeholder="Email" required />
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
                                                <Form.Control type="password" id="inputPassword" className={styles.input} placeholder="Password" required />
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
                                                <Form.Control type="password" id="inputConfirmPassword" className={styles.input} placeholder="Confirm Password" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Confirm password is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <button className={`w-100 btn d-flex align-items-center justify-content-center ${styles.button}`} type="submit">
                                                <AiOutlineUserAdd />
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