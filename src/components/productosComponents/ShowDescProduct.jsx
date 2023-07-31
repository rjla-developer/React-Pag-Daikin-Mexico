import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function ShowDescProduct({ product }) {
  return (
    <Col xs={12} md={4}>
      <h3 className="txt-blue mb-5">{product["content"]["title"]}</h3>
      <p
        dangerouslySetInnerHTML={{
          __html: product["content"]["description"],
        }}
      ></p>

      <div className="mb-4">
        {product["content"]["features"].map((element, index) => (
          <p key={index}>
            <i className="bi bi bi-chevron-right" /> {element["feature"]}
          </p>
        ))}
      </div>

      <div className="mb-5">
        <h3 className="txt-blue">
          <i className="bi bi-download"></i> Descargas
        </h3>
      </div>

      <Row>
        {product["downloads"].map((element, index) => (
          <Col key={index} className="mb-3">
            <Button onClick={() => {}}>{element.download_text}</Button>
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default ShowDescProduct;
