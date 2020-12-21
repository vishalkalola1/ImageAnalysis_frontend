import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Nav from "react-bootstrap/Nav";
import { Navbar as BtNavbar, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "../../../styles/components/Navbar.module.css";
import { i18n, withTranslation } from '../../../i18n';
import {
  Events,
  scrollSpy,
} from "react-scroll";
import { scrollTo, scrollToTop } from '../../utils/scroller';
import { flags } from '../../utils/data';

function Navbar(props) {
  const [scroll, setScroll] = useState(false);


  useEffect(() => {

    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();

    window.onscroll = function () {
      if (window.pageYOffset > 60) {
        setScroll(true);
      } else {
        setScroll(false)
      }
    };

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.onscroll = null;
    };
  });

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <BtNavbar
        expand="lg"
        className={styles.navbar}
        variant={scroll ? "light" : "dark"}
        fixed="top"
        style={{
          transition: ".3s ease",
          boxShadow: scroll ? "0px 0px 5px rgba(0,0,0,0.5)" : "none",
          background: scroll ? "#FFFFFF" : "#222"
        }}
      >
        {console.log(props.currentLang)}
        <Container>
          <BtNavbar.Brand className={styles.navBrand} onClick={() => scrollToTop()}>StalkMarket</BtNavbar.Brand>

          <Dropdown as={ButtonGroup} size="sm" className="d-block d-lg-none">
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className={styles.flag}>
              <img src={flags[props.i18n.language]} width={20} height={14} />
            </Dropdown.Toggle>
            <Dropdown.Menu className={`${styles.flagMenu}`}>
              <Dropdown.Item onClick={() => handleLanguage('en')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={i18n.translator.language === 'en' ? true : false}>
                <img src={flags.en} width={20} height={14} className="mr-2" /> EN
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('fr')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={i18n.translator.language === 'fr' ? true : false}>
                <img src={flags.fr} width={20} height={14} className="mr-2" /> FR
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <BtNavbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />

          <BtNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className={styles.navLink} onClick={() => scrollTo('about')}>
                About
              </Nav.Link>
              <Nav.Link className={`ml-0 ml-lg-4 ${styles.navLink}`} onClick={() => scrollTo('how-it-works')}>
                How it works?
              </Nav.Link>
              <Nav.Link className={`ml-0 ml-lg-4 ${styles.navLink}`} onClick={() => scrollTo('team')}>
                Our Team
              </Nav.Link>
              <Nav.Link className={`ml-0 ml-lg-4 ${styles.navLink}`} onClick={() => scrollTo('demo')}>
                Demo
              </Nav.Link>
              <Nav.Link className={`ml-0 ml-lg-4 ${styles.navLink}`} onClick={() => scrollTo('contact')}>
                Contact
              </Nav.Link>
              <Nav.Link href="/login" className={`ml-0 ml-lg-4 ${styles.navLink}`}>
                Login
              </Nav.Link>
            </Nav>
          </BtNavbar.Collapse>

          <Dropdown as={ButtonGroup} size="sm" className="d-none d-lg-block">
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className={styles.flag}>
              <img src={flags[props.i18n.language]} width={20} height={14} />
            </Dropdown.Toggle>
            <Dropdown.Menu className={`${styles.flagMenu}`}>
              <Dropdown.Item onClick={() => handleLanguage('en')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={i18n.translator.language === 'en' ? true : false}>
                <img src={flags.en} width={20} height={14} className="mr-2" /> EN
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('fr')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={i18n.translator.language === 'fr' ? true : false}>
                <img src={flags.fr} width={20} height={14} className="mr-2" /> FR
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Container>
      </BtNavbar>
    </>
  );
}

Navbar.getInitialProps = async () => ({
  namespacesRequired: ['common', 'homepage']
});

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('homepage')(Navbar);
