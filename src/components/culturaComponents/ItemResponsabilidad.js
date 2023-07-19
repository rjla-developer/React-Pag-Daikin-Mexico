import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function ItemResponsabilidad() {
  return (
    <>
      <Image
        className="img-responsabilidad w-25"
        src={require("../../img/CulturaDaikin/Responsabilidad/cultura_material_02.jpg")}
      />

      <Container fluid className="bg-blue py-5">
        <Container className="py-5">
          <Row>
            <Col xs={6}>
              <div className="text-white text-start">
                <h3 className="mb-4">Responsabilidad ambiental</h3>
                <p className="mb-0">
                  Estamos comprometidos con las prácticas sostenibles como parte
                  de nuestra cultura corporativa. Como empresa HVAC, tenemos una
                  oportunidad única para hacer la diferencia en iniciativas
                  sustentables. Nuestros productos de aire acondicionado y
                  sistemas, ahorran energía, reducen el impacto ambiental y
                  ayudan a las instalaciones a ganar puntos hacia la
                  certificación LEED®.
                </p>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Container>

      <Container fluid className="bg-white py-5">
        <Container className="py-5">
          <Row>
            <Col xs={6}>
              <div className="text-start">
                <h3 className="txt-blue mb-4">Responsabilidad ambiental</h3>
                <ul>
                  <li className="mb-3">
                    Productos de alta eficiencia energética que ayudan a reducir
                    la huella del CO2 y el uso de recursos naturales.
                  </li>
                  <li>
                    La reducción de emisiones de gases (“greenhouse gas”) de los
                    procesos de producción y fomentamos la cultura ecológica,
                    empezando por nosotros mismos.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default ItemResponsabilidad;
