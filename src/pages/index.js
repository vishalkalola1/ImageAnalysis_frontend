import Head from "next/head";
import PropTypes from 'prop-types';
import About from "../components/homePage/About";
import MasterHead from "../components/homePage/MasterHead";
import Navbar from "../components/navigations/Navbar";
import styles from "../styles/Home.module.css";
import { scrollToTop, scrollTo } from '../utils/scroller';
import Button from 'react-bootstrap/Button';
import { IoChevronUpOutline } from "react-icons/io5";
import HowItWorks from "../components/homePage/HowItWorks";
import Team from "../components/homePage/Team";
import Demo from "../components/homePage/Demo";
import Contact from "../components/homePage/Contact";
import Footer from "../components/Footer";
import { withTranslation } from '../../i18n';

function Home(props) {
  const { t } = props;
  return (
    <>
      <Head>
        <title>Image Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MasterHead
        title={
          <h1 className={`text-uppercase text-white ${styles.bannerTitle}`}>
            {t("understand")} <br /> {t("your consumers")}
          </h1>
        }
        subtitle={
          <p className={`font-weight-light mb-5 textWhite75 ${styles.subTitle}`}>
            Understand how consumers talk about you online with StalkMarket's
            Image Analyis on Social Media. Make faster, data-driven decisions
            today!.
          </p>
        }
        bgimage="/static/images/background.jpg"
        buttons={
          <button
            className={`btn text-light js-scroll-trigger btnPrimary`}
            onClick={() => scrollTo('about')}
          >
            Explore More
          </button>
        }
      />
      <About />
      <HowItWorks />
      <Team />
      <Demo />
      <Contact />
      <Footer />
      <Button
        className={styles.scrollToTop}
        onClick={() => scrollToTop()}
      >
        <IoChevronUpOutline size="2em" />
      </Button>
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'homepage'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('homepage')(Home);
