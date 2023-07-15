import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import "../../css/cssComponents/Proyectos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

//Img export
import centroImg from "../../img/Home/seccProyectos/retail_proyecto_111.jpg";
import hotelesImg from "../../img/Home/seccProyectos/hospitalidad_proyecto_071.jpg";
import infrasImg from "../../img/Home/seccProyectos/entretenimiento_proyecto_14.jpg";
import indusImg from "../../img/Home/seccProyectos/industrial_proyecto_131.jpg";
import hospitalesImg from "../../img/Home/seccProyectos/hospital_salud_proyecto_091.jpg";
import oficinasImg from "../../img/Home/seccProyectos/oficina_proyecto_061.jpg";
import eduImg from "../../img/Home/seccProyectos/educacion_proyecto_10.jpg";
import otrosImg from "../../img/Home/seccProyectos/banco_proyecto_12.jpg";

function Proyectos() {
  const proyectosItems = [
    {
      imgUrl: centroImg,
      nameProyect: "CENTROS COMERCIALES",
    },
    {
      imgUrl: hotelesImg,
      nameProyect: "HOTELES",
    },
    {
      imgUrl: infrasImg,
      nameProyect: "INFRAESTRUCTURA",
    },
    {
      imgUrl: indusImg,
      nameProyect: "INDUSTRIA",
    },
    {
      imgUrl: hospitalesImg,
      nameProyect: "HOSPITALES",
    },
    {
      imgUrl: oficinasImg,
      nameProyect: "OFICINAS",
    },
    {
      imgUrl: eduImg,
      nameProyect: "EDUCACIÓN",
    },
    {
      imgUrl: otrosImg,
      nameProyect: "OTROS",
    },
  ];
  const [mediaQueryBool, setmediaQueryBool] = useState(null);

  useEffect(() => {
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
    <>
      <Swiper
        navigation={mediaQueryBool ? true: false}
        keyboard={true}
        slidesPerView={ mediaQueryBool ? 3 : 1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Keyboard]}
        id="CarouselProyectos"
        className=" mySwiper pb-5"
      >
        {proyectosItems.map((elemento, index) => (
          <SwiperSlide className="px-0 px-lg-5" key={index}>
            <Button variant="light pb-3">
              <img
                className="img-fluid rounded"
                src={elemento.imgUrl}
                alt="Imagen"
              />
              <p className="txt-blue mb-0 py-2 fw-bold">
                {elemento.nameProyect}
              </p>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Proyectos;
