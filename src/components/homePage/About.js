import React from "react";
import styles from "../../../styles/components/About.module.css";

export default function About() {
  return (
    <section className={`${styles.pageSection}`} id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">We've got what you need!</h2>
            <hr className="divider light my-4" />
            <p className={`${styles.textWhite50} mb-4`}>
              Image processing is a cool thing in today’s date in technology.
              But have you ever thought of implementing it to level up your
              branding game and creating best marketing strategies? Text
              processing and SEO has always been adopted when it comes to
              digital marketing. Let us talk about Image processing and how we
              can use it to brand you up with our tool. Stalk Market is a tool
              that processes social media images of specific brand using image
              processing technologies. We provide our clients with the insights
              of how their product is consumed by their customers. The project
              uses AI and Data technologies where we collect the images of your
              brand from various social media platforms and process them to
              provide the consumer insights by analysing the elements inside the
              images, emotions, texts and the location of the picture taken.
              Voila! then, the brands use our reports from the tool for
              optimizing their marketing strategies.
            </p>
            <a
              className="btn btn-light btn-xl js-scroll-trigger"
              href="#services"
            >
              How?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
