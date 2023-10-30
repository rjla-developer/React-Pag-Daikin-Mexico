import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Image, Spinner } from "react-bootstrap";
import "../../css/cssComponents/Formando.css";
import { Link } from "react-router-dom";
import { ContextEntrenamientos } from "../../context/ContextEntrenamientos";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

function Formando() {
  const {dataTrainings} = useContext(ContextEntrenamientos);
  const [mediaQueryBool, setmediaQueryBool] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    setmediaQueryBool(mediaQuery.matches);
    const handleResize = (event) => {
      if (event.matches) {
        setmediaQueryBool(event.matches);
      } else {
        setmediaQueryBool(event.matches);
      }
    };
    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <>
      <Row className="background-container pt-5 p-xl-5 bg-blue">
        <Col xs={12} lg={5}>
          <div className="image-container d-none d-lg-block">
            <Image
              src={require("../../img/Home/seccEntrenamiento/centro_de_entrenamiento_16-OK.jpg")}
              alt="Imagen de fondo del centro de entrenamiento Daikin"
            />
          </div>
          <div className="overlay d-none d-lg-block"></div>
          <div className="text-container text-white d-none d-lg-block">
            <h2 className="dark-title">Centro de entrenamiento</h2>
            <h4 className="mb-4">
              Formando especialistas en aire acondicionado.
            </h4>
            <Link
              className="btn btn-outline-light"
              to={`/entrenamientos`}
            >
              <p className="mb-0 fw-bold">
                <i className="bi bi-chevron-right"></i>VER TODOS LOS EVENTOS
              </p>
            </Link>
          </div>

          <div className="text-white text-center d-block d-lg-none">
            <h1 className="text-uppercase mb-3">Centro de entrenamiento</h1>
            <h4 className="mb-4">
              Formando especialistas en aire acondicionado.
            </h4>
            <Link
              className="btn btn-outline-light mb-4"
              to={"/entrenamientos"}
            >
              <p className="mb-0 fw-bold">
                <i className="bi bi-chevron-right"></i>VER TODOS LOS EVENTOS
              </p>
            </Link>
          </div>
        </Col>
        <Col xs={12} lg={7} className="py-4 px-0 px-md-5 px-lg-0">
          {dataTrainings != null ? (
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
              {dataTrainings.map((element, index) => (
                <SwiperSlide
                  className="px-0 px-lg-5 d-flex align-items-center justify-content-center"
                  key={index}
                >
                  <Link
                    to={`/entrenamiento/${element.id}`}
                    className="text-center text-decoration-none pb-4"
                  >
                    <Image
                      rounded
                      fluid
                      src={element.banner_url}
                      alt="Imagen con la información del curso"
                    />
                    <p className="text-white mb-0 py-2 fw-bold mt-2">
                      {element.title}
                    </p>
                    <Link
                      className="btn btn-light mt-2"
                      to={`/entrenamiento/${element.id}`}
                    >
                      <p className="txt-blue mb-0 py-2 fw-bold">DETALLES</p>
                    </Link>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="position-relative spinner-container w-100 m-0  d-flex align-items-center justify-content-center">
              <Spinner animation="grow" className="text-white me-2" />
              <Spinner animation="grow" className="text-white" />
              <Spinner animation="grow" className="text-white ms-2" />
            </div>
          )}
        </Col>
      </Row>
    </>
  );
}

export default Formando;
