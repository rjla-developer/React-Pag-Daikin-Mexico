import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Menu() {
  return (
    <div className="fixed-top" id="home">
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          className="logo-img"
          src={"../img/logo_171x37.png"}
          alt=""
        />
        <span className="country">MÉXICO</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link href="https://www.daikin.com/">
            DAIKIN GLOBAL <i className="bi bi-globe"></i>
          </Nav.Link>
          <Nav.Link href={""}>CONTACTO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="mobile-menu" href="#home">
        <img
          className="logo-img"
          src={"/img/logo_171x37.png"}
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link href={"nosotros/cultura/"}>
            Cultura Daikin
          </Nav.Link>
          <NavDropdown title="Productos" id="navbarDropdown">
            <NavDropdown.Item href={"productos/vrv/1/"}>
              <i className="bi bi-chevron-right"></i> VRV
            </NavDropdown.Item>
            <NavDropdown.Item href={"productos/residencial/1/"}>
              <i className="bi bi-chevron-right"></i> Residencial
            </NavDropdown.Item>
            <NavDropdown.Item href={"productos/aplicado/1/"}>
              <i className="bi bi-chevron-right"></i> Aplicado
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={"servicios"}>Servicios</Nav.Link>
          <Nav.Link data-toggle="modal" data-target="#exampleModalCenter">
            Distribuidores
          </Nav.Link>
          <Nav.Link href={"daikin-noticias-industria"}>
            Noticias e Industria
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
}

export default Menu;
