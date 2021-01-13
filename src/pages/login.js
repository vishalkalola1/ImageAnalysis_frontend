import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Login.module.css";
import { Form, Container, Row, Col, InputGroup, Spinner } from 'react-bootstrap'
import { AiOutlineUser, AiOutlineLock, AiOutlineLogin } from 'react-icons/ai';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { scrollTo } from '../utils/scroller';
import { useFormInput } from '../hooks/form';
import { loginapi } from '../Services/authService';

export default function Login(props) {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    const username = useFormInput('');
    const password = useFormInput('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        setLoading(true);

        const body = {
            username: username.value,
            password: password.value
        };

        loginapi(body).then(response => {
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
        scrollTo('login')
    }, []);

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
                                Brand Image Processing is more than a just a marketing hype! If you are serious about implementing image analysis to level up your branding game and create the best marketing strategies,you are at the right place.
                                Andes/StalkMarket makes it accessible and easy.
                            </p>
                            <span>Sign-in and get access to:</span>
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
                        <Col className="d-flex justify-content-center align-items-center mt-5 mt-md-0" md={6} id="login">
                            <div className={`card ${styles.formCard}`}>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <h2 className="text-center">Login!</h2>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...username} type="text" id="inputEmail" className={styles.input} placeholder="Username" required autoFocus />
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
                                                    <InputGroup.Text><AiOutlineLock /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...password} type="password" id="inputPassword" className={styles.input} placeholder="Password" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Password is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <div className="checkbox mb-1">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <div className="text-right">
                                        <Link href="/forgotpassword">Forgot Password?</Link>
                                    </div>
                                    <Form.Row className="mt-2">
                                        <Form.Group as={Col} controlId="formLogin" className="mb-3">
                                            <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
                                                {!loading && data && !error && <span className="text-success">{data.message}</span>}
                                                {!loading && error && !data && <span className="text-danger">{error.message}</span>}
                                                {loading && <Spinner animation="border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>}
                                            </div>
                                            <button className={`w-100 btn d-flex align-items-center justify-content-center ${styles.button}`} type="submit">
                                                <AiOutlineLogin className="mr-2" />&nbsp;
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
