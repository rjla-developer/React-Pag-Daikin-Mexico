import React, { useState } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";

function ItemResponsabilidad() {
  const [imageLoaded, setImageLoaded] = useState(true);
  return (
    <>
      {imageLoaded && (
        <div className="charge-respon spinner-container w-100 position-absolute d-flex align-items-center justify-content-center d-none d-md-block">
          <Spinner animation="grow" className="text-white me-2" />
          <Spinner animation="grow" className="text-white" />
          <Spinner animation="grow" className="text-white ms-2" />
        </div>
      )}
      <Image
        className={`img-responsabilidad w-25 d-none d-md-block ${imageLoaded ? "d-none" : ""}`}
        src={require("../../img/CulturaDaikin/Responsabilidad/cultura_material_02.jpg")}
        onLoad={() => setImageLoaded(false)}
      />

      <Container fluid className="bg-blue py-3 py-md-5">
        <Container className="py-3 py-md-5">
          <Row>
            <Col xs={12} md={6}>
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
            <Col xs={12} md={6}>
              {imageLoaded && (
                <div className="spinner-container w-100 d-flex align-items-center justify-content-center d-block d-md-none mt-5">
                  <Spinner animation="grow" className="text-white me-2" />
                  <Spinner animation="grow" className="text-white" />
                  <Spinner animation="grow" className="text-white ms-2" />
                </div>
              )}
              <Image
              fluid
              className={`my-4 d-block d-md-none rounded ${imageLoaded ? "d-none" : ""}`}
              src={require("../../img/CulturaDaikin/Responsabilidad/cultura_material_02.jpg")}
              onLoad={() => setImageLoaded(false)}
            />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-white py-3 py-md-5">
        <Container className="py-3 py-md-5">
          <Row>
            <Col xs={12} md={6}>
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
