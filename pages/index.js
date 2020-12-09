import Head from "next/head";
import MasterHead from "../src/components/MasterHead";
import Navbar from "../src/components/navigations/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MasterHead
        title={
          <h1 className="text-uppercase text-white font-weight-bold">
            UNDERSTAND <br /> your consumers
          </h1>
        }
        subtitle={
          <p className="text-white font-weight-light mb-5">
            Understand how consumers talk about you online with StalkMarket's
            Image Analyis on Social Media. Make faster, data-driven decisions
            today!.
          </p>
        }
        bgimage="/images/background.jpg"
        buttons={
          <button
            className={`btn btn-primary js-scroll-trigger ${styles.mastheadBtn}`}
            href="#about"
          >
            Explore More
          </button>
        }
      />
    </>
  );
}
