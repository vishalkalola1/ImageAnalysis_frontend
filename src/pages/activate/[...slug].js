import { useRouter } from 'next/router'
import { activateapi } from '../../Services/authService';
import React, {useEffect, useState} from "react";
import {Col, Container, Form, InputGroup, Row, Spinner} from "react-bootstrap";
import styles from "../../styles/activation.module.css";
import Head from "next/head";
import Link from "next/link";
import {FiArrowLeftCircle} from "react-icons/fi";
import {AiOutlineLock, AiOutlineMail, AiOutlineUser, AiOutlineUserAdd} from "react-icons/ai";
import {RiShieldUserLine} from "react-icons/ri";
import {scrollTo} from "../../utils/scroller";

export default function activate(props){

    const router = useRouter()
    const slug = router.query.slug || []

    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const [apicall, setApicall] = useState(true);

    const handleSubmit = async () => {
        console.log(1);
        setApicall(false);
        setLoading(true);
        let data = {userid:slug[0], token:slug[1]}
        activateapi(data).then(response => {
            setError(null);
            setLoading(false);
            setData(response);
        }).catch(function (error) {
            setLoading(false);
            setData(null);
            setError(error);
        });
    }

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <>
            <Head>
                <title>Image Analysis | Activate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`d-flex align-items-center justify-content-center ${styles.register}`}>
                <div className={styles.bg}></div>
                <div className={`d-flex align-items-center`}>
                    <Container className=" my-5">
                        <Row>
                            <Col className={styles.info} md={6}>
                                <div
                                    className={`d-flex flex-column align-items-start justify-content-center mb-4 ${styles.logo}`}>
                                    <Link href="/">
                                        <a>
                                            <h3>Stalk</h3>
                                            <h2>Market</h2>
                                        </a>
                                    </Link>
                                </div>
                                <p className={styles.heading}>
                                    Brand Image Processing is more than a just a marketing hype! If you are serious
                                    about implementing image analysis to level up your branding game and create the best
                                    marketing strategies,you are at the right place.
                                    Andes/StalkMarket makes it accessible and easy.
                                </p>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center mt-5 mt-md-0" md={6} id="register">
                                <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
                                    {!loading && data && !error && <div className={`card d-flex justify-content-center align-items-center mt-2 mb-2 ${styles.formCard}`}>
                                        <div className={`mb-3 ${styles.cardImg}`}><img className="img-fluid" src="https://i.imgur.com/d0Jfn62.png" />
                                        </div>
                                        <div className={`${styles.cardTitle}`}>
                                            <p className='text-success'>{data.message}</p>
                                        </div>
                                        <div className={`d-flex justify-content-center align-items-center ${styles.cardText}`}>
                                            <p className='text-center'>Yay! Email verification done! <br/> Now you can login.</p>
                                        </div>
                                    </div>}
                                    {!loading && error && !data && <div className={`card d-flex justify-content-center align-items-center mt-2 mb-2 ${styles.formCard}`}>
                                        <div className={`mb-3 ${styles.cardImg}`}><img className="img-fluid" src="https://i.imgur.com/d0Jfn62.png" />
                                        </div>
                                        <div className={`${styles.cardTitle}`}>
                                            <p className='text-danger'>{error.message}</p>
                                        </div>
                                        <div className={`d-flex justify-content-center align-items-center ${styles.cardText}`}>
                                            <p className='text-center'>Ohhh No! Email verification fail! <br/> Please try again.</p>
                                        </div>
                                    </div>}
                                    {loading && <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
