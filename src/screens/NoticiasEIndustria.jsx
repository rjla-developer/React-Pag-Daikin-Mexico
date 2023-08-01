import React, {useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import Noticias from "../components/noticiasComponents/Noticias";

function NoticiasEIndustria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container className="m-0 p-0" fluid>
        <Container>
          <Row className="text-center py-5 d-flex align-items-center justify-content-center">
            <Col>
              <h2 className="txt-blue">NOTICIAS</h2>
              <Noticias />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default NoticiasEIndustria;
