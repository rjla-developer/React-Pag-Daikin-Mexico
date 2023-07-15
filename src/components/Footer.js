import React from "react";
import { Container, Row, Col, Accordion, ListGroup } from "react-bootstrap";
import "../css/cssComponents/Footer.css";

function Footer() {
  return (
    <footer className="bg-gray2 text-white">
      {/* Computadora */}
      <Container className="d-none d-lg-block">
        <Row className="py-5">
          <Col>
            <a className="text-decoration-none text-white" href="/">
              <i className="txt-blue bi bi-chevron-right"></i>
              <span className="fs-5">Inicio</span>
            </a>
            <ul className="list-unstyled ms-2 mt-1">
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Productos
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Servicios
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Proyectos
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Planta
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Contáctanos
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Bolsa de Trabajo
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Centro de Entrenamiento
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Distribuidores
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <>
              {" "}
              {/* ¿Quiénes somos? */}
              <a href="/" className="text-decoration-none text-white">
                <i className="txt-blue bi bi-chevron-right"></i>
                <span className="fs-5">¿Quiénes somos?</span>
              </a>
              <ul className="list-unstyled ms-2 mt-1">
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <a className="text-decoration-none text-secondary" href="/">
                    Nuestra filosofía
                  </a>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <a className="text-decoration-none text-secondary" href="/">
                    Historia de innovaciones
                  </a>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <a className="text-decoration-none text-secondary" href="/">
                    Daikin Global
                  </a>
                </li>
              </ul>
            </>

            <>
              {" "}
              {/* ¿Por qué Daikin? */}
              <a className="text-decoration-none text-white" href="/">
                <i className="txt-blue bi bi-chevron-right"></i>
                <span className="fs-5">¿Por qué Daikin?</span>
              </a>
              <ul className="list-unstyled ms-2 mt-1">
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <a className="text-decoration-none text-secondary" href="/">
                    Soluciones innovadoras
                  </a>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <a className="text-decoration-none text-secondary" href="/">
                    Soluciones diseñadas para cada necesidad
                  </a>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <a className="text-decoration-none text-secondary" href="/">
                    Compromiso con el medio ambiente
                  </a>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <a className="text-decoration-none text-secondary" href="/">
                    Presencia global, soporte local
                  </a>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <a className="text-decoration-none text-secondary" href="/">
                    Servicio postventa
                  </a>
                </li>
              </ul>
            </>
          </Col>

          <Col>
            <a href="/" className="text-decoration-none text-white">
              <i className="txt-blue bi bi-chevron-right"></i>
              <span className="fs-5">Industrial/Comercial</span>
            </a>
            <ul className="list-unstyled ms-2 mt-1">
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Chillers
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  UMAS
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  WSHP
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Paquetes
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Evaporadoras hidrónicas
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  VAV
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  VRV
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Enfrirados por agua
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Enfriados por aire
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Nuevos controles y accesorios
                </a>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Unidades interiores
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <a href="/" className="text-decoration-none text-white">
              <i className="txt-blue bi bi-chevron-right"></i>
              <span className="fs-5">Residencial/Comercial Ligero</span>
            </a>
            <ul className="list-unstyled ms-2 mt-1">
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Minisplits
                </a>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Divididos residenciales
                </a>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Paquetes residenciales
                </a>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Divididos comerciales
                </a>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Paquetes comerciales
                </a>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  PTAC
                </a>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <a className="text-decoration-none text-secondary" href="/">
                  Calefactores a gas
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Celulares */}
      <Accordion className="d-block d-lg-none text-white" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sobre Daikin</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Productos</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Servicios</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">DSC</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Proyectos</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Planta</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Contáctanos</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Bolsa de Trabajo</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Centro de Entrenamiento</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Distribuidores</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Quiénes Somos?</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Nuestra filosofía</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Historia de innovaciones</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Daikin Global</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Por qué Daikin?</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Soluciones innovadoras</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">
                    Soluciones diseñadas para cada necesidad
                  </p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Compromiso con el medio ambiente</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Presencia global, soporte local</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Servicio postventa</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Industria/Comercial</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Chillers</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">UMAS</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">WSHP</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Paquetes</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Evaporadoras hidrónicas</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">VAV</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">VRV</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Enfriados por agua</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Enfriados por aire</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Nuevos controles y accesorios</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Unidades interiores</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Residencial/Comercial Ligero</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Minisplits</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Divididos residenciales</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Paquetes residenciales</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Divididos Comerciales</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Paquetes comerciales</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">PTAC</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href="/"
                >
                  <p className="mb-0">Calefactores a gas</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Pie de página */}
      <Container fluid className="bg-black text-white">
        <Container>
          <Row className="py-3 fontsize-1">
            <Col sm={12} lg={6} className="mb-0 text-center text-xl-start">
              <p className="mb-0">
                © DAIKIN AIRCONDITIONING MÉXICO, S DE RL DE CV, 2021
              </p>
            </Col>
            <Col
              sm={12}
              lg={6}
              className="text-center text-xl-end mt-2 mt-lg-0"
            >
              <Row className="d-flex justify-content-end">
                <Col xs={"auto"}>
                  <a
                    className="text-decoration-none text-white opacity-50"
                    href={require("../pdf/DAMX-Aviso-de-Privacidad-Integral.pdf")}
                  >
                    Aviso de privacidad de Daikin México(DAMX)
                  </a>
                </Col>
                <Col xs={"auto"}>
                  <a
                    className="text-decoration-none text-white opacity-50"
                    href={require("../pdf/DMMX - Aviso de Privacidad Integral.pdf")}
                  >
                    Daikin Manufacturing México(DMMX)
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
