import React from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar as BtNavbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styles from "../../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <BtNavbar expand="lg" className={styles.navbar} variant="dark">
        <Container>
          <BtNavbar.Brand href="#home">StalkMarket</BtNavbar.Brand>
          <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BtNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">How it works?</Nav.Link>
              <Nav.Link href="#link">Our Team</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
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
