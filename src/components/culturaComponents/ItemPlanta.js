import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function ItemPlanta() {
  return (
    <>
      <div className="container-txt-planta">
        <p>
          Después de 10 años de operación en la ciudad de México, en enero de
          2011 la planta Daikin México fue reubicada en la ciudad de San Luis
          Potosí con el fin de expandir su capacidad productiva y ampliar su
          cadena logística.
        </p>
        <p>
          Nuestro sistema de fabricación combina la producción en línea con la
          producción personalizada, confiriendo así un alto valor agregado en
          términos de la personalización de nuestros productos, “trajes hechos a
          la medida”, sin que esto incurra en los altos costos típicos que
          generaría un producto diseñado y fabricado para cumplir con los
          requerimientos particulares de un cliente.
        </p>
        <p>
          En esta planta fabricamos equipos para venta nacional y de exportación
          para los Estados Unidos de Norteamérica, Canadá, Latinoamérica y
          recientemente a los EAU.
        </p>
      </div>
      <Row className="d-flex justify-content-center p-0 m-0">
        <Col xs={7} className="p-0 m-0">
          <Image
            className="img-fluid"
            src={require("../../img/CulturaDaikin/Planta/cultura_material_04.jpg")}
            alt=""
          />
        </Col>
        <Col className="p-5 m-0 text-start" xs={5}>
          <h2 className="txt-blue mt-2 ms-5">Planta</h2>
        </Col>
      </Row>
      <Container className="py-5">
        <h2 className="txt-blue text-start mb-5">Nuestros productos:</h2>
        <Row>
          <Col className="border-blue d-flex align-items-center justify-content-center py-5 mx-3">
            <p className="mb-0">
              Manejadoras semi-custom para aplicaciones Confort.
            </p>
          </Col>
          <Col className="border-blue d-flex align-items-center justify-content-center py-5 mx-3">
            <p className="mb-0">
              Manejadoras custom para aplicaciones Confort, IAQ, grado
              farmacéutico y alimenticio.
            </p>
          </Col>
          <Col className="border-blue d-flex align-items-center justify-content-center py-5 mx-3">
            <p className="mb-0">Chillers enfriados por aire.</p>
          </Col>
          <Col className="border-blue d-flex align-items-center justify-content-center py-5 mx-3">
            <p className="mb-0">Gabinetes para Filtración química (AAF).</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-blue py-5">
        <Container>
          <Row>
            <Col>
              <div className="text-white text-start">
                <h5 class="white-title-culture">
                  Mercaderes # 20-301 Colonia San José Insurgentes C.P. 03900,
                  México, D.F.
                </h5>
                <h5 class="white-title-culture">+(52)(55) 5147 0148</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default ItemPlanta;
