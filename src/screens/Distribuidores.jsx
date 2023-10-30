import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image, Table, Spinner } from "react-bootstrap";
import "../css/cssScreens/Distribuidores.css";

function Distribuidores() {
  const location = useLocation();
  const propsDistribuidor = location.state;
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeoutId = setTimeout(() => {
      handleIframeLoad();
    }, 1500);
    return () => {
      clearTimeout(timeoutId);
      setIframeLoaded(false);
    };
  }, [propsDistribuidor]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <Container>
      <h1 className="text-center txt-blue mb-2 mt-3 mt-md-5">
        {propsDistribuidor["state"]}
      </h1>
      {propsDistribuidor["cities"].map((cityData, index) => {
        return (
          <div key={"ciudad " + index}>
            <h2 className="text-center txt-blue mb-4">{cityData["city"]}</h2>
            {cityData["distributors"].map((element, index) => {
              console.log(element.content["map"]);
              return (
                <Row
                  key={index}
                  className="mb-5 d-flex align-items-center mx-1 px-0 px-md-3 py-3 py-md-5 rounded shadow"
                >
                  <Col xs={12} md={6}>
                    {element.content["image"] !== "" ? (
                      <Image
                        fluid
                        src={require(`../img/Distribuidores/logos/${element.content["image"]}`)}
                        alt="Mapa de México"
                        className="w-50 mb-0 mb-md-3"
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
                  <Col xs={12} md={6} className={"location-wrapper"}>
                    <>
                      {iframeLoaded ? (
                        element.content["map"] != null ? (
                          <iframe
                            src={element.content["map"]}
                            frameBorder="0"
                          ></iframe>
                        ) : (
                          null
                        )
                      ) : (
                        <div className="spinner-container w-100 m-0 d-flex align-items-center justify-content-center">
                          <Spinner animation="grow" className="txt-blue me-2" />
                          <Spinner animation="grow" className="txt-blue" />
                          <Spinner animation="grow" className="txt-blue ms-2" />
                        </div>
                      )}
                    </>
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
