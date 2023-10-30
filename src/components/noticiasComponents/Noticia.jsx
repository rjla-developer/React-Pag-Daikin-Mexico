import React, {useEffect} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Noticias from "./Noticias";
import "../../css/cssComponents/Noticia.css"

function Noticia() {
  const location = useLocation();
  const propsNoticia = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [propsNoticia]);
  
  return (
    <>
      <Container>
        <Row className="mb-5">
          <Col xs={12} md={4} >
            <div className="titleNoticie bg-blue py-4 px-5 text-white ">
              <p className="mb-0">{propsNoticia.title}</p>
            </div>
          </Col>
          <Col xs={12} md={"auto"} className="mb-5">
            <Image
              fluid
              src={propsNoticia.imgCover}
            />
          </Col>
          <h3 className="txt-blue mb-5">
            {propsNoticia.desc}
          </h3>
          <p dangerouslySetInnerHTML={{__html: propsNoticia.content}}></p>
        </Row>
      </Container>
      <Container className="bg-gray m-0 p-0" fluid>
        <Container>
          <Row className="text-center py-5 d-flex align-items-center justify-content-center">
            <Col>
              <h2 className="txt-blue">Otras noticias sobre Daikin México</h2>
              <Noticias />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Noticia;
