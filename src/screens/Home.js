import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../css/cssScreens/Home.css";
import Grow from "@mui/material/Grow";

//Pestañas
import Producto from "../components/homeComponents/Producto";
import Proyectos from "../components/homeComponents/Proyectos";
import Noticias from "../components/noticiasComponents/Noticias";
import Formando from "../components/homeComponents/Formando";

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
    <Container fluid className="bg-gray">
      <Row className="d-flex align-items-center justify-content-between ">
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
            alt="Grandes edificios con árboles"
            width={1100}
            height={650}
          />
          <img
            className="d-block d-xl-none"
            src={require("../img/Home/edificios_arboles_011.jpg")}
            alt="Grandes edificios con árboles"
            width={"100%"}
            height={350}
          />
        </Col>
      </Row>
      <Row className="text-center bg-white px-3 pb-5">
        <p className="fs-2 fw-bold mt-5 mb-3">PRODUCTOS</p>
        <p className="txt-blue m-0 fs-5 mb-5">
          CONOCE LOS PRODUCTOS QUE DAIKIN TE OFRECE
        </p>
        <Row className="d-flex align-items-center justify-content-center mx-0">
          {productosItems.map((elemento, index) => (
            <Col
              key={index}
              className="d-flex align-items-center justify-content-center"
            >
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
      <Row className="p-0 p-lg-5">
        <Col className="p-0 p-lg-5 shadow">
          <Image
            fluid
            src={require("../img/Home/seccFresh/fresh_pure_desktop.jpg")}
            alt="Imagen sobre pureza y frescura de nuestros aires acondicionados"
          />
        </Col>
      </Row>
      <Row className="bg-white text-center d-flex align-items-center justify-content-center">
        <Col className="mx-0 mx-lg-5 p-4 p-lg-5">
          <p className="fs-2 fw-bold mt-3 mb-3">PROYECTOS</p>
          <p className="d-block d-lg-none txt-blue m-0 fs-6 mb-4 mb-lg-5">
            LIDERANDO EL CAMINO DE LA CLIMATIZACIÓN SUSTENTABLE
          </p>
          <p className="d-none d-lg-block txt-blue m-0 fs-5 mb-4 mb-lg-5">
            LIDERANDO EL CAMINO DE LA CLIMATIZACIÓN SUSTENTABLE
          </p>
          <Proyectos />
        </Col>
      </Row>

      <Formando />

      <Container className="bg-white py-5" fluid>
        <Container>
          <Row className="py-5 d-flex justify-content-center align-items-center">
            <Col
              xs={12}
              md={6}
              className="order-last order-md-first d-flex justify-content-center align-items-center text-center mt-5 mt-md-0"
            >
              <div>
                <h2 className="text-secondary">Red de distribuidores Daikin</h2>
                <h4 className="txt-blue">
                  Conoce los Estados de la República en donde se encuentran
                  nuestros distribuidores
                </h4>
                <p className="text-secondary opacity-50 mb-3 mb-md-5">
                  <i className="bi bi-circle-fill"></i>
                </p>
                <Button variant="outline-primary">
                  <p className="mb-0 fw-bold fs-5">
                    <i className="bi bi-chevron-right"></i>Conoce Más
                  </p>
                </Button>
              </div>
            </Col>
            <Col xs={12} md={6} className="">
              <a href="/">
                <Image
                  fluid
                  src={require("../img/Home/seccDistribuidores/red_distribuidores_171.jpg")}
                  alt="Mapa de México"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="bg-gray m-0 p-0" fluid>
        <Container className="">
          <Row className="text-center py-5 d-flex align-items-center justify-content-center">
            <Col>
              <h2>NOTICIAS</h2>
              <Noticias />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Home;
