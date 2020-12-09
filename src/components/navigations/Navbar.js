import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar as BtNavbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styles from "../../../styles/components/Navbar.module.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

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

  function scrollToTop() {
    scroll.scrollToTop();
  }

  function scrollToBottom() {
    scroll.scrollToBottom();
  }

  function scrollTo() {
    scroll.scrollTo(100);
  }

  function handleSetActive(to) {
    console.log(to);
  }

  return (
    <>
      <BtNavbar
        expand="lg"
        className={styles.navbar}
        variant="dark"
        fixed="top"
      >
        <Container>
          <BtNavbar.Brand href="#home">StalkMarket</BtNavbar.Brand>
          <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BtNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-auto">
              <Nav.Link
                activeClass="active"
                to="#about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive()}
              >
                About
              </Nav.Link>
              <Nav.Link
                activeClass="active"
                to="#how-it-works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive()}
              >
                How it works?
              </Nav.Link>
              <Nav.Link
                activeClass="active"
                href="#team"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive()}
              >
                Our Team
              </Nav.Link>
              <Nav.Link
                activeClass="active"
                to="#contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive()}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Button size="sm" variant="outline-warning">
              Login
            </Button>
          </BtNavbar.Collapse>
        </Container>
      </BtNavbar>
    </>
  );
}
