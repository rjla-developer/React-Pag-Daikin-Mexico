import React from "react";
import { Container, Row, Col, Accordion, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/cssComponents/Footer.css";

function Footer() {
  return (
    <footer className="bg-gray2 text-white">
      {/* Computadora */}
      <Container className="d-none d-lg-block">
        <Row className="py-5">
          <Col>
            <Link className="text-decoration-none text-white" to={"/"}>
              <i className="txt-blue bi bi-chevron-right"></i>
              <span className="fs-5">Inicio</span>
            </Link>
            <ul className="list-unstyled ms-2 mt-1">
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/"}>
                  Productos
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/servicios"}>
                  Servicios
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/"}>
                  Proyectos
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/cultura"}>
                  Planta
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/"}>
                  Contáctanos
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/"}>
                  Bolsa de Trabajo
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/"}>
                  Centro de Entrenamiento
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link
                  className="text-decoration-none text-secondary"
                  href={require("../pdf/DAMX - TC  Eng-Spa- Final V4.pdf")}
                  target="_blank"
                >
                  Terminos y condiciones
                </Link>
              </li>
            </ul>
          </Col>

          <Col>
            <>
              {" "}
              {/* ¿Quiénes somos? */}
              <Link to={"/"} className="text-decoration-none text-white">
                <i className="txt-blue bi bi-chevron-right"></i>
                <span className="fs-5">¿Quiénes somos?</span>
              </Link>
              <ul className="list-unstyled ms-2 mt-1">
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <Link className="text-decoration-none text-secondary" to={"/"}>
                    Nuestra filosofía
                  </Link>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <Link className="text-decoration-none text-secondary" to={"/"}>
                    Historia de innovaciones
                  </Link>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <Link className="text-decoration-none text-secondary" to={"/"}>
                    Daikin Global
                  </Link>
                </li>
              </ul>
            </>

            <>
              {" "}
              {/* ¿Por qué Daikin? */}
              <Link className="text-decoration-none text-white" to={"/"}>
                <i className="txt-blue bi bi-chevron-right"></i>
                <span className="fs-5">¿Por qué Daikin?</span>
              </Link>
              <ul className="list-unstyled ms-2 mt-1">
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <Link className="text-decoration-none text-secondary" to={"/"}>
                    Soluciones innovadoras
                  </Link>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <Link className="text-decoration-none text-secondary" to={"/"}>
                    Soluciones diseñadas para cada necesidad
                  </Link>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <Link className="text-decoration-none text-secondary" to={"/"}>
                    Compromiso con el medio ambiente
                  </Link>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <Link className="text-decoration-none text-secondary" to={"/"}>
                    Presencia global, soporte local
                  </Link>
                </li>
                <li className="mb-1">
                  <i className="txt-blue bi bi-chevron-right"></i>
                  <Link className="text-decoration-none text-secondary" to={"/"}>
                    Servicio postventa
                  </Link>
                </li>
              </ul>
            </>
          </Col>

          <Col>
            <Link to={"/aplicado"} className="text-decoration-none text-white">
              <i className="txt-blue bi bi-chevron-right"></i>
              <span className="fs-5">Industrial/Comercial</span>
            </Link>
            <ul className="list-unstyled ms-2 mt-1">
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/aplicado"}>
                  Chillers
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/aplicado"}>
                  UMAS
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/aplicado"}>
                  WSHP
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/aplicado"}>
                  Paquetes
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/aplicado"}>
                  Evaporadoras hidrónicas
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/aplicado"}>
                  VAV
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/vrv"}>
                  VRV
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/vrv"}>
                  Enfrirados por agua
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/vrv"}>
                  Enfriados por aire
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/vrv"}>
                  Nuevos controles y accesorios
                </Link>
              </li>
              <li className="mb-1">
                <i className="txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/vrv"}>
                  Unidades interiores
                </Link>
              </li>
            </ul>
          </Col>

          <Col>
            <Link to={"/"} className="text-decoration-none text-white">
              <i className="txt-blue bi bi-chevron-right"></i>
              <span className="fs-5">Residencial/Comercial Ligero</span>
            </Link>
            <ul className="list-unstyled ms-2 mt-1">
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/residencial"}>
                  Minisplits
                </Link>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/residencial"}>
                  Divididos residenciales
                </Link>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/residencial"}>
                  Paquetes residenciales
                </Link>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/residencial"}>
                  Divididos comerciales
                </Link>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/residencial"}>
                  Paquetes comerciales
                </Link>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/residencial"}>
                  PTAC
                </Link>
              </li>
              <li className="mb-1">
                <i className=" txt-blue bi bi-chevron-right"></i>
                <Link className="text-decoration-none text-secondary" to={"/residencial"}>
                  Calefactores a gas
                </Link>
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
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Productos</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/servicios"}
                >
                  <p className="mb-0">Servicios</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">DSC</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Proyectos</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/cultura"}
                >
                  <p className="mb-0">Planta</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Contáctanos</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Bolsa de Trabajo</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Centro de Entrenamiento</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Distribuidores</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  href={require("../pdf/DAMX - TC  Eng-Spa- Final V4.pdf")}
                  target="_blank"
                >
                  <p className="mb-0">Terminos y condiciones</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Quiénes Somos?</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Nuestra filosofía</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Historia de innovaciones</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Daikin Global</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Por qué Daikin?</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Soluciones innovadoras</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">
                    Soluciones diseñadas para cada necesidad
                  </p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Compromiso con el medio ambiente</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Presencia global, soporte local</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/"}
                >
                  <p className="mb-0">Servicio postventa</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Industria/Comercial</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/aplicado"}
                >
                  <p className="mb-0">Chillers</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/aplicado"}
                >
                  <p className="mb-0">UMAS</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/aplicado"}
                >
                  <p className="mb-0">WSHP</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/aplicado"}
                >
                  <p className="mb-0">Paquetes</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/aplicado"}
                >
                  <p className="mb-0">Evaporadoras hidrónicas</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/aplicado"}
                >
                  <p className="mb-0">VAV</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/vrv"}
                >
                  <p className="mb-0">VRV</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/vrv"}
                >
                  <p className="mb-0">Enfriados por agua</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/vrv"}
                >
                  <p className="mb-0">Enfriados por aire</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/vrv"}
                >
                  <p className="mb-0">Nuevos controles y accesorios</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/vrv"}
                >
                  <p className="mb-0">Unidades interiores</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Residencial/Comercial Ligero</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/residencial"}
                >
                  <p className="mb-0">Minisplits</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/residencial"}
                >
                  <p className="mb-0">Divididos residenciales</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/residencial"}
                >
                  <p className="mb-0">Paquetes residenciales</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/residencial"}
                >
                  <p className="mb-0">Divididos Comerciales</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/residencial"}
                >
                  <p className="mb-0">Paquetes comerciales</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/residencial"}
                >
                  <p className="mb-0">PTAC</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="text-decoration-none text-white d-flex justify-content-between"
                  to={"/residencial"}
                >
                  <p className="mb-0">Calefactores a gas</p>
                  <i className="bi bi-chevron-right text-end"></i>
                </Link>
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
                  <Link
                    className="text-decoration-none text-white opacity-50"
                    href={require("../pdf/DAMX-Aviso-de-Privacidad-Integral.pdf")}
                  >
                    Aviso de privacidad de Daikin México
                  </Link>
                </Col>
                <Col xs={"auto"}>
                  <Link
                    className="text-decoration-none text-white opacity-50"
                    href={require("../pdf/DMMX - Aviso de Privacidad Integral.pdf")}
                  >
                    Aviso de privacidad Daikin Manufacturing México
                  </Link>
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
