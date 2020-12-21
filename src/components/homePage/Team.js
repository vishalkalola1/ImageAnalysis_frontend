import React from "react";
import styles from "../../../styles/components/Team.module.css";
import { FaLinkedin, FaGithub, FaStackOverflow, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import useSWR from 'swr';

export default function Team() {
    const { teams, isLoading, isError } = useTeams();
    return (
        <section className={`pageSection bg-light`} id="team">
            {console.log({ teams })}
            <div className="container container-md-fluid mx-0 mx-md-5">
                <h2 className="text-center w-100">Our amazing team</h2>
                <hr className={`mb-5 titleBottom`} />
                <div className="row">
                    {!isError && !isLoading && teams.length > 0 && teams.map((team, index) =>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="mx-auto">
                                <img src={team.imageurl} className="rounded-circle" alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">{team.lastname} {team.firstname}</h5>
                            <p className="text-uppercase blue-text"><strong>{team.position}</strong></p>
                            <p className="grey-text"> {team.details} </p>
                            <div className="d-flex justify-content-center">
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

                        </div>)}
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
