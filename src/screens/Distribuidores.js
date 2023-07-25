import React, {} from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import "../css/cssScreens/Distribuidores.css";

function Distribuidores() {
  const location = useLocation();
  const propsDistribuidor = location.state;

  return (
    <Container>
      <h1 className="text-center txt-blue mb-2 mt-5">
        {propsDistribuidor["state"]}
      </h1>
      {propsDistribuidor["cities"].map((cityData, index) => {
        return (
          <div key={"ciudad "+ index}>
            <h3 className="text-center txt-blue mb-5">{cityData["city"]}</h3>
            {cityData["distributors"].map((element, index) => {
              /* console.log(element.content); */
              /* ${element.content['image']} */
              return (
                <Row key={index} className="mb-5 d-flex align-items-center">
                  <Col>
                    {element.content["image"] !== "" ? (
                      <Image
                        fluid
                        src={require(`../img/Distribuidores/logos/${element.content["image"]}`)}
                        alt="Mapa de México"
                        className="w-50 mb-3"
                      />
                    ) : null}

                    <h3 className="mt-4 mb-3">{element.content["partner"]}</h3>
                    <Table striped bordered>
                      <tbody>
                        <tr>
                          <td>Calle</td>
                          <td>{element.content["calle"]}</td>
                        </tr>
                        <tr>
                          <td>Teléfono</td>
                          <td>{element.content["phone"]}</td>
                        </tr>
                        <tr>
                          <td>E-Mail</td>
                          <td>{element.content["email"]}</td>
                        </tr>
                        <tr>
                          <td>Sitio Web</td>
                          <td>{element.content["site"]}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col>
                    {element.content["map"] !== "" ? (
                      <div className="location-wrapper">
                        <iframe
                          src={element.content["map"]}
                          frameBorder="0"
                        ></iframe>
                      </div>
                    ) : null}
                  </Col>
                </Row>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}

export default Distribuidores;
