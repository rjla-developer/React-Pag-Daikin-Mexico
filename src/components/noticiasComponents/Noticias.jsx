import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

//Img noticias
import imgAnunciaInve from "../../img/NoticiasEIndustria/portadasNoticias/noticia-5-chica.jpg";
import imgCoverAnunciaInve from "../../img/NoticiasEIndustria/noticia-Inversion/noticia-inversion.jpg";
import imgComfortTech from "../../img/NoticiasEIndustria/portadasNoticias/planta1.jpg";
import imgAnunciaAcuedo from "../../img/NoticiasEIndustria/portadasNoticias/Daikin-acuerdo-san-luis.jpg";
import imgCoverAnunciaAcuerdo from "../../img/NoticiasEIndustria/noticia-AcuerdoSanluis/IMG_8700.jpg";

function Noticias() {
  const noticeItems = [
    {
      imgItem: imgAnunciaAcuedo,
      imgCover: imgCoverAnunciaAcuerdo,
      titleItem: "Daikin y Atlético de San Luis anuncian acuerdo",
      title:
        "Daikin, líder mundial en aire acondicionado, y Atlético de San Luis anuncian acuerdo de sociedad comercial",
      descItem:
        "Bajo el lema “Creciendo Juntos por San Luis”, las entidades...",
      desc: "Bajo el lema “Creciendo Juntos por San Luis”, las entidades anunciaron un histórico acuerdo comercial que vincula a la marca japonesa y al club potosino por los siguientes tres años",
      content:
        "<strong> San Luis Potosí, México, 13 de julio de 2023.-</strong> Daikin Latin America y Daikin Manufacturing México llegaron a un acuerdo de sociedad y patrocinio con el Atlético de San Luis como parte de la estrategia de expansión de la empresa líder mundial en soluciones innovadoras y sustentables de aire acondicionado para aplicaciones residenciales, comerciales e industriales. <br /><br />  “Daikin apuesta por México y por San Luis Potosí, muestra de esto es la reciente inversión de $300 millones de dólares, en dos nuevas plantas de manufactura que reclutará el mejor talento. Daikin como miembro de la comunidad de San Luis Potosí, está comprometido con que la sociedad comercial con el Atlético de San Luis, también es el inicio de la conformación de un equipo de excelencia, el equipo número uno”, apuntó Andrés Benavides, CEO de Daikin Manufacturing Mexico. <br /><br /> El acuerdo entre Daikin y el Atlético de San Luis llega en un momento idóneo para ambas entidades, pues no solo permitirá a Daikin participar como parte integral para la construcción de la Ciudad Deportiva Atlético de San Luis, sino que, el club potosino jugará un papel importante en la estrategia de expansión para el talento humano de la planta Daikin en San Luis Potosí.<br /><br /> Rodrigo Incera, director general del Atlético de San Luis mencionó que este es un acuerdo histórico y un motivo más para sentirse orgullosos “Formar parte de una sociedad comercial con una empresa tan importante como lo es Daikin, es para nosotros un motivo más para sentirnos orgullosos de que las mejores cosas, suceden en San Luis Potosí. Tenemos claros que el crecimiento de ambas entidades, tanto Daikin, como Atlético de San Luis, será potenciado por este acuerdo”. <br /> <br /> Como parte de esa sociedad comercial, Daikin tendrá presencia de marca en el frente del jersey del club, así como en diversas zonas del estadio Alfonso Lastras, además en diversos activos digitales y campañas en los medios sociales del club. De la misma manera, Jaime Caro del Castillo, director comercial y de planeación estratégica de Atlético de San Luis señaló “Muy contento de darle la bienvenida a Daikin a la familia, considero que esta sociedad es el apoyo que nos vamos a brindar hoy pero también el que nos brindaremos en el futuro para seguir cumpliendo los objetivos de cada empresa”. <br /> <br /> <br /> Por su parte, Atlético de San Luis se beneficiará de la sociedad comercial al contar en la Ciudad Deportiva con equipos de aire acondicionado de calidad japonesa, alta eficiencia energética y ambiental, propulsados por la tecnología de punta que provee Daikin. Un ejemplo de ésto es la Sala de Prensa del estadio Alfonso Lastras, que se habilitó con un sistema de aire acondicionado Daikin, que brindó las condiciones climáticas ideales a los asistentes durante el evento. “Estamos seguros y lo hemos comprobado, el aire añade valor a nuestras vidas. Nuestro compromiso con Atlético de San Luis es, precisamente perfeccionar el aire, “Perfecting the Air”, en el estadio, en los vestidores, en el centro de entrenamiento, el gimnasio y mejorar el rendimiento de los jugadores profesionales a través del aire, enfatizó Kota Fukutoku, vicepresidente de planeación estratégica de Daikin Latin America Operations. <br /><br /> Con este paso firme, Daikin y Atlético de San Luis confirman su compromiso de seguir creciendo en favor del desarrollo de San Luis Potosí como una ciudad líder y vanguardista y ahora, con esta sociedad como un equipo de excelencia.",
    },
    {
      imgItem: imgAnunciaInve,
      imgCover: imgCoverAnunciaInve,
      titleItem: "Daikin anuncia inversión",
      title:
        "Daikin anuncia inversión de $300 millones de dólares en San Luis Potosí para su segunda planta de producción en México",
      descItem: "De $300 millones de dólares en San Luis...",
      desc: "Daikin busca integrar la producción a nivel local para mantener altos estándares de calidad y eficiencia, al mismo tiempo que se generan 2 mil 500 empleos en la entidad. La nueva planta de 11 hectáreas entrará en pleno funcionamiento en 2024 y complementará las capacidades regionales de fabricación para América del Norte y en América Latina",
      content:
        "<strong> San Luis Potosí, México, 12 de septiembre de 2022 </strong> Daikin, multinacional líder de la industria de calefacción, ventilación y aire acondicionado (HVAC, por sus siglas en inglés) anunció una inversión de 300 millones de dólares, con lo que se estima se crearán más de 2 mil 500 empleos para la nueva planta que iniciará operaciones en 2024. Con lo anterior, la firma japonesa, reitera su confianza en México y en el estado de San Luis Potosí. <br /><br />  La ceremonia de anuncio de inversión contó con la presencia del Secretario de Desarrollo Económico del Gobierno del Estado de San Luis Potosí, Juan Carlos Valladares Eichelmann, así como los ejecutivos, Shigeki Hagiwara, Oficial Asociado Senior, Representante de Latinoamérica, Daikin Industries, LTD y Andrés Benavides, Director General de Daikin Manufacturing Mexico. La inversión de Daikin en San Luis Potosí, forma parte de la estrategia de crecimiento de la compañía, en respuesta a la creciente demanda de productos en Latinoamérica y América del Norte. </br> </br> “La producción regional, la innovación, la calidad japonesa y también el fortalecimiento de vínculos con la sociedad en los países en que tenemos presencia, convertirán a Daikin en el líder de la industria de HVAC en Latinoamérica y Norteamérica”, afirmó Shigeki Hagiwara y Andrés Benavides agregó que en esta nueva fábrica se producirán productos residenciales y comerciales, ambos con tecnologías innovadoras y sustentables. </br> </br> El Secretario de Desarrollo Económico del Gobierno del Estado, Juan Carlos Valladares Eichelmann, enfatizó “esta nueva inversión de Daikin, sienta un precedente importante para lograr el objetivo planteado por el gobernador Ricardo Gallardo Cardona para posicionar a San Luis Potosí como el mejor estado para invertir en México; al mismo tiempo, impulsar la expansión y el crecimiento de las empresas que actualmente se encuentran en territorio potosino”.",
    },
    {
      imgItem: imgComfortTech,
      imgCover: imgComfortTech,
      titleItem: "Daikin Comfort Technologies",
      title: "Daikin Comfort Technologies construirá una planta de producción de $230 millones de dólares en México",
      descItem: "Daikin Comfort Technologies construirá...",
      desc: "Bajo el lema “Creciendo Juntos por San Luis”, las entidades anunciaron un histórico acuerdo comercial que vincula a la marca japonesa y al club potosino por los siguientes tres años",
      content:
        '<strong> HOUSTON, 28 de junio de 2022 – Daikin Comfort Technologies North America, Inc. (Daikin)</strong> anunció hoy que construirá una planta de producción de más de 231 000 metros cuadrados en México, la cual entrará en pleno funcionamiento en 2024. La inversión de alrededor de $230 millones es la columna vertebral de la agresiva estrategia de crecimiento de la compañía, en respuesta a una creciente demanda de productos Daikin en América del Norte y en América Latina, que incluyen las marcas Daikin, Goodman® y Amana® . </br> </br> “El foco principal de Daikin es convertirse en el líder de la industria de HVAC o del aire acondicionado en América del Norte, en todos sus aspectos: desde la producción e innovación hasta la calidad y el servicio al cliente”, afirmó Satoru Akama, presidente y director ejecutivo de Daikin Comfort Technologies North America, Inc. “Para satisfacer la creciente demanda de nuestras tecnologías y productos en América del Norte y América Latina, y con el fin de dar continuidad al negocio, es absolutamente necesario expandir nuestra presencia manufacturera en México”. </br> </br> En esta nueva fábrica se elaborarán los productos residenciales “Daikin FIT” y “Mini-Split” de Daikin, ambos con tecnología inverter, mismos que a la fecha se importan desde fábricas en Asia. </br> </br> La presencia manufacturera de Daikin en México también se ha extendido gracias a la migración de algunas de sus líneas de productos, como la de los sopladores modulares, a un conjunto de instalaciones renovadas, en México, con casi 61 000 metros cuadrados. Cuando esta planta entre en pleno funcionamiento en 2023, podrá complementar la producción de Daikin Texas Technology Park (DTTP) con cinco líneas de productos. </br> </br> En palabras de Akama: “Es vital integrar la producción a nivel local para mantener nuestros altos estándares de manera eficiente, con el fin de brindar un servicio de calidad a nuestros clientes”. “Igualmente, cabe destacar nuestra convicción de aumentar nuestra capacidad de producción dondequiera que nuestros productos se compran, venden y usan”. </br> </br> La gran mayoría de las operaciones de producción se continuarán realizando en las instalaciones de DTTP, de más de 1.3 millones de metros cuadrados, donde el volumen de producción, la escala y el personal de la planta no se verán afectados por las nuevas plantas. Actualmente, la producción de DTTP está a punto de superar los récords de producción establecidos en el año fiscal 2021. </br> </br> Como lo expresó Akama: “Daikin Texas Technology Park seguirá siendo nuestro centro de operaciones y seguirá manteniendo a Daikin a la vanguardia en la innovación de sus productos en América del Norte”. “Nuestra presencia en México será un excelente complemento para alcanzar los máximos logros y garantizar el crecimiento continuo de nuestras operaciones manufactureras en DTTP”. </br> </br> La planta DTTP, que ha servido como el centro de operaciones de la compañía en América del Norte desde 2017, actualmente emplea a cerca de 10 000 trabajadores, mientras continúa reclutando activamente nuevos miembros, para que se integren al equipo de trabajo. </br> </br> Este crecimiento que rebasa los límites de las vastas instalaciones de Daikin en DTTP es consecuencia de su expansión en los Estados Unidos. La demanda de productos de las marcas Daikin, Goodman y Amana ha aumentado significativamente en más de 80 ubicaciones y 20 estados en los últimos 21 meses, tras la adquisición de Stevens Equipment Supply, LLC, ABCO HVACR Supply + Solutions, Robinson Plumbing & Heating Supply Co. Inc., Thermal Supply, Inc., AirReps, LLC y CCOM Group, Inc. </br> </br> Daikin también ha ampliado sus operaciones en el área metropolitana de Houston en los últimos años. En 2020, expandió el espacio destinado a oficinas y áreas comunes en DTTP agregando casi 19 000 metros cuadrados más a este espacio. El año pasado, la empresa firmó un contrato de arrendamiento de más de 150 000 metros cuadrados en el noroeste de Houston, para complementar sus operaciones de distribución y logística. Desde entonces, Daikin ha ido construyendo ese espacio, que ahora sirve como centro de distribución de algunas piezas. </br> </br> “Mantenemos nuestro compromiso de centrar nuestros grandes esfuerzos de contratación en el área metropolitana de Houston”, aseguró Kristi Pittman, vicepresidenta de Recursos Humanos. “Nuestras prioridades siguen siendo el proveer mejores experiencias de trabajo para nuestros empleados, el asignar gente talentosa a los puestos y el prepararnos para nuestro crecimiento futuro”. </br> </br> Akama concluyó diciendo: “Hemos realizado inversiones sustanciales en Daikin Texas Technology Park, en la comunidad circundante y en el área metropolitana de Houston y seguiremos desarrollando nuestro equipo localmente”. “Nos llena de orgullo lo que hemos logrado hasta ahora y esperamos seguir dejando nuestra huella en América del Norte”. </br> </br> <strong>Acerca de Daikin</strong> </br> Daikin Industries, Ltd. (DIL) es una de las empresas que integran la lista Fortune 1000, con más de 84 870 empleados en todo el mundo. Es la empresa proveedora de soluciones de confort interior número 1 del mundo. Daikin Comfort Technologies North America, Inc. (DNA) es una subsidiaria de DIL que proporciona productos de las marcas Daikin, Goodman, Amana® y Quietflex. DNA y sus filiales fabrican sistemas de calefacción y refrigeración para uso residencial, comercial e industrial y realizan sus ventas a través de contratistas independientes de HVAC. La ingeniería y la fabricación de productos de ADN se encuentra en Daikin Texas Technology Park, cerca de Houston, en Texas. Para obtener información adicional, visita <a href="www.northamerica-daikin.com"> www.northamerica-daikin.com</a> </br></br> Amana® es una marca registrada de Maytag Corporation o sus empresas relacionadas y se usa bajo licencia. Todos los derechos reservados.',
    },
  ];
  const [mediaQueryBool, setmediaQueryBool] = useState(null);

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
        className="mySwiper pb-4 py-md-5 "
      >
        {noticeItems.map((elemento, index) => (
          <SwiperSlide
            key={index}
            className="px-2 px-lg-5 d-flex align-items-center justify-content-center"
          >
            <Card
              style={{ height: "500px", width: "300px" }}
              className="shadow"
            >
              <Card.Img
                className="img-fluid"
                variant="top"
                src={elemento.imgItem}
              />
              <Card.Body>
                <Card.Title>{elemento.titleItem}</Card.Title>
                <Card.Text>{elemento.descItem}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Link to={"/noticia"} state={noticeItems[index]}>
                  <Button variant="outline-primary">
                    <p className="mb-0 fw-bold">
                      <i className="bi bi-chevron-right"></i>Leer más
                    </p>
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Noticias;
