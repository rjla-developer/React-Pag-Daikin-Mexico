import React, {} from "react";
import "../../css/cssComponents/ItemHistoria.css"
import { Container, Row, Col} from "react-bootstrap";

function ItemHistoria() {
  return (
    <Container fluid className="bg-gray py-5 ">
      <Row className="d-flex justify-content-center">
        <h3 className="txt-blue mb-5">Una historia de innovaciones desde 1924</h3>
        <Col xs={12} >
          <div>
            <ul className="timeline">
              <li className="event" data-date="1924">
                <p>Akira Yamada fundó Osaka Kogyosho Ltd.</p>
              </li>
              <li className="event" data-date="1934">
                <p>DAIKIN inicia con pruebas refrigerantes.</p>
              </li>
              <li className="event" data-date="1958">
                <p>Primer paquete bomba de calor.</p>
              </li>
              <li className="event" data-date="1969">
                <p>Primer sistema multi-Split.</p>
              </li>
              <li className="event" data-date="1972">
                <p>Primer paquete enfriado por agua.</p>
              </li>
              <li className="event" data-date="1982">
                <p>Primer Sistema VRV® (Volumen de Refrigerante Variable).</p>
              </li>
              <li className="event" data-date="1992">
                <p>Refrigerante que no afecta la capa de ozono.</p>
              </li>
              <li className="event" data-date="1995">
                <p>Vision Manejadora de aire modular</p>
              </li>
              <li className="event" data-date="2003">
                <p>Magnitude™ Chiller con compresor magnético.</p>
              </li>
              <li className="event" data-date="2006">
                <p>DAIKIN adquiere a McQuay®.</p>
              </li>
              <li className="event" data-date="2009">
                <p>Pathdinder™ Chiller enfriado por aire.</p>
              </li>
              <li className="event" data-date="2011">
                <p>DAIKIN Rabel™ Rooftop.</p>
              </li>
              <li className="event" data-date="2012">
                <p>
                  DAIKIN adquiere a Goodman® líder de equipo residencial en USA.
                </p>
              </li>
              <li className="event" data-date="2013">
                <p>Se completa el proceso de integración de marca DAIKIN.</p>
              </li>
              <li className="event" data-date="2014">
                <p>DAIKIN VRV® IV.</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemHistoria;
