import React, {useEffect} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/cssScreens/Servicios.css";

import safety from "../img/Servicios/Icons/016-safety-1.svg";
import wrench from "../img/Servicios/Icons/011-wrench.svg";
import screw from "../img/Servicios/Icons/034-screw.svg";
import drill from "../img/Servicios/Icons/023-drill.svg";
import gloves from "../img/Servicios/Icons/006-gloves.svg";
import sketch from "../img/Servicios/Icons/019-sketch.svg";

function Servicios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid className="p-0">
      <Row className="resources-banner-servicios">
        <div className="overlay-resources d-flex align-items-center justify-content-center text-center ">
          <Col xs={10} lg={6}>
            <div className="text-white">
              <h3>Servicios</h3>
              <p>
                En Daikin ofrecemos un servicio de excelencia que garantiza a
                nuestros clientes la seguridad y confianza de haber adquirido la
                mejor solución HVAC del mercado
              </p>
            </div>
          </Col>
        </div>
      </Row>
      <Container>
        <Row className="mb-4 mb-lg-0">
          <Col xs={12} lg={6} className="p-5">
            <Image
              fluid
              className="h-100 rounded"
              src={require("../img/Servicios/servicios2.jpg")}
              alt={"Trabajadores"}
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-center text-center">
            <div className="text-start">
              <ul className="list-unstyled">
                <li className="mb-4">
                  <i className="bi bi-chevron-right"></i>Nuestra prioridad es el
                  cliente y satisfacer sus necesidades.
                </li>
                <li className="mb-4">
                  <i className="bi bi-chevron-right"></i>Velamos por sus
                  intereses, asegurándonos de sacar el máximo provecho a su
                  presupuesto mediante bajos costos de mantenimiento y
                  protegiendo su inversión.
                </li>
                <li className="mb-4">
                  <i className="bi bi-chevron-right"></i>Contamos con
                  profesionales y técnicos altamente calificados.
                </li>
                <li className="mb-4">
                  <i className="bi bi-chevron-right"></i>Nuestro servicio es
                  personalizado, sus llamadas son atendidas y nos aseguramos de
                  hacer el seguimiento hasta llegar a la solución.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-blue">
        <Container>
          <Row className="py-5 text-white">
            <h3 className="text-center mb-5">Nuestros servicios incluyen</h3>
            <Col className="d-flex align-items-center justify-content-center text-center">
              <div>
                <div className="circule-icon-servicio mb-2">
                  <Image className="iconServices" src={safety} alt="" />
                </div>
                <p className="white-text">Mantenimiento</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center text-center">
              <div>
                <div className="circule-icon-servicio mb-2">
                  <Image className="iconServices" src={wrench} alt="" />
                </div>
                <p className="white-text">Reparaciones</p>
              </div>
            </Col>

            <Col className="d-flex align-items-center justify-content-center text-center">
              <div>
                <div className="circule-icon-servicio mb-2">
                  <Image className="iconServices" src={screw} alt="" />
                </div>
                <p className="white-text">Partes y repuestos</p>
              </div>
            </Col>

            <Col className="d-flex align-items-center justify-content-center text-center">
              <div>
                <div className="circule-icon-servicio mb-2">
                  <Image className="iconServices" src={drill} alt="" />
                </div>
                <p className="white-text">Reemplazos</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center text-center">
              <div>
                <div className="circule-icon-servicio mb-2">
                  <Image className="iconServices" src={gloves} alt="" />
                </div>
                <p className="white-text">"Turn-key"</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center text-center">
              <div>
                <div className="circule-icon-servicio mb-2">
                  <Image className="iconServices" src={sketch} alt="" />
                </div>
                <p className="white-text">Actualizaciones</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="py-5">
          <h3 className="text-center txt-blue mb-5">Informaciones</h3>
          <Col className="mb-3 mx-0" xs={12} md={6} lg={3}>
            <div className="bg-gray p-4">
              <h5 className="txt-blue">DAIKIN México</h5>
              <p>
                <i className="bi bi-telephone-fill txt-blue me-2"></i>(+52)81
                8333-1335
              </p>
              <p>Ext. 6713 y 6704</p>
              <p>
                <i className="bi bi-envelope-fill txt-blue me-2"></i>
                servicio@daikin.com.mx
              </p>
            </div>
          </Col>

          <Col className="mb-3 mx-0" xs={12} md={6} lg={3}>
            <div className="bg-gray p-4">
              <h5 className="txt-blue">DAIKIN CDMX</h5>
              <p>
                <i className="bi bi-telephone-fill txt-blue me-2"></i>(+52)55
                5147-0148
              </p>
              <p>Ext. 6568</p>
              <p>
                <i className="bi bi-envelope-fill txt-blue me-2"></i>
                servicio@daikin.com.mx
              </p>
            </div>
          </Col>

          <Col className="mb-3 mx-0" xs={12} md={6} lg={3}>
            <div className="bg-gray p-4">
              <h5 className="txt-blue">DAIKIN Cancún</h5>
              <p>
                <i className="bi bi-telephone-fill txt-blue me-2"></i>(+52)55
                5147-0148
              </p>
              <p>Ext. 6568</p>
              <p>
                <i className="bi bi-envelope-fill txt-blue me-2"></i>
                servicio@daikin.com.mx
              </p>
            </div>
          </Col>

          <Col className="mb-3 mx-0" xs={12} md={6} lg={3}>
            <div className="bg-gray p-4">
              <h5 className="txt-blue">DAIKIN Monterrey</h5>
              <p>
                <i className="bi bi-telephone-fill txt-blue me-2"></i>(+52)81
                8333-1335
              </p>
              <p>Ext. 6712</p>
              <p>
                <i className="bi bi-envelope-fill txt-blue me-2"></i>
                servicio@daikin.com.mx
              </p>
            </div>
          </Col>

          <Col className="mb-3 mx-0" xs={12} md={6} lg={3}>
            <div className="bg-gray p-4">
              <h5 className="txt-blue">DAIKIN Guadalajara</h5>
              <p>
                <i className="bi bi-telephone-fill txt-blue me-2"></i>
                (+52)33-1454-1900
              </p>
              <p>Ext. 6610</p>
              <p>
                <i className="bi bi-envelope-fill txt-blue me-2"></i>
                servicio@daikin.com.mx
              </p>
            </div>
          </Col>

          <Col className="mb-3 mx-0" xs={12} md={6} lg={3}>
            <div className="bg-gray p-4">
              <h5 className="txt-blue">DAIKIN Tijuana</h5>
              <p>
                <i className="bi bi-telephone-fill txt-blue me-2"></i>
                (+52)33-1454-1900
              </p>
              <p>Ext. 6610</p>
              <p>
                <i className="bi bi-envelope-fill txt-blue me-2"></i>
                servicio@daikin.com.mx
              </p>
            </div>
          </Col>

          <Col className="mb-3 mx-0" xs={12} md={6} lg={3}>
            <div className="bg-gray p-4">
              <h5 className="txt-blue">DAIKIN León</h5>
              <p>
                <i className="bi bi-telephone-fill txt-blue me-2"></i>
                (+52)477-162-5590
              </p>
              <p>Ext. 6809</p>
              <p>
                <i className="bi bi-envelope-fill txt-blue me-2"></i>
                servicio@daikin.com.mx
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Servicios;
