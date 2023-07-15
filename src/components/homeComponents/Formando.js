import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import "../../css/cssComponents/Formando.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

function Formando() {
  const [mediaQueryBool, setmediaQueryBool] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    setmediaQueryBool(mediaQuery.matches);
    const handleResize = (event) => {
      if (event.matches) {
        /* console.log(event.matches); */
        setmediaQueryBool(event.matches);
      } else {
        /* console.log(event.matches); */
        setmediaQueryBool(event.matches);
      }
    };
    mediaQuery.addListener(handleResize);

    fetchData();

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  const fetchData = () => {
    axios
      .get("/api/all.json")
      .then((response) => {
        setData(response.data);
        /* console.log(response.data); */
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Row className="background-container pt-5 p-xl-5 bg-blue">
        <Col xs={12} lg={5} className="">
          <div className="image-container d-none d-lg-block">
            <img
              className=""
              src={require("../../img/Home/seccEntrenamiento/centro_de_entrenamiento_16-OK.jpg")}
              alt="Imagen de fondo"
            />
          </div>
          <div className="overlay d-none d-lg-block"></div>
          <div className="text-container text-white d-none d-lg-block">
            <h2 className="dark-title">Centro de entrenamiento</h2>
            <h4 className="mb-4">
              Formando especialistas en aire acondicionado.
            </h4>
            <Button variant="outline-light">
              <p className="mb-0 fw-bold">
                <i className="bi bi-chevron-right"></i>VER TODOS LOS EVENTOS
              </p>
            </Button>
          </div>

          <div className="text-white text-center d-block d-lg-none">
            <h1 className="text-uppercase mb-3">Centro de entrenamiento</h1>
            <h4 className="mb-4">
              Formando especialistas en aire acondicionado.
            </h4>
            <Button variant="outline-light mb-4">
              <p className="mb-0 fw-bold">
                <i className="bi bi-chevron-right"></i>VER TODOS LOS EVENTOS
              </p>
            </Button>
          </div>
        </Col>
        <Col xs={12} lg={7} className="py-4">
          {data != null ? (
            <Swiper
              navigation={mediaQueryBool ? true : false}
              keyboard={true}
              slidesPerView={mediaQueryBool ? 1 : 1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation, Keyboard]}
              id="CarouselEntrenamiento"
              className="mySwiper pb-4"
            >
              {data.map((elemento, index) => (
                <SwiperSlide
                  className="px-0 px-lg-5 d-flex align-items-center justify-content-center"
                  key={index}
                >
                  <a href="/" className="text-center text-decoration-none pb-4">
                    <img
                      className="img-fluid rounded"
                      src={elemento.banner_url}
                      alt="Imagen"
                    />
                    <p className="text-white mb-0 py-2 fw-bold mt-2">
                      {elemento.title}
                    </p>
                    <Button variant="light" className="mt-2">
                      <p className="txt-blue mb-0 py-2 fw-bold">DETALLES</p>
                    </Button>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </Col>
      </Row>
    </>
  );
}

export default Formando;
