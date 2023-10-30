import React, { useEffect, useState, useContext } from "react";
import { ContextEntrenamientos } from "../context/ContextEntrenamientos";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import "../css/cssScreens/CentroEntrenamiento.css";
import { useParams } from "react-router-dom";

function CentroEntrenamiento() {
  const [dataTraining, setDataTraining] = useState("");
  const { dataTrainings, loading } = useContext(ContextEntrenamientos);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        if (id != null && !loading) {
          const response = await axios.get(
            `https://daikinmx.megcrm.mx/external/api/training-center/events/${id}`
          );
          setDataTraining(response.data);
        }
        if (id == null && !loading) {
          setDataTraining(dataTrainings);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();

    return () => {};
  }, [id, loading, dataTrainings]);

  return (
    <Container fluid>
      <Row className="resources-banner-entrenamiento">
        <div className="overlay-resources d-flex align-items-center justify-content-center text-center">
          <Col xs={10} md={6}>
            <div className="text-white">
              <h3>Centro de entrenamiento</h3>
              <p>Formando especialistas en aire acondicionado</p>
            </div>
          </Col>
        </div>
      </Row>
      {loading === false ? (
        <>
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
                              Del <span className="fw-bold">{element.from}</span> {" "} 
                              al <span className="fw-bold">{element.to}</span>
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
        </>
      ) : (
        <Container className="py-5">
          <Row className="py-5">
            <Col className="py-5">
              <div className="position-relative spinner-container w-100 m-0  d-flex align-items-center justify-content-center">
                <Spinner animation="grow" className="txt-blue me-2" />
                <Spinner animation="grow" className="txt-blue" />
                <Spinner animation="grow" className="txt-blue ms-2" />
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default CentroEntrenamiento;
