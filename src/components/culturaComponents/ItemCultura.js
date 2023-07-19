import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function ItemCultura() {
  return (
    <div>
      <img
        className="imgScreen"
        src={require("../../img/CulturaDaikin/CulturaDaikin/cultura_material_06.jpg")}
        alt=""
      />
      <Row className="d-flex align-items-center justify-content-center p-0">
        <div className="overlay2"></div>
        <Col xs={12} md={10} xl={6} className="textDesc">
          <div className="py-4 px-4 text-light">
            <h3 className="">Cultura Daikin</h3>
            <p className="">
              Situado al este del continente asiático, Japón tiene cuatro
              estaciones distintivas: primavera, verano, otoño e invierno.
            </p>
            <p className="">
              Japón es un país insular que se propaga ampliamente, de norte a
              sur, rodeada de mar. Hokkaido, en el norte se encuentra en una
              zona subártica con temperaturas muy por debajo de cero grados en
              los inviernos, mientras Okinawa, en el sur se encuentra en una
              zona subtropical con temperaturas altas durante todo el año. Por
              otra parte, el clima es muy diferente dependiendo de si usted se
              encuentra del lado del Océano Pacífico o el Mar de Japón y en
              diferentes regiones.
            </p>
            <p className="">
              Los equipos de aire acondicionado Daikin han evolucionado en
              respuesta a tal diversidad climática.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="containerCultu bg-black">
        <Col className="px-0">
          <h3 className="text-white mb-0 py-3">Clima</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="bg-primary p-0">
          <Image
            fluid
            className="w-100"
            src={require("../../img/CulturaDaikin/CulturaDaikin/cultura_material_11.jpg")}
            alt={""}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="p-0 d-flex align-items-center justify-content-center"
        >
          <div className="p-0 p-lg-5 m-5 m-lg-5 text-start">
            <h3 className="txt-blue mb-4">Primavera alegre y calma</h3>
            <p className="text-uppercase">Marzo-Mayo</p>
            <p className="pe-0 pe-lg-5 me-0 me-lg-5">
              La primavera en Japón es un momento en que las nuevas bellas hojas
              verdes y los árboles de cerezos brotan, así como las flores de
              varios colores florecen. La temperatura se eleva gradualmente
              después de que los cerezos florecen a finales de marzo. El clima
              es suave y cómodo en esta época del año.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="bg-primary p-0 order-md-last">
          <Image
            fluid
            className="w-100"
            src={require("../../img/CulturaDaikin/CulturaDaikin/cultura_material_10.jpg")}
            alt={"servicio"}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="p-0 d-flex align-items-center justify-content-center"
        >
          <div className="p-0 p-lg-5 m-5 m-lg-5 text-start">
            <h3 className="txt-blue mb-4">Verano cálido y húmedo</h3>
            <p className="text-uppercase">JUNIO-AGOSTO</p>
            <p className="pe-0 pe-lg-5 me-0 me-lg-5">
              En muchos lugares, las temperaturas suben por encima de 30 ° C
              durante el día. Con aire húmedo que viene desde el sur, aumenta el
              nivel de humedad y la gente siente que la temperatura es más
              elevada que la temperatura real.
            </p>
            <p className="pe-0 pe-lg-5 me-0 me-lg-5">
              Por lo tanto, la gente en Japón requieren la función de
              deshumidificación además de enfriamiento. Con esto, el verano
              húmedo y caluroso se convirtió en una estación del año cómoda.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="bg-primary p-0">
          <Image
            fluid
            className="w-100"
            src={require("../../img/CulturaDaikin/CulturaDaikin/cultura_material_05.jpg")}
            alt={"servicio"}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="p-0 d-flex align-items-center justify-content-center"
        >
          <div className="p-0 p-lg-5 m-5 m-lg-5 text-start">
            <h3 className="txt-blue mb-4">
              Otoño con follaje brillante y colorido
            </h3>
            <p className="text-uppercase">SEPTIEMBRE-NOVIEMBRE</p>
            <p className="pe-0 pe-lg-5 me-0 me-lg-5">
              Después de que el calor del verano se enfría, se empiezan a sentir
              escalofríos por las mañanas y las noches. Damos la bienvenida a la
              temporada de hojas de otoño y la cosecha. Podemos disfrutar de la
              belleza del cielo claro y el follaje de color rojo y amarillo
              brillante.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="bg-primary p-0 order-md-last">
          <Image
            fluid
            className="w-100"
            src={require("../../img/CulturaDaikin/CulturaDaikin/cultura_material_03.jpg")}
            alt={"servicio"}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="p-0 d-flex align-items-center justify-content-center"
        >
          <div className="p-0 p-lg-5 m-5 m-lg-5 text-start">
            <h3 className="txt-blue mb-4">Invierno severo con nieve intensa</h3>
            <p className="text-uppercase">DICIEMBRE-FEBRERO</p>
            <p className="pe-0 pe-lg-5 me-0 me-lg-5">
              A parte de las temperaturas frías severas, se puede experimentar
              nieve intensa en el invierno. Debido al viento estacional, el lado
              del Mar de Japón estará cubierto de nieve, mientras que el lado
              del Océano Pacífico se vuelve seco.
            </p>
            <p className="pe-0 pe-lg-5 me-0 me-lg-5">
              A fin de sobrepasar el frío severo y seco del invierno, se
              requirió que los aires acondicionados puedan humidificar mientras
              calientan poderosamente la habitación.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="bg-black">
        <Col className="px-0">
          <h3 className="text-white mb-0 py-3">Recursos</h3>
        </Col>
      </Row>
      <Row className="text-start">
        <Col className="bg-blue-3 px-5 py-5">
          <h3 className="mb-4">
            Tecnologías de ahorro de energía, originado por el recurso limitado
            de energía en Japón
          </h3>
          <p className="">
            Japón depende de otros países para el suministro de energía, debido
            a sus limitados recursos. Como resultado, la manufactura japonesa ha
            logrado un alto rendimiento ambiental, enfocado en el consumo de
            combustible en los automóviles y el consumo de energía en la
            electrónica del hogar.
          </p>
        </Col>
        <Col className="bg-blue-2 px-5 py-5">
          <h3 className="mb-4">
            Aire acondicionado, sólo habitaciones ocupadas
          </h3>
          <p className="">
            Un sistema de aire acondicionado convencional enfría todo el
            edificio, incluyendo las habitaciones desocupadas.
          </p>
          <p className="">
            Con el fin de crear ambientes cómodos utilizando menos energía, se
            nos ocurrió el concepto de aire acondicionado sólo en habitaciones
            necesarias.
          </p>
        </Col>
        <Col className="bg-blue-3 px-5 py-5">
          <h3 className="mb-4">
            Ahorro de Energía a través de la Tecnología Inverter
          </h3>
          <p className="">
            Inverter es una tecnología de ahorro de energía capaz de eliminar
            funciones con desperdicio de energía al controlar eficientemente la
            velocidad del motor.
          </p>
          <p className="">
            En comparación con los equipos no Inverter, los aires acondicionados
            Inverter consumen aproximadamente un 60% menos de energía.
          </p>
        </Col>
      </Row>
      <Row className="resources-banner">
        <Col className="overlay-resources">
          <div class="culture-daikin text-white px-3 px-md-0">
            <h3 class="">De Japón para el mundo</h3>
            <h4 class="">DAIKIN</h4>
            <p class="">
              La diversidad climática de Japón y los recursos limitados llevaron
              al nacimiento de las tecnologías de Daikin, una Marca de Japón.
            </p>
            <p class="">
              Daikin continuará llevando al mundo estas tecnologías a las
              personas de varios países para vivir sus vidas cotidianas con
              mayor
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ItemCultura;