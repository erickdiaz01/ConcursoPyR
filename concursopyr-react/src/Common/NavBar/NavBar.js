import React from "react";
// import useAuth from '../../hooks/useAuth'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Assets/Images/brain-2750415.png";
import "./NavBar.css";

const NavBar = () => {
  // const auth = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
      <Container>
        
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
         THE QA GAME
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/crearconcurso">Generar nuevo juego</Nav.Link>
            <Nav.Link href="/historico">Historico</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
