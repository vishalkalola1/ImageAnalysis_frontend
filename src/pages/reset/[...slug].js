import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Form, Container, Row, Col, InputGroup, Spinner } from 'react-bootstrap';
import styles from "../../styles/ForgotPassword.module.css";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai';
import { RiShieldUserLine } from 'react-icons/ri';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { scrollTo } from '../../utils/scroller';
import {forgotpasswordapi, resetpasswordapi} from '../../Services/authService';
import { useFormInput } from '../../hooks/form';
import {useRouter} from "next/router";

export default function reset(props) {

    const router = useRouter()
    const slug = router.query.slug || []

    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const password = useFormInput('');
    const cpassword = useFormInput('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setError(null);
            setLoading(false);
            setData(null);
            event.stopPropagation();
            return
        }

        if(password.value !== cpassword.value){
            alert("Password and confirm password are not matched")
            return
        }

        setValidated(true);
        setLoading(true);
        const body = {
            newpassword: password.value,
            userid: slug[0],
            token: slug[1]
        };
        resetpasswordapi(body).then(response => {
            setLoading(false);
            setData(response);
            setError(null);
        }).catch(function (error) {
            setLoading(false);
            setData(null);
            setError(error);
        });
    };

    useEffect(() => {
        scrollTo('resetpassword')
    }, []);

    return (
        <>
            <Head>
                <title>Image Analysis | Reset Password</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`d-flex align-items-center ${styles.forgotpassword}`}>
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
                                    <h2 className="text-center">Reset Password</h2>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-1">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineMail /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...password} type="password" id="inputPassword" className={styles.input} placeholder="New Password" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Password is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-1">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><AiOutlineMail /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control {...cpassword} type="password" id="inputPassword" className={styles.input} placeholder="Confirm New Password" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Confirm Password is required.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-3">
                                            <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
                                                {!loading && data && !error && <span class="text-success" >{data.message}</span>}
                                                {!loading && error && !data && <span class="text-danger">{error.message}</span>}
                                                {loading && <Spinner animation="border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>}
                                            </div>
                                            <button className={`w-100 btn d-flex align-items-center justify-content-center ${styles.button}`} type="submit">
                                                <AiOutlineUserAdd />&nbsp; Reset Password
                                            </button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
