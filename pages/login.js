import React from 'react';
import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Login.module.css";
import { Form } from 'react-bootstrap'
import { AiOutlineUser, AiOutlineLock, AiOutlineLogin } from 'react-icons/ai';

export default function Login(props) {
    return (
        <>
            <Head>
                <title>Image Analysis | Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="authpage">
                <div className={styles.formSignin}>
                    <h1 className={`h3 mb-5 fw-normal text-center authHeader`}>Stalk Market</h1>
                    <div className="d-flex justify-content-between mb-4">
                        <div className={`authIcon mr-2`}><AiOutlineUser /></div>
                        <Form.Control type="email" id="inputEmail" className="authInput" placeholder="Email address" required autoFocus />
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                        <div className={`authIcon mr-2`}><AiOutlineLock /></div>
                        <Form.Control type="password" id="inputPassword" className="authInput" placeholder="Password" required />
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                        <div className={`authIcon mr-2`}><AiOutlineLogin /></div>
                        <button className={`w-100 btn  btn-light authBtn`} type="submit">LOGIN</button>
                    </div>

                    <div className="checkbox mb-1 text-white">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <p className={`mb-1 text-white link`}>Not a member? <Link href="/register">Register</Link></p>
                    <p className={`text-white link`}>Copyright © 2020 - <Link href="/">Stalk Market</Link></p>
                </div>
            </div>
        </>
    )
}