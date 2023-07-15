import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

//Img noticias
import imgTermYCondi from "../../img/Home/seccNoticias/noticia2.jpg";
import imgAnunciaInve from "../../img/Home/seccNoticias/noticia-5-chica.jpg";
import imgComfortTech from "../../img/Home/seccNoticias/planta1.jpg";

function Noticias() {
  const noticeItems = [
    {
      imgUrl: imgTermYCondi,
      title: "Términos y Condiciones",
      desc: "Términos y Condiciones de...",
    },
    {
      imgUrl: imgAnunciaInve,
      title: "Daikin anuncia inversión",
      desc: "De $300 millones de dólares en San Luis...",
    },
    {
      imgUrl: imgComfortTech,
      title: "Daikin Comfort Technologies",
      desc: "Daikin Comfort Technologies construirá...",
    },
  ];
  const [mediaQueryBool, setmediaQueryBool] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    setmediaQueryBool(mediaQuery.matches);

    const handleResize = (event) => {
      if (event.matches) {
        console.log(event.matches);
        setmediaQueryBool(event.matches);
      } else {
        console.log(event.matches);
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
      <Swiper
        navigation={mediaQueryBool ? true : false}
        keyboard={true}
        slidesPerView={mediaQueryBool ? 3 : 1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper pb-4 py-md-5"
      >
        {noticeItems.map((elemento, index) => (
          <SwiperSlide key={index} className="px-2 px-lg-5">
            <Card style={ {height: "500px"} } className="shadow">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={elemento.imgUrl}
              />
              <Card.Body>
                <Card.Title>{elemento.title}</Card.Title>
                <Card.Text>{elemento.desc}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Button variant="outline-primary">
                  <p className="mb-0 fw-bold">
                    <i className="bi bi-chevron-right"></i>Leer más
                  </p>
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Noticias;
