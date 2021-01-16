import Head from "next/head";
import Navbar from "../components/navigations/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/home.module.css";
import Router from "next/router";
export default function Home(props) {

    const logout = () => {
        Router.push('/')
    }

    return (
        <>
            <Head>
                <title>Image Analysis</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`d-flex align-items-center justify-content-center ${styles.home}`}>
                <div className={`grid`}>
                    <div className="row row d-flex align-items-center justify-content-center">
                        <h1 className="text-success">Welcome to the User Dashboard</h1>
                    </div>
                    <div className="row row d-flex align-items-center justify-content-center">
                        <p className="text-danger">We will in developing this module. we will get back soon.</p>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                    <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    );
}
