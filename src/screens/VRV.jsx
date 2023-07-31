import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import "../css/cssScreens/Productos.css";
import axios from "axios";
import MenuProducts from "../components/productosComponents/MenuProducts";
import ShowDescProduct from "../components/productosComponents/ShowDescProduct";

function VRV() {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState({});

  const dataItems = [
    {
      item: "Enfriados por agua",
      data: [
        {
          id: 0,
          nameProduct: "VRV W Heat Recovery Frío y calor simultáneos",
        },
        {
          id: 1,
          nameProduct: "VRV W Heat Pump Sistemas inteligentes",
        },
      ],
    },
    {
      item: "Enfriados por aire",
      data: [
        {
          id: 2,
          nameProduct: "VRV IVS – Solución para espacios pequeños",
        },
        {
          id: 3,
          nameProduct: "Heat Pump – Alta eficiencia",
        },
        {
          id: 4,
          nameProduct: "Heat Recovery – Frio y calor simultáneos",
        },
      ],
    },
    {
      item: "Nuevos controles y accesorios",
      data: [
        {
          id: 5,
          nameProduct: "Daikin Zoning Kit (DZK)",
        },
        {
          id: 6,
          nameProduct: "Ventilador recuperador de calor (VAM)",
        },
        {
          id: 7,
          nameProduct: "Control de navegación",
        },
        {
          id: 8,
          nameProduct: "Smart VRV Manager (SVM)",
        },
        {
          id: 9,
          nameProduct: "Intelligent Touch Manager (iTM)",
        },
      ],
    },
    {
      item: "Unidades interiores",
      data: [
        {
          id: 10,
          nameProduct: "Unidades Manejadoras de Aire (AHU)",
        },
        {
          id: 11,
          nameProduct: "Montado en pared",
        },
        {
          id: 12,
          nameProduct: "Ductable oculto sobre plafón",
        },
        {
          id: 13,
          nameProduct: "Cassette de 4 vías suspendido en techo",
        },
        {
          id: 14,
          nameProduct: "Cassette montado en techo (flujo circular con sensor)",
        },
      ],
    },
  ];

  const fetchData = useCallback(() => {
    axios
      .get("/api/vrv.json")
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

  return (
    <Container fluid>
      <Row className="resources-banner-productos py-5 text-white">
        <div className="overlay-resources d-flex align-items-center justify-content-center">
          <Col xs={12} md={5} className="px-4 px-md-0 text-center">
            <div>
              <h3>VRV</h3>
              <p>
                Con nuestra tecnología VRV®, podemos personalizar cada zona de
                manera individual, ya sea por cuarto o por piso, dando como
                resultado una mayor eficiencia y un consumo mínimo de energía
                eléctrica.
              </p>
              <p>
                Estos sistemas están enfocados para uso comercial, como pueden
                ser: oficinas, colegios, hoteles, hospitales, residencias, etc.
                Este resultado se logra gracias a su gran adaptabilidad de
                diseño.
              </p>
              <p>
                Los productos Daikin son reconocidos por su gran calidad y
                confiabilidad. Ofrecemos una amplia variedad de productos de
                última generación, diseñados y fabricados con tecnologías
                propias, que brindan la flexibilidad de adaptarse a los
                requerimiento de su aplicación.
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
                    src={require(`../img/Productos/VRV/Productos/${product["image"]}`)}
                  />
                ) : (
                  <Image
                    fluid
                    src={require(`../img/Productos/VRV/Productos/6.-CASSETTE-MONTADO-EN-TECHO.png`)}
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

export default VRV;
