import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Modal,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [setstateOption, setSetstateOption] = useState({});
  const [dataDistributors, setDataDistributors] = useState({});

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const fetchData = () => {
    axios
      .get("/api/distributorsByState.json")
      .then((response) => {
        setDataDistributors(response.data);
        /* console.log(response.data); */
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const options = Object.values(dataDistributors);

  /* console.log(dataDis) */
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
                  <Link className="text-decoration-none text-black" to={"/vrv"}>
                    <i className="bi bi-chevron-right"></i> VRV
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to={"/residencial"}>
                    <i className="bi bi-chevron-right"></i> Residencial
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to={"/aplicado"}>
                    <i className="bi bi-chevron-right"></i> Aplicado
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black"
                  to={"/servicios"}
                >
                  Servicios
                </Link>
              </Nav.Link>
              <Nav.Link onClick={handleShowModal}>Distribuidores</Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black"
                  to={"/noticias"}
                >
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
              <NavDropdown.Item>
                <Link
                  className="text-decoration-none text-secondary"
                  to={"/vrv"}
                >
                  <i className="bi bi-chevron-right"></i> VRV
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="text-decoration-none text-secondary"
                  to={"/residencial"}
                >
                  <i className="bi bi-chevron-right"></i> Residencial
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="text-decoration-none text-secondary"
                  to={"/aplicado"}
                >
                  <i className="bi bi-chevron-right"></i> Aplicado
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link
                className="text-decoration-none text-secondary"
                to={"/servicios"}
              >
                Servicios
              </Link>
            </Nav.Link>
            <Nav.Link onClick={handleShowModal}>Distribuidores</Nav.Link>
            <Nav.Link>
              <Link
                className="text-decoration-none text-secondary"
                to={"/noticias"}
              >
                Noticias e Industria
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Modal centrado verticalmente */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Elige un estado:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataDistributors != null ? (
            <Autocomplete
              disablePortal
              id="grouped-state"
              options={options}
              getOptionLabel={(option) => option.state}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Estado" />}
              onChange={(event, value) => {
                setSetstateOption(value);
              }}
            />
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Link
            className="btn btn-primary"
            to={"/distribuidores"}
            onClick={handleCloseModal}
            state={setstateOption}
          >
            Continuar
          </Link>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Menu;
