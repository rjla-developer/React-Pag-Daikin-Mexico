import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/cssScreens/CentroEntrenamiento.css";
import { useLocation } from "react-router-dom";

function CentroEntrenamiento() {
  const location = useLocation();
  const dataTraining = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <Container fluid className="p-0">
      <Row className="resources-banner-entrenamiento">
        <div className="overlay-resources d-flex align-items-center justify-content-center text-center">
          <Col xs={10} md={6} className="">
            <div className="text-white">
              <h3>Centro de entrenamiento</h3>
              <p>Formando especialistas en aire acondicionado</p>
            </div>
          </Col>
        </div>
      </Row>
      {dataTraining != null ? (
        <>
          {Array.isArray(dataTraining) ? (
            <Row className="bg-black">
              <Col className="d-flex align-items-center justify-content-center text-center my-4">
                <h3 className="text-white mb-0">Elige un curso</h3>
              </Col>
            </Row>
          ) : null}
        </>
      ) : null}
      <Container>
        {dataTraining != null ? (
          <>
            {Array.isArray(dataTraining) ? (
              // Cuando dataTraining es un arreglo
              dataTraining.map((element, index) => {
                return (
                  <div
                    className="shadow p-3 p-md-5 bg-white rounded mx-2 my-4 mx-md-4"
                    key={index}
                  >
                    <Row className="mb-3">
                      <h2 className="txt-blue text-center my-3">
                        {element.title}
                      </h2>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Image
                          className="rounded"
                          fluid
                          src={element.banner_url}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="txt-blue">Duración</h3>
                        <p className="mb-3">
                          Del <span className="fw-bold">{element.from}</span> al{" "}
                          <span className="fw-bold">{element.to}</span>
                        </p>
                        <h3 className="txt-blue">Dirección</h3>
                        <p>{element.address}</p>
                      </Col>
                    </Row>
                  </div>
                );
              })
            ) : (
              // Cuando dataTraining es un objeto
              <div className="shadow p-3 p-md-5 bg-white rounded mx-2 my-4 mx-md-4">
                <Row className="mb-3">
                  <h2 className="txt-blue text-center my-3">
                    {dataTraining.title}
                  </h2>
                  <Col className="d-flex align-items-center justify-content-center">
                    <Image
                      className="rounded"
                      fluid
                      src={dataTraining.banner_url}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3 className="txt-blue">Duración</h3>
                    <p className="mb-3">
                      Del <span className="fw-bold">{dataTraining.from}</span>{" "}
                      al <span className="fw-bold">{dataTraining.to}</span>
                    </p>
                    <h3 className="txt-blue">Dirección</h3>
                    <p>{dataTraining.address}</p>
                  </Col>
                </Row>
              </div>
            )}
          </>
        ) : null}
      </Container>
    </Container>
  );
}

export default CentroEntrenamiento;
