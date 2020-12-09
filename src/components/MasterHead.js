import React from "react";
import styles from "../../styles/MasterHead.module.css";

export default function MasterHead(props) {
  const { title, subtitle, bgimage, buttons } = props;

  return (
    <header className={styles.masthead}>
      <div
        className={`row ${styles.mastheadInner}`}
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className={`col ${styles.layer}`}>
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              {title}
              <hr className="divider my-4" />
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
