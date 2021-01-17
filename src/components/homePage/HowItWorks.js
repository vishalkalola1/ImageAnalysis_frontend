import React from "react";
import styles from "../../styles/components/HowItWorks.module.css";
import { FaGem, FaLaptopCode, FaGlobe, FaHeart } from "react-icons/fa";

export default function HowItWorks() {
    return (
        <section className={`pageSection bg-white`} id="how-it-works">
            <div className="container">
                <h2 className="text-center w-100">How does it work?</h2>
                <hr className={`mb-5 titleBottom`} />
                <div className="row">
                    <div className={`col-lg-3 col-md-6 mt-4 mt-md-0 text-center ${styles.mobile}`}>
                        <FaGem className={`mb-3 ${styles.icon}`} size="4rem" />
                        <h3 className="h4 mb-2">Image Collection</h3>
                        <p className="text-muted mb-0">We collect images related to your brand from all the social media platforms online. We respect your customer’s privacy and we only collect and download the public images of your brand.</p>
                    </div>

                    <div className={`col-lg-3 col-md-6 mt-4 mt-md-0 text-center ${styles.mobile}`}>
                        <FaLaptopCode className={`mb-3 ${styles.icon}`} size="4rem" />
                        <h3 className="h4 mb-2">Image Processing</h3>
                        <p className="text-muted mb-0">After collection of images, we pass all the images through our image processing engine where it analyses the different elements like text, facial expressions, location, etc in the image.</p>
                    </div>

                    <div className={`col-lg-3 col-md-6 mt-4 mt-md-0 text-center ${styles.mobile}`}>
                        <FaGlobe className={`mb-3 ${styles.icon}`} size="4rem" />
                        <h3 className="h4 mb-2">Data Visualization</h3>
                        <p className="text-muted mb-0">The image analysis results in huge data set with different classification. Those data are sorted and graphically represented in the form of bars and charts for easier readability.</p>
                    </div>

                    <div className={`col-lg-3 col-md-6 mt-4 mt-md-0 text-center ${styles.mobile}`}>
                        <FaHeart className={`mb-3 ${styles.icon}`} size="4rem" />
                        <h3 className="h4 mb-2">Report Generation</h3>
                        <p className="text-muted mb-0"> The reports based on all the analysed classification is generated and passed to the client dashboard where the client can access, download, and print the specific reports.</p>
                    </div>
                </div>
            </div>
        </section >
    );
}
