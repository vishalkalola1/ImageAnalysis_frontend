import React from "react";
import styles from "../../../styles/components/MasterHead.module.css";

export default function MasterHead(props) {
  const { title, subtitle, bgimage, buttons } = props;

  return (
    <header>
      <div
        className={`row ${styles.masthead}`}
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className={`col ${styles.layer}`}>
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              {title}
              <hr className={`my-4 titleBottom`} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 align-self-baseline">
              {subtitle}
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
