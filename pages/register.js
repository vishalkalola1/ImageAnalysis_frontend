import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Form, Container, Row, Col } from 'react-bootstrap';
import styles from "../styles/Login.module.css";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai';
import { RiShieldUserLine } from 'react-icons/ri';

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
    return (
        <>
            <Head>
                <title>Image Analysis | Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="authpage">
                <Container className="authpage">
                    <h1 className={`h3 mb-5 fw-normal text-center authHeader`}>Stalk Market</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={{ span: 6, order: 1 }}>
                                <div className="d-flex justify-content-between mb-4">
                                    <div className={`authIcon mr-2`}><AiOutlineUser /></div>
                                    <Form.Control type="text" id="inputCompanyName" className="authInput" placeholder="First Name" required />
                                </div>
                            </Col>
                            <Col lg={{ span: 6, order: 2 }}>
                                <div className="d-flex justify-content-between mb-4">
                                    <div className={`authIcon mr-2`}><AiOutlineUser /></div>
                                    <Form.Control type="text" id="inputLast" className="authInput" placeholder="Last Name" required />
                                </div>
                            </Col>
                            <Col lg={{ span: 6, order: 3 }}>
                                <div className="d-flex justify-content-between mb-4">
                                    <div className={`authIcon mr-2`}><RiShieldUserLine /></div>
                                    <Form.Control type="text" id="inputUsername" className="authInput" placeholder="Username" required />
                                </div>
                            </Col>
                            <Col lg={{ span: 6, order: 4 }}>
                                <div className="d-flex justify-content-between mb-4">
                                    <div className={`authIcon mr-2`}><AiOutlineMail /></div>
                                    <Form.Control type="email" id="inputEmail" className="authInput" placeholder="Email" required />
                                </div>
                            </Col>
                            <Col lg={{ span: 6, order: 5 }}>
                                <div className="d-flex justify-content-between mb-4">
                                    <div className={`authIcon mr-2`}><AiOutlineLock /></div>
                                    <Form.Control type="password" id="inputPassword" className="authInput" placeholder="Password" required />
                                </div>
                            </Col>
                            <Col lg={{ span: 6, order: 6 }}>
                                <div className="d-flex justify-content-between mb-4">
                                    <div className={`authIcon mr-2`}><AiOutlineLock /></div>
                                    <Form.Control type="password" id="inputConfirmPassword" className="authInput" placeholder="Confirm Password" required />
                                </div>
                            </Col>
                            <Col lg={{ span: 6, order: 7 }} className="d-flex justify-content-end">
                                &nbsp;
                            </Col>
                            <Col lg={{ span: 6, order: 8 }} className="d-flex justify-content-between mb-4">
                                <div className={`authIcon mr-2`}><AiOutlineUserAdd /></div>
                                <button className={`w-100 btn  btn-light authBtn`} type="submit">REGISTER</button>
                            </Col>
                            <Col lg={{ span: 12, order: 9 }} className="mt-3">
                                <p className={`text-white link  border-top pt-4 w-100 text-center`}>Copyright © 2020 - <Link href="/">Stalk Market</Link></p>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </div >
        </>
    )
}