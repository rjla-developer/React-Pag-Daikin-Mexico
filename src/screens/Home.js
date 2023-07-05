import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/cssScreens/Home.css";
import Grow from "@mui/material/Grow";

//Pestañas
import Producto from "../components/homeComponents/Producto";

//Imagenes
import vrvImg from "../img/Home/seccProductos/vrv_4_series_03.png";
import aplicadoImg from "../img/Home/seccProductos/magnitude_aplicado_04.png";
import residencialImg from "../img/Home/seccProductos/minisplit_residencial_02.png";
import servicioImg from "../img/Home/seccProductos/refacciones_servicio.png";
import purificadoresImg from "../img/Home/seccProductos/purificadores.png";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const productosItems = [
    {
      urlImg: vrvImg,
      nameService: "VRV",
    },
    {
      urlImg: aplicadoImg,
      nameService: "APLICADO",
    },
    {
      urlImg: residencialImg,
      nameService: "RESIDENCIAL",
    },
    {
      urlImg: servicioImg,
      nameService: "SERVICIO",
    },
    {
      urlImg: purificadoresImg,
      nameService: "PURIFICADORES",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid>
      <Row className="d-flex align-items-center justify-content-between">
        <Col className="d-none d-xl-block"></Col>
        <Col className="p-0 position-absolute" xs={12} xl={6}>
          <div className="containerDesc m-0 p-4 p-xl-5 text-white">
            <Row className="d-flex align-items-center pe-0 pe-xl-5 pt-3 me-0 me-xl-5">
              <Col sm={"auto"} className="p-0 d-none d-xl-block">
                <p className="ms-0 text-start">_____________________________</p>
              </Col>
              <Col sm={"auto"}>
                <p className="h3 text-center text-xl-end text-uppercase d-none d-xl-block">
                  Líderes mundiales <br></br> en aire acondicionado
                </p>
                <p className="h2 text-center text-xl-end text-uppercase d-block d-xl-none">
                  Líderes mundiales en aire acondicionado
                </p>
              </Col>
            </Row>
            <Row className="pe-0 pe-xl-5 me-0 me-xl-5 pb-3 mt-3">
              <Col className="ps-0 ps-xl-5">
                <p className="fs-5 text-center text-xl-start">
                  <span>Daikin</span> es el principal innovador y proveedor
                  mundial de soluciones avanzadas de aire acondicionado y
                  calefacción de alta calidad para aplicaciones residenciales,
                  comerciales e industriales.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="p-0">
          <img
            className="d-none d-xl-block"
            src={require("../img/Home/edificios_arboles_011.jpg")}
            alt=""
            width={1100}
            height={650}
          />
          <img
            className="d-block d-xl-none"
            src={require("../img/Home/edificios_arboles_011.jpg")}
            alt=""
            width={"100%"}
            height={350}
          />
        </Col>
      </Row>
      <Row className="text-center py-5">
        <p className="fs-2 fw-bold mt-5 mb-3">PRODUCTOS</p>
        <p className="txt-blue m-0 fs-5 mb-5">
          CONOCE LOS PRODUCTOS QUE DAIKIN TE OFRECE
        </p>
        <Row className="d-flex align-items-center justify-content-center mx-0">
          {productosItems.map((elemento, index) => (
            <Col key={index} className="d-flex align-items-center justify-content-center">
              <Grow in={isVisible}>
                <div>
                  <Producto
                    imgUrl={elemento.urlImg}
                    nomProduct={elemento.nameService}
                  />
                </div>
              </Grow>
            </Col>
          ))}

        </Row>
      </Row>
    </Container>
  );
}

export default Home;
