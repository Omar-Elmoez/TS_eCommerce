import { NavLink } from "react-router-dom";
import { HeaderIcon } from "@/components/eCommerce";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";

import styles from "./styles.module.css";
const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <section className={headerContainer}>
        <h1 className={headerLogo}>
          <span>OE</span> <Badge bg="info">Ecom</Badge>
        </h1>
        <div className="d-flex gap-3">
          <HeaderIcon icon="wishlist" />
          <HeaderIcon icon="cart" />
        </div>
      </section>

      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
