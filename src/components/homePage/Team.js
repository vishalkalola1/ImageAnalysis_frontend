import React from "react";
import styles from "../../../styles/components/Team.module.css";
import { FaLinkedin, FaGithub, FaStackOverflow, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

export default function Team() {
    return (
        <section className={`pageSection bg-light`} id="team">
            <div className="container-fluid mx-5">
                <h2 className="text-center w-100">Our amazing team</h2>
                <hr className={`mb-5 titleBottom`} />
                <div className="row">
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="mx-auto">
                            <img src="/images/avatar.png" className="rounded-circle" alt="Sample avatar" />
                        </div>
                        <h5 className="font-weight-bold mt-4 mb-3">Bibek Lama</h5>
                        <p className="text-uppercase blue-text"><strong>FullStack Developer</strong></p>
                        <p className="grey-text"> MSc. in Computer Science Specialising in Software Engineering @Epita.
                            I work with international teams every day and leading them is part of my job. I am passionate about designing and developing frontend applications. On my free time, I learn new technologies for fun. </p>
                        <div className="d-flex justify-content-center">
                            <Link href="https://www.linkedin.com/in/tiwariamrita">
                                <a className="m-2">
                                    <FaLinkedin className={`${styles.ldIcon}`} size="1.5rem" />
                                </a>
                            </Link>
                            <Link href="https://twitter.com/amytweeets">
                                <a className="m-2">
                                    <FaTwitter className={`${styles.twIcon}`} size="1.5rem" />
                                </a>
                            </Link>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mt-md-0 text-center">
                        <div className="mx-auto">
                            <img src="/images/avatar.png" className="rounded-circle " alt="Sample avatar" />
                        </div>
                        <h5 className="font-weight-bold mt-4 mb-3">Gaurav Nepal</h5>
                        <p className="text-uppercase blue-text"><strong>Data Engineer</strong></p>
                        <p className="grey-text">MSc. in Computer Science Specialising in Data Science @Epita.
                            I am a detail-oriented person who excels at maintaining large databases and analysis by creating detailed reports. Possess great analytical, multitasking skills, and significant ability to work in a team.</p>
                        <div className="d-flex justify-content-center">
                            <Link href="https://www.linkedin.com/in/gauravnepal" target="blank">
                                <a className="m-2">
                                    <FaLinkedin className={`${styles.ldIcon}`} size="1.5rem" />
                                </a>
                            </Link>

                            <Link href="https://github.com/gauravnepal" target="blank" >
                                <a className="m-2">
                                    <FaGithub className={`${styles.gitIcon}`} size="1.5rem" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mt-md-0 text-center">
                        <div className="mx-auto">
                            <img src="/images/avatar.png" className="rounded-circle " alt="Sample avatar" />
                        </div>
                        <h5 className="font-weight-bold mt-4 mb-3">Vishal KALOLA</h5>
                        <p className="text-uppercase blue-text"><strong>Lead FullStack developer</strong></p>
                        <p className="grey-text">
                            MSc. in Computer Science Specialising in Software Engineering @Epita. I am a software engineer with 4 years of experience in development and all levels of testing with strong problem solving and analytical skills. I like learning new development frameworks.
                        </p>
                        <div className="d-flex justify-content-center">
                            <Link href="https://www.linkedin.com/in/vishal-kalola" target="blank" >
                                <a className="m-2">
                                    <FaLinkedin className={`${styles.ldIcon}`} size="1.5rem" />
                                </a>
                            </Link>
                            <Link href="https://github.com/vishalkalola1" target="blank" >
                                <a className="m-2">
                                    <FaGithub className={`${styles.gitIcon}`} size="1.5rem" />
                                </a>
                            </Link>

                            <Link href="https://stackoverflow.com/users/4754213/vishal-patel" target="blank" >
                                <a className="m-2">
                                    <FaStackOverflow className={`${styles.stkIcon}`} size="1.5rem" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}