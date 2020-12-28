import React from "react";
import styles from "../../../styles/components/Team.module.css";
import { FaLinkedin, FaGithub, FaStackOverflow, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import useSWR from 'swr';
import MySkelton from '../MySkelton';
import Skeleton from "react-loading-skeleton";

export default function Team() {
    const { teams, isLoading, isError } = useTeams();
    return (
        <section className={`pageSection bg-light`} id="team">
            <div className="container container-md-fluid mx-0 mx-md-5">
                <h2 className="text-center w-100">Our amazing team</h2>
                <hr className={`mb-5 titleBottom`} />
                <div className="row">
                    {!isError && isLoading && <React.Fragment>

                        <div className="col-lg-4 col-md-6 text-center">\
                        <MySkelton>
                                <Skeleton circle={true} height={150} width={150} className="mb-3" />
                                <Skeleton width="100%" height={15} />
                                <Skeleton width="100%" height={15} />
                                <Skeleton width="100%" height={150} />
                            </MySkelton>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">\
                        <MySkelton>
                                <Skeleton circle={true} height={150} width={150} className="mb-3" />
                                <Skeleton width="100%" height={15} />
                                <Skeleton width="100%" height={15} />
                                <Skeleton width="100%" height={150} />
                            </MySkelton>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">\
                        <MySkelton>
                                <Skeleton circle={true} height={150} width={150} className="mb-3" />
                                <Skeleton width="100%" height={15} />
                                <Skeleton width="100%" height={15} />
                                <Skeleton width="100%" height={150} />
                            </MySkelton>
                        </div>
                    </React.Fragment>}
                    {isError && !isLoading && <div className="col-12">
                        <h3 className="text-center">Oops!! Something went wrong.</h3>
                    </div>}
                    {!isError && !isLoading && teams.length > 0 && teams.map((team, index) => {
                        if (index < 3) {
                            return <div key={index} className="col-lg-4 col-md-6 text-center">
                                <div className="mx-auto">
                                    <img src={team.imageurl} className="rounded-circle" alt="Sample avatar" />
                                </div>
                                <h5 className="font-weight-bold mt-4 mb-3">{team.lastname} {team.firstname}</h5>
                                <p className="text-uppercase blue-text"><strong>{team.position}</strong></p>
                                <p className="grey-text"> {team.details} </p>
                                <div className="d-flex justify-content-center mb-5 mb-lg-0">
                                    {team.linkedin && <Link href={team.linkedin}>
                                        <a className="m-2" target="_blank">
                                            <FaLinkedin className={`${styles.ldIcon}`} size="1.5rem" />
                                        </a>
                                    </Link>}
                                    {team.github && <Link href={team.github}>
                                        <a className="m-2" target="_blank">
                                            <FaGithub className={`${styles.gitIcon}`} size="1.5rem" />
                                        </a>
                                    </Link>}
                                    {team.stackoverflow && <Link href={team.stackoverflow}>
                                        <a className="m-2" target="_blank">
                                            <FaStackOverflow className={`${styles.stkIcon}`} size="1.5rem" />
                                        </a>
                                    </Link>}
                                </div>

                            </div>
                        }
                    })}
                    <div className={`col-12 mt-3 d-flex justify-content-center ${styles.viewMore}`}>
                        <Link href="/teams">View More</Link>
                    </div>
                </div>
            </div>
        </section >
    );
}


const fetcher = url => fetch(url).then(r => r.json())

function useTeams() {
    const { data, error } = useSWR(`https://imageanalysisbackend.herokuapp.com/developerdetails`, fetcher);
    return {
        teams: data,
        isLoading: !error && !data,
        isError: error
    }
}