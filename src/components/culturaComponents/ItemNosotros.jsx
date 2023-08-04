import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function ItemNosotros() {
  return (
    <div>
      <Row className="resources-banner-nosotros py-5 text-white">
        <div className="overlay-resources d-flex align-items-center justify-content-center">
          <Col xs={12} md={6} className="px-4 px-md-0">
            <div>
              <h3 className="mb-4">Nosotros</h3>
              <p>
                Somos la compañía más grande de aire acondicionado, calefacción,
                ventilación y refrigeración a nivel mundial. Ofrecemos
                soluciones innovadoras de climatización para satisfacer
                necesidades en mercados residenciales, comerciales e
                industriales.
              </p>
            </div>
          </Col>
        </div>
      </Row>
      <Container className="px-3 my-1 my-md-5 py-4 py-md-5">
        <h2 className="txt-blue mb-4 mb-md-5 text-start">
          Somos reconocidos mundialmente por nuestra calidad y versatilidad en
          las soluciones que ofrecemos.
        </h2>
        <p className="mb-4 mb-md-5 text-start">
          Nos involucramos de inicio a fin en el diseño de nuestros sistemas
          HVAC, proporcionando óptimos beneficios que superen sus expectativas
          en cuanto a:
        </p>
        <Row className="txt-blue d-flex justify-content-center mb-2 mb-md-5">
          <Col xs={8} md={4} xl={2} className="border-blue d-flex align-items-center justify-content-center py-4 mx-3 mb-3">
            <p className="mb-0">Eficiencia energética</p>
          </Col>
          <Col xs={8} md={4} xl={2} className="border-blue d-flex align-items-center justify-content-center py-4 mx-3 mb-3">
            <p className="mb-0">
              Calidad superior del aire interior. (Calidad en el aire
              acondicionado)Eficiencia energética
            </p>
          </Col>
          <Col xs={8} md={4} xl={2} className="border-blue d-flex align-items-center justify-content-center py-4 mx-3 mb-3">
            <p className="mb-0">
              Menor costo para la propiedad. (Reducción de costos)
            </p>
          </Col>
          <Col xs={8} md={4} xl={2} className="border-blue d-flex align-items-center justify-content-center py-4 mx-3 mb-3">
            <p className="mb-0">Funcionamiento silencioso</p>
          </Col>
        </Row>
        <p className="text-start">
          Millones de personas cada día dependen de nuestros productos para
          proporcionar el clima adecuado a numerosos edificios mundialmente
          destacados por su confort y sustentabilidad.
        </p>
      </Container>
      <Container fluid className="bg-blue">
        <Container>
          <Row className="text-white d-flex align-items-center justify-content-center py-5">
            <Col xs={12} md={7}>
              <div>
                <h3>Filosofía Daikin</h3>
                <p className="mb-0">
                  Escuchamos y satisfacemos los deseos y necesidades de nuestros
                  clientes. Contribuimos a la comunidad con las más avanzadas
                  tecnologías e innovaciones, anticipando las necesidades
                  futuras del mercado y preservando el medio ambiente. Nuestra
                  gente es nuestro más preciado recurso. Somos un grupo experto,
                  flexible y comprometido que ofrece soluciones, no simplemente
                  productos. Construimos relaciones amigables y constructivas
                  con nuestros aliados de negocio para lograr el beneficio
                  mutuo.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="d-flex align-items-center justify-content-center my-5">         
          <Col xs={12} lg={5} className="text-start order-lg-last mb-2 mb-md-3 mb-lg-0">
            <div>
              <h3 className="txt-blue mb-2 mb-md-4">Soluciones innovadoras</h3>
              <p>
                En Daikin siempre buscamos crear nuevas tecnologías en aire
                acondicionado para satisfacer las necesidades de nuestros
                clientes. Por ello contamos con nuestro Centro de Desarrollo
                ubicado en Minneapolis, USA, el cual está altamente equipado
                para acelerar el desarrollo de nuevas e innovadoras creaciones,
                como: avances tecnológicos, innovaciones en ahorro de energía,
                entre otros, con la finalidad de crear experiencias y soluciones
                únicas, efectivas y sustentables.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={5} className="me-0 me-lg-5">
            <Image
              className="img-fluid rounded"
              src={require("../../img/CulturaDaikin/Nosotros/cultura_material_09.jpg")}
            />
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center py-1 py-md-5 mt-0 mt-md-5 mb-5">
          <Col xs={12} lg={5} className="text-start me-0 me-lg-5 mb-2 mb-md-3 mb-lg-0">
            <div>
              <h3 className="txt-blue mb-3 mb-md-4">Presencia Global, Soporte Local</h3>
              <p className="mb-4 mb-md-5">
                En Daikin tendrán la seguridad de contar siempre con un
                representante cerca de su localidad, quienes combinan un amplio
                conocimiento de nuestros productos y la experiencia local para
                ofrecer soluciones efectivas y adaptables. Cobertura en más de
                75 países para asegurar que nuestros productos y servicios estén
                siempre a su alcance.
              </p>
              <Row className="mb-3">
                <Col>
                  <Button className="w-100 shadow">
                    México
                  </Button>
                </Col>
                <Col>
                  <Button className="w-100 shadow">
                    Global
                  </Button>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Button className="w-100 shadow">
                    Contactos de Ventas y Servicios
                  </Button>
                </Col>
                <Col>
                  <Button className="w-100 shadow">
                    Localidades Daikin
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={12} lg={5}>
            <Image
              className="img-fluid rounded"
              src={require("../../img/CulturaDaikin/Nosotros/cultura_material_07.jpg")}
            />
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default ItemNosotros;
