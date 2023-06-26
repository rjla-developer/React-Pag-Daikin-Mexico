import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Menu() {
  return (
    <Container fluid className="fixed-top px-0" id="home">
      {/* Menu Phone */}
      <Navbar
        className="d-block d-xl-none bg-gray shadow"
        expand="lg"
      >
        <Container className="py-3 px-1">
          <Navbar.Brand href="#home">
            <img className="logo-img" src={require("../img/logo_171x37.png")} alt="" width={200}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              <Nav.Link  href={"nosotros/cultura/"}>Cultura Daikin</Nav.Link>
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
        </Container>
      </Navbar>

      {/* Menu computer */}
      <Navbar
        className="d-xl-block d-none"
        /* bg="light"
        variant="light" */
        expand="lg"
      >
        <Container className="py-2">
          <Navbar.Brand href="#home">
            <img className="logo-img" src={require("../img/logo_171x37.png")} alt="" width={160}/>
            <span className="fontsize-1 country ms-3">MÉXICO</span>
          </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="https://www.daikin.com/">
                DAIKIN GLOBAL <i className="bi bi-globe"></i>
              </Nav.Link>
              <Nav.Link href={""}>CONTACTO</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Navbar
        className="d-xl-block d-none bg-gray shadow"
        expand="lg"
      >
        <Container className="">
          <Nav className="mr-auto">
            <Nav.Link href={"nosotros/cultura/"}>Cultura Daikin</Nav.Link>
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
        </Container>
      </Navbar>
    </Container>
  );
}

export default Menu;
