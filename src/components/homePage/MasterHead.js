import React from "react";
import styles from "../../styles/components/MasterHead.module.css";

export default function MasterHead(props) {
  const { title, subtitle, bgimage, buttons } = props;

  return (
    <div
      className={`${styles.masthead} d-flex flex-column align-items-center justify-content-center text-center`}
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="col-lg-10">
        {title}
        <hr className={`my-4 titleBottom`} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-8">
        {subtitle}
        {buttons}
      </div>
    </div>
  );
}
