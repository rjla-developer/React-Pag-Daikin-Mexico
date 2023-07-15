import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CulturaDaikin() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="text-center">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="bg-white"
      >
        <Container className="d-flex align-items-center justify-content-center ">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="px-5 py-4"
          >
            <Tab label="Cultura Daikin" {...a11yProps(0)} className="px-5" />
            <Tab label="Nosotros" {...a11yProps(1)} className="px-5" />
            <Tab label="Historia" {...a11yProps(2)} className="px-5" />
            <Tab
              label="Responsabilidad Ambiental"
              {...a11yProps(3)}
              className="px-5"
            />
            <Tab label="Planta" {...a11yProps(4)} className="px-5" />
          </Tabs>
        </Container>
      </Box>
      <Container fluid className="pt-5">
        <CustomTabPanel value={value} index={0}>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={8}>
              <div class="culture-daikin container">
                <h3 class="white-title-culture">Cultura Daikin</h3>
                <p class="white-text">
                  Situado al este del continente asiático, Japón tiene cuatro
                  estaciones distintivas: primavera, verano, otoño e invierno.
                </p>
                <p class="white-text">
                  Japón es un país insular que se propaga ampliamente, de norte
                  a sur, rodeada de mar. Hokkaido, en el norte se encuentra en
                  una zona subártica con temperaturas muy por debajo de cero
                  grados en los inviernos, mientras Okinawa, en el sur se
                  encuentra en una zona subtropical con temperaturas altas
                  durante todo el año. Por otra parte, el clima es muy diferente
                  dependiendo de si usted se encuentra del lado del Océano
                  Pacífico o el Mar de Japón y en diferentes regiones.
                </p>
                <p class="white-text">
                  Los equipos de aire acondicionado Daikin han evolucionado en
                  respuesta a tal diversidad climática.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="bg-black">
            <Col className="px-0">
              <h3 class="text-white mb-0 py-3">Clima</h3>
            </Col>
          </Row>
          <Row>
            <Col className="bg-primary p-0">
              <Image fluid className="w-100" src={require("../img/CulturaDaikin/CulturaDaikin/cultura_material_11.jpg")} alt={"servicio"} />
            </Col>
            <Col className="p-0 d-flex align-items-center justify-content-center">
              <div className="p-5 m-5 text-start">
                <h3 class="txt-blue mb-4">Primavera alegre y calma</h3>
                <p class="text-uppercase">Marzo-Mayo</p>
                <p class="pe-5 me-5">
                  La primavera en Japón es un momento en que las nuevas bellas hojas
                  verdes y los árboles de cerezos brotan, así como las flores de varios colores
                  florecen. La temperatura se eleva gradualmente después de que los
                  cerezos florecen a finales de marzo. El clima es suave y cómodo en esta
                  época del año.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="p-0 d-flex align-items-center justify-content-center">
              <div className="p-5 m-5 text-start">
                <h3 class="txt-blue mb-4">Verano cálido y húmedo</h3>
                <p class="text-uppercase">JUNIO-AGOSTO</p>
                <p class="pe-5 me-5">
                  En muchos lugares, las temperaturas suben por encima de 30 ° C
                  durante el día. Con aire húmedo que viene desde el sur, aumenta el
                  nivel de humedad y la gente siente que la temperatura es más elevada
                  que la temperatura real.
                </p>
                <p class="pe-5 me-5">
                  Por lo tanto, la gente en Japón requieren la función de
                  deshumidificación además de enfriamiento. Con esto, el verano
                  húmedo y caluroso se convirtió en una estación del año cómoda.
                </p>
              </div>
            </Col>
            <Col className="bg-primary p-0">
              <Image fluid className="w-100" src={require("../img/CulturaDaikin/CulturaDaikin/cultura_material_10.jpg")} alt={"servicio"} />
            </Col>
          </Row>
          <Row>
            <Col className="bg-primary p-0">
              <Image fluid className="w-100" src={require("../img/CulturaDaikin/CulturaDaikin/cultura_material_05.jpg")} alt={"servicio"} />
            </Col>
            <Col className="p-0 d-flex align-items-center justify-content-center">
              <div className="p-5 m-5 text-start">
                <h3 class="txt-blue mb-4">Otoño con follaje brillante y colorido</h3>
                <p class="text-uppercase">SEPTIEMBRE-NOVIEMBRE</p>
                <p class="pe-5 me-5">
                  Después de que el calor del verano se enfría, se empiezan a sentir
                  escalofríos por las mañanas y las noches. Damos la bienvenida a la
                  temporada de hojas de otoño y la cosecha. Podemos disfrutar de la belleza
                  del cielo claro y el follaje de color rojo y amarillo brillante.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="p-0 d-flex align-items-center justify-content-center">
              <div className="p-5 m-5 text-start">
                <h3 class="txt-blue mb-4">Invierno severo con nieve intensa</h3>
                <p class="text-uppercase">DICIEMBRE-FEBRERO</p>
                <p class="pe-5 me-5">
                  A parte de las temperaturas frías severas, se puede experimentar
                  nieve intensa en el invierno. Debido al viento estacional, el lado del
                  Mar de Japón estará cubierto de nieve, mientras que el lado del
                  Océano Pacífico se vuelve seco.
                </p>
                <p class="pe-5 me-5">
                  A fin de sobrepasar el frío severo y seco del invierno, se requirió
                  que los aires acondicionados puedan humidificar mientras calientan
                  poderosamente la habitación.
                </p>
              </div>
            </Col>
            <Col className="bg-primary p-0">
              <Image fluid className="w-100" src={require("../img/CulturaDaikin/CulturaDaikin/cultura_material_03.jpg")} alt={"servicio"} />
            </Col>
          </Row>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Item Three
        </CustomTabPanel>
      </Container>
    </Box>
  );
}

export default CulturaDaikin;
