import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  ListGroup,
  ListGroupItem,
  Image,
  Button,
} from "react-bootstrap";
import "../css/cssScreens/Productos.css";
import axios from "axios";

function VRV() {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState({});

  const fetchData = useCallback(() => {
    axios
      .get("/api/vrv.json")
      .then((response) => {
        setProducts(response.data["products"]);
        setProduct(response.data["products"][0]);
        /* console.log(product) */
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container fluid>
      <Row className="resources-banner-productos py-5 text-white">
        <div className="overlay-resources d-flex align-items-center justify-content-center">
          <Col xs={12} md={5} className="px-4 px-md-0 text-center">
            <div>
              <h3>VRV</h3>
              <p>
                Con nuestra tecnología VRV®, podemos personalizar cada zona de
                manera individual, ya sea por cuarto o por piso, dando como
                resultado una mayor eficiencia y un consumo mínimo de energía
                eléctrica.
              </p>
              <p>
                Estos sistemas están enfocados para uso comercial, como pueden
                ser: oficinas, colegios, hoteles, hospitales, residencias, etc.
                Este resultado se logra gracias a su gran adaptabilidad de
                diseño.
              </p>
              <p>
                Los productos Daikin son reconocidos por su gran calidad y
                confiabilidad. Ofrecemos una amplia variedad de productos de
                última generación, diseñados y fabricados con tecnologías
                propias, que brindan la flexibilidad de adaptarse a los
                requerimiento de su aplicación.
              </p>
            </div>
          </Col>
        </div>
      </Row>
      <Container>
        <Row className="my-5 pt-3 pb-5">
          <Col xs={12} md={3}>
            <Accordion>
              <Accordion.Item eventKey="0" className="text-white">
                <Accordion.Header>Enfriados por agua</Accordion.Header>
                <Accordion.Body className="p-0">
                  <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                    <Button
                      onClick={() => setProduct(products[0])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        VRV W Heat Recovery Frío y calor simultáneos
                      </ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[1])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        VRV W Heat Pump Sistemas inteligentes
                      </ListGroupItem>
                    </Button>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="text-white">
                <Accordion.Header>Enfriados por aire</Accordion.Header>
                <Accordion.Body className="p-0">
                  <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                    <Button
                      onClick={() => setProduct(products[2])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        VRV IVS – Solución para espacios pequeños
                      </ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[3])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>Heat Pump – Alta eficiencia</ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[4])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        Heat Recovery – Frio y calor simultáneos
                      </ListGroupItem>
                    </Button>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="text-white">
                <Accordion.Header>
                  Nuevos controles y accesorios
                </Accordion.Header>
                <Accordion.Body className="p-0">
                  <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                    <Button
                      onClick={() => setProduct(products[5])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>Daikin Zoning Kit (DZK)</ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[6])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        Ventilador recuperador de calor (VAM)
                      </ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[7])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>Control de navegación</ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[8])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>Smart VRV Manager (SVM)</ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[9])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        Intelligent Touch Manager (iTM)
                      </ListGroupItem>
                    </Button>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="text-white">
                <Accordion.Header>Unidades interiores</Accordion.Header>
                <Accordion.Body className="p-0">
                  <ListGroup className="border-0">
                    <Button
                      onClick={() => setProduct(products[10])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        Unidades Manejadoras de Aire (AHU)
                      </ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[11])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>Montado en pared</ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[12])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        Ductable oculto sobre plafón
                      </ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[13])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        Cassette de 4 vías suspendido en techo
                      </ListGroupItem>
                    </Button>
                    <Button
                      onClick={() => setProduct(products[14])}
                      variant="link"
                      className="text-decoration-none m-0 p-0 rounded-0 border-0"
                    >
                      <ListGroupItem>
                        Cassette montado en techo (flujo circular con sensor)
                      </ListGroupItem>
                    </Button>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          {Object.keys(product).length > 0 &&
          product.hasOwnProperty("image") &&
          product.hasOwnProperty("content") ? (
            <>
              <Col
                xs={12}
                md={5}
                className="d-flex align-items-center justify-content-center"
              >
                {product.image ? (
                  <Image
                    fluid
                    src={require(`../img/Productos/VRV/Productos/${product["image"]}`)}
                  />
                ) : (
                  <Image fluid src={require(`../img/Productos/VRV/Productos/6.-CASSETTE-MONTADO-EN-TECHO.png`)} />
                )}
              </Col>

              <Col xs={12} md={4}>
                <h3 className="txt-blue mb-5">{product["content"]["title"]}</h3>
                <p className="mb-4">{product["content"]["description"]}</p>

                <div className="mb-4">
                  {product["content"]["features"].map((element, index) => (
                    <p key={index}>
                      <i className="bi bi bi-chevron-right" />{" "}
                      {element["feature"]}
                    </p>
                  ))}
                </div>

                <div className="mb-5">
                  <h3 className="txt-blue">
                    <i className="bi bi-download"></i> Descargas
                  </h3>
                </div>

                <Row>
                  {product["downloads"].map((element, index) => (
                    <Col key={index}>
                      <Button onClick={() => {}}>
                        {element.download_text}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Col>
            </>
          ) : null}
        </Row>
      </Container>
    </Container>
  );
}

export default VRV;
