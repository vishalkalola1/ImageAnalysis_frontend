import Head from "next/head";
import About from "../src/components/homePage/About";
import MasterHead from "../src/components/homePage/MasterHead";
import Navbar from "../src/components/navigations/Navbar";
import styles from "../styles/Home.module.css";
import { scrollToTop, scrollTo } from '../src/utils/scroller';
import Button from 'react-bootstrap/Button';
import { IoChevronUpOutline } from "react-icons/io5";

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
          <h1 className="text-uppercase mt-5 pt-5 mt-md-0 pt-md-0 text-white font-weight-bold">
            UNDERSTAND <br /> your consumers
          </h1>
        }
        subtitle={
          <p className={`font-weight-light mb-5 ${styles.textWhite75}`}>
            Understand how consumers talk about you online with StalkMarket's
            Image Analyis on Social Media. Make faster, data-driven decisions
            today!.
          </p>
        }
        bgimage="/images/background.jpg"
        buttons={
          <button
            className={`btn btn-primary js-scroll-trigger ${styles.mastheadBtn}`}
            onClick={() => scrollTo('about')}
          >
            Explore More
          </button>
        }
      />
      <About />
      <Button
        className={styles.scrollToTop}
        onClick={() => scrollToTop()}
      >
        <IoChevronUpOutline size="2em" />
      </Button>
    </>
  );
}
