import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar as BtNavbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styles from "../../../styles/components/Navbar.module.css";
import {
  Events,
  scrollSpy,
} from "react-scroll";
import { scrollTo, scrollToTop } from '../../utils/scroller';

export default function Navbar() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  });

  return (
    <>
      <BtNavbar
        expand="lg"
        className={styles.navbar}
        variant="dark"
        fixed="top"
      >
        <Container>
          <BtNavbar.Brand className={styles.navBrand} onClick={() => scrollToTop()}>StalkMarket</BtNavbar.Brand>
          <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BtNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-auto">
              <Nav.Link className={styles.navLink} onClick={() => scrollTo('about')}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => scrollTo('how-it-works')}>
                How it works?
              </Nav.Link>
              <Nav.Link onClick={() => scrollTo('team')}>
                Our Team
              </Nav.Link>
              <Nav.Link onClick={() => scrollTo('contact')}>
                Contact
              </Nav.Link>
            </Nav>
            <Button size="md" variant="outline-warning">
              Login
            </Button>
          </BtNavbar.Collapse>
        </Container>
      </BtNavbar>
    </>
  );
}
