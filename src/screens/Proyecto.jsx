import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import "../css/cssScreens/Proyecto.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

function Proyecto() {
  const location = useLocation();
  const propsProyecto = location.state;
  const [mediaQueryBool, setmediaQueryBool] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const mediaQuery = window.matchMedia('(min-width: 992px)');
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

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);


  return (
    <Container fluid>
      <Container>
        <Row className="my-4 my-md-5">
          <Col xs={12} md={6}>
            <h3 className="txt-blue">Proyectos</h3>
            <p className="text-uppercase">
              Liderando el camino de la climatización sustentable
            </p>
          </Col>
          <Col xs={12} md={6}>
            <p>
              Daikin ha sido parte esencial en la construcción de edificios
              reconocidos en el mundo por su alta eficiencia y confort. Los
              siguientes casos son historias de éxito que muestran como Daikin,
              junto con sus aliados estratégicos y clientes, han creado
              soluciones para resolver los retos de cada aplicación,
              beneficiando tanto a los propietarios como a sus ocupantes.
            </p>
          </Col>
        </Row>
      </Container>
      <Row className="bg-blue-gradient">
        <Col>
          <h3 className="text-white text-center my-5">{propsProyecto.nameProject}</h3>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col className="px-0 px-md-5 px-lg-0">
            {propsProyecto.dataProject != null ? (
              <Swiper
                navigation={mediaQueryBool ? true: false}
                keyboard={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation, Keyboard]}
                id="CarouselProyecto"
                className="mySwiper mb-5 pb-5 pb-md-4 pb-lg-5"
              >
                {propsProyecto.dataProject.map((element, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="mx-0 mx-lg-5 shadow p-3 p-md-5 bg-white rounded">
                        <Row className="mx-0 mx-md-5">
                          <Col className="mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
                            <Image
                              className="imgHotel rounded"
                              src={require(`../img/Proyectos/${element.image}`)}
                            />
                          </Col>
                          <Col
                           xs={12} lg={6}
                            className="d-flex align-items-center justify-content-center"
                          >
                            <div>
                              <h3 className="txt-blue mb-4">{element.content['title']}</h3>
                              <p className="mb-4 fs-5">
                                <i className="txt-blue bi bi-geo-alt-fill"></i>{" "}
                                {element.content['place']}
                              </p>
                              <p className="mb-5 fs-5">
                                <i className="txt-blue bi bi-calendar"></i> {element.content['year']}
                              </p>
                              <h3 className="mb-4">Tecnología</h3>
                              {element.content.features.map((element, index)=>{
                                return <p key={index}><i className="bi bi-chevron-right"></i>{element["feature"]}</p>
                              })}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Proyecto;
