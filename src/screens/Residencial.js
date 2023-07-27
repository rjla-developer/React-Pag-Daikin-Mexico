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

function Residencial() {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState({});

  const dataItemsResidencial = [
    {
      item: "Divididos residenciales",
      data: [
        {
          item: "Condensadoras",
          data: [
            {
              item: "Solo frío",
              data: [
                "GSX14",
                "CKL",
                "GSC13",
                "GSX13",
                "GSX16",
                "DX18TC",
                "DX20VC",
              ],
            },
            {
              item: "Bomba de calor",
              data: [
                "GSZ14",
                "GSH13",
                "GSZ13",
                "GSZ16",
                "DZ18TC",
                "DZ18VC",
                "DZ20VC",
              ],
            },
          ],
        },
        {
          item: "Evaporadas",
          data: [
            {
              item: "Solo frío",
              data: [
                "High Wall",
                "Piso techo"
              ],
            },
            {
              item: "Bomba de calor",
              data: [
                "Piso techo",
                "Cassette",
                "Fan & Coil con gabinete",
                "Fan & coil",
              ],
            },
          ],
        },
        {
          item: "Manejadoras de aire",
          data: [
            {
              item: "Bomba de calor",
              data: [
                "ARUF",
                "ASPT",
                "AVPTC",
                "DVPEC",
                "DVPVC",
              ],
            },
            {
              item: "Multisplits",
              data: [
                "MULTIZONE",
                "MATCH-IT",
              ],
            },
          ],
        },
      ],
    },
    
  ];

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
              <h3>Residencial</h3>
              <p>
                Los productos Daikin son reconocidos por su gran calidad y
                confiabilidad. Ofrecemos una amplia variedad de productos de
                última generación, diseñados y fabricados con tecnologías
                propias, que brindan la flexibilidad de adaptarse a los
                requerimientos de su aplicación.
              </p>
            </div>
          </Col>
        </div>
      </Row>
      <Container>
        <Row className="my-5 pt-3 pb-5">
          <Col xs={12} md={3}>
            <Accordion>
              {dataItemsResidencial.map((element, index) => {
                return (
                  <>
                    <Accordion.Item eventKey={index} className="text-white">
                      <Accordion.Header>{element.item}</Accordion.Header>
                      <Accordion.Body className="p-2">
                        <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                          {element["data"].map((element2, index) => {
                            return (
                              <>
                                <Accordion>
                                  <Accordion.Item
                                    eventKey={index}
                                    className="text-white"
                                  >
                                    <Accordion.Header>
                                      {element2.item}
                                    </Accordion.Header>
                                    <Accordion.Body className="p-2">
                                      <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                                        {element2["data"].map(
                                          (element3, index) => {
                                            return (
                                              <>
                                                <Accordion>
                                                  <Accordion.Item
                                                    eventKey="0"
                                                    className="text-white"
                                                  >
                                                    <Accordion.Header>
                                                      {element3.item}
                                                    </Accordion.Header>
                                                    <Accordion.Body className="p-0">
                                                      <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                                                        {element3["data"].map(
                                                          (element4, index) => {
                                                            return (
                                                              <>
                                                                <Button
                                                                  onClick={() =>
                                                                    setProduct(
                                                                      products[0]
                                                                    )
                                                                  }
                                                                  variant="link"
                                                                  className="text-decoration-none m-0 p-2 rounded-0 border-0"
                                                                >
                                                                  <ListGroupItem>
                                                                    {element4}
                                                                  </ListGroupItem>
                                                                </Button>
                                                              </>
                                                            );
                                                          }
                                                        )}
                                                      </ListGroup>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                                </Accordion>
                                              </>
                                            );
                                          }
                                        )}
                                      </ListGroup>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </>
                            );
                          })}
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Residencial;
