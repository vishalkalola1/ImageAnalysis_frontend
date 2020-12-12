import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar as BtNavbar, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "../../../styles/components/Navbar.module.css";
import { useTranslation } from 'react-i18next';
import {
  Events,
  scrollSpy,
} from "react-scroll";
import { scrollTo, scrollToTop } from '../../utils/scroller';
import { flags } from '../../utils/data';

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [lang, setLang] = useState('US');
  const { t, i18n } = useTranslation();
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
    setLang(lang);
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
        <Container>
          <BtNavbar.Brand className={styles.navBrand} onClick={() => scrollToTop()}>StalkMarket</BtNavbar.Brand>

          <Dropdown as={ButtonGroup} size="sm">
            <Button variant="dark" className={styles.flag}><img src={flags[lang]} width={20} height={14} /></Button>
            <Dropdown.Toggle split variant="dark" id="dropdown-basic" className={styles.flag} />
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLanguage('US')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={lang === 'US' ? true : false}>
                <img src={flags.US} width={20} height={14} className="mr-2" /> EN
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('UK')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={lang === 'GB' ? true : false}>
                <img src={flags.UK} width={20} height={14} className="mr-2" /> EN
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('FR')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={lang === 'FR' ? true : false}>
                <img src={flags.FR} width={20} height={14} className="mr-2" /> FR
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('IN')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={lang === 'IN' ? true : false}>
                <img src={flags.IN} width={20} height={14} className="mr-2" /> IN
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('NP')} className={`d-flex align-items-center ${styles.dropdownItem}`} active={lang === 'NP' ? true : false}>
                <img src={flags.NP} width={20} height={14} className="mr-2" /> NP
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
        </Container>
      </BtNavbar>
    </>
  );
}
