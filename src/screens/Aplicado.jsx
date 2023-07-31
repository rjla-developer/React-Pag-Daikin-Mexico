import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/cssScreens/Productos.css";
import axios from "axios";
import MenuProducts from "../components/productosComponents/MenuProducts";
import ShowDescProduct from "../components/productosComponents/ShowDescProduct";

function Aplicado() {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState({});

  const dataItems = [
    {
      item: "CHILLERS",
      data: [
        {
          item: "Enfriados por agua",
          data: [
            {
              id: 0,
              nameProduct: "WMC /WME – Magnetico [86 a 1500 TR]",
            },
            {
              id: 1,
              nameProduct:
                "WSC / WDS – Centrífugo Convencional [200 a 1500 TR]",
            },
            {
              id: 2,
              nameProduct: "EWWD-VZ – Tornillo VFD [128 a 597 TR]",
            },
            {
              id: 3,
              nameProduct: "WGZ – Scroll [30 a 200 TR]",
            },
          ],
        },
        {
          item: "Enfriados por aire",
          data: [
            {
              id: 4,
              nameProduct: "AWV – Tornillo VFD [170 a 550 TR]",
            },
            {
              id: 5,
              nameProduct: "AGZ – Scroll [30 a 240 TR]",
            },
          ],
        },
        {
          item: "Hidroflex",
          data: [
            {
              id: 6,
              nameProduct: "Chiller Modular",
            },
            {
              id: 7,
              nameProduct: "Mini Chiller",
            },
          ],
        },
      ],
    },
    {
      item: "UMAS",
      data: [
        {
          id: 8,
          nameProduct: "Destiny",
        },
        {
          id: 9,
          nameProduct: "Vision",
        },
        {
          id: 10,
          nameProduct: "Skyline",
        },
      ],
    },
    {
      item: "WSHP",
      data: [
        {
          id: 11,
          nameProduct: "Enfinity",
        },
        {
          id: 12,
          nameProduct: "Smart Source",
        },
        {
          id: 13,
          nameProduct: "Vertical Stacked",
        },
        {
          id: 14,
          nameProduct: "Water to water",
        },
      ],
    },
    {
      item: "PAQUETES",
      data: [
        {
          id: 15,
          nameProduct: "Maverick I [3 a 25 TR]",
        },
        {
          id: 16,
          nameProduct: "Maverick II [15 a 75 TR]",
        },
        {
          id: 17,
          nameProduct: "Rebel [3 a 28 TR]",
        },
        {
          id: 18,
          nameProduct: "Roofpack [15 a 140 TR]",
        },
      ],
    },
    {
      item: "EVAPORADORAS HIDRÓNICAS",
      data: [
        {
          id: 19,
          nameProduct: "MCKE-Cassette de 4 vías",
        },
        {
          id: 20,
          nameProduct: "MCM – Piso Techo",
        },
        {
          id: 21,
          nameProduct: "MWM – Evaporadora minisplit o muro alto",
        },
        {
          id: 22,
          nameProduct: "MCC – Fan & Coil con Gabinete y termostato",
        },
        {
          id: 23,
          nameProduct: "MCW – Fan & Coil tipo Hotelero",
        },
      ],
    },
    {
      item: "VAV",
      data: [
        {
          id: 24,
          nameProduct: "Cajas VAV",
        },
      ],
    },
  ];

  const fetchData = useCallback(() => {
    axios
      .get("/api/aplicado.json")
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
    console.log(products);
  }, [fetchData]);

  return (
    <Container fluid>
      <Row className="resources-banner-aplicado py-5 text-white">
        <div className="overlay-resources d-flex align-items-center justify-content-center">
          <Col xs={12} md={5} className="px-4 px-md-0 text-center">
            <div>
              <h3>Aplicado</h3>
              <p>
                Aplicado Los productos Daikin son reconocidos por su gran
                calidad y confiabilidad. Ofrecemos una amplia variedad de
                productos de última generación, diseñados y fabricados con
                tecnologías propias, que brindan la flexibilidad de adaptarse a
                los requerimientos de su aplicación.
              </p>
            </div>
          </Col>
        </div>
      </Row>
      <Container>
        <Row className="my-5 pt-3 pb-5">
          <Col xs={12} md={3} className="containerProducts">
            <MenuProducts
              dataItems={dataItems}
              setProduct={(e) => {
                setProduct(e);
              }}
              products={products}
            />
          </Col>

          {Object.keys(product).length > 0 &&
          product.hasOwnProperty("image") &&
          product.hasOwnProperty("content") ? (
            <>
              <Col
                xs={12}
                md={5}
                className="d-flex align-items-center justify-content-center"
              >
                {product.image ? (
                  <Image
                    fluid
                    src={require(`../img/Productos/Aplicado/Productos/${product["image"]}`)}
                  />
                ) : (
                  <Image
                    fluid
                    src={require(`../img/Productos/Aplicado/Productos/5.-ChillersPathfinder3.jpg`)}
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

export default Aplicado;
