import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import "../css/cssScreens/Productos.css";
import axios from "axios";
import MenuProducts from "../components/productosComponents/MenuProducts";
import ShowDescProduct from "../components/productosComponents/ShowDescProduct";

function Purificadores() {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState({});

  const dataItems = [
    {
      item: "Purificadores",
      data: [
        {
          id: 0,
          nameProduct: "MCK70YASA",
        },
        {
          id: 1,
          nameProduct: "MCK55YASA",
        },
      ],
    },
  ];

  const fetchData = useCallback(() => {
    axios
      .get("/api/purificadores.json")
      .then((response) => {
        setProducts(response.data["products"]);
        setProduct(response.data["products"][0]);
        /* console.log(product) */
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToProductImg = () => {
    const productImg = document.getElementById('productImg');
    const yOffset = -140;
    const y = productImg.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  
  return (
    <Container fluid>
      <Row className="resources-banner-purificadores py-5 text-white">
        <div className="overlay-resources d-flex align-items-center justify-content-center">
          <Col xs={12} md={5} className="px-4 px-md-0 text-center">
            <div>
              <h3>Purificadores</h3>
              {/* <p>
                Los productos Daikin son reconocidos por su gran calidad y
                confiabilidad. Ofrecemos una amplia variedad de productos de
                última generación, diseñados y fabricados con tecnologías
                propias, que brindan la flexibilidad de adaptarse a los
                requerimiento de su aplicación.
              </p> */}
            </div>
          </Col>
        </div>
      </Row>
      <Container>
        <Row className="my-5 pt-3 pb-5">
          <Col xs={12} md={3} className="containerProducts mb-5 mb-md-0">
            <MenuProducts
              dataItems={dataItems}
              setProduct={(e) => {
                setProduct(e);
              }}
              handleScrollToProductImg={()=>handleScrollToProductImg()}
              products={products}
            />
          </Col>

          {Object.keys(product).length > 0 &&
          product.hasOwnProperty("image") &&
          product.hasOwnProperty("content") ? (
            <>
              <Col
                id="productImg"
                xs={12}
                md={5}
                className="d-flex align-items-center justify-content-center mb-5 mb-md-0"
              >
                {product.image ? (
                  <Image
                    fluid
                    src={require(`../img/Productos/Purificadores/Productos/${product["image"]}`)}
                  />
                ) : (
                  <Image
                    fluid
                    src={require(`../img/Productos/Purificadores/Productos/MCK55TVM6-Left.jpg`)}
                  />
                )}
              </Col>
              <ShowDescProduct product={product}/>
            </>
          ) : null}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Purificadores;
