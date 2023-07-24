import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container fluid className="fixed-top px-0 bg-white" id="home">
      {/* Menu Phone */}
      <Navbar className="d-block d-xl-none bg-gray shadow" expand="lg">
        <Container className="py-3 px-1">
          <Navbar.Brand>
            <Link className="text-decoration-none text-black" to={"/"}>
              <img
                className="logo-img"
                src={require("../img/logo_171x37.png")}
                alt="Logo Daikin México"
                width={200}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" className="me-3" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black"
                  to={"/cultura"}
                >
                  Cultura Daikin
                </Link>
              </Nav.Link>
              <NavDropdown title="Productos" id="navbarDropdown">
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to={"/"}>
                    <i className="bi bi-chevron-right"></i> VRV
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to={"/"}>
                    <i className="bi bi-chevron-right"></i> Residencial
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to={"/"}>
                    <i className="bi bi-chevron-right"></i> Aplicado
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link className="text-decoration-none text-black" to={"/servicios"}>
                  Servicios
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-black" to={"/"}>
                  Distribuidores
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-black" to={"/noticias"}>
                  Noticias e Industria
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Menu computer */}
      <Navbar className="d-xl-block d-none" expand="lg">
        <Container className="py-2">
          <Navbar.Brand>
            <Link className="text-decoration-none text-black" to={"/"}>
              <img
                className="logo-img"
                src={require("../img/logo_171x37.png")}
                alt="Logo Daikin México"
                width={160}
              />
              <span className="fontsize-1 country ms-3">MÉXICO</span>
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="https://www.daikin.com/">
              DAIKIN GLOBAL <i className="bi bi-globe"></i>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-secondary" to={"/"}>
                CONTACTO
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="d-xl-block d-none bg-gray shadow" expand="lg">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                className="text-decoration-none text-secondary"
                to={"/cultura"}
              >
                Cultura Daikin
              </Link>
            </Nav.Link>
            <NavDropdown title="Productos" id="navbarDropdown">
              <NavDropdown.Item href={"/"}>
                <i className="bi bi-chevron-right"></i> VRV
              </NavDropdown.Item>
              <NavDropdown.Item href={"/"}>
                <i className="bi bi-chevron-right"></i> Residencial
              </NavDropdown.Item>
              <NavDropdown.Item href={"/"}>
                <i className="bi bi-chevron-right"></i> Aplicado
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link className="text-decoration-none text-secondary" to={"/servicios"}>
                Servicios
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-secondary" to={"/"}>
                Distribuidores
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-secondary" to={"/noticias"}>
                Noticias e Industria
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Menu;
