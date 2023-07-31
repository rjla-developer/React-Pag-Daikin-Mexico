import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/cssScreens/Productos.css";
import axios from "axios";
import MenuProducts from "../components/productosComponents/MenuProducts";
import ShowDescProduct from "../components/productosComponents/ShowDescProduct";

function Residencial() {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState({});

  const dataItems = [
    {
      item: "Minisplits",
      data: [
        {
          id: 0,
          nameProduct: "Purificador de aire",
        },
        {
          id: 1,
          nameProduct: "Serie SL Mini-Split",
        },
        {
          id: 2,
          nameProduct: "Serie CL Mini-Split",
        },
        {
          id: 3,
          nameProduct: "Serie Mx18 Mini-Split",
        },
        {
          id: 4,
          nameProduct: "Serie VZ+ Mini-Split",
        },
        {
          id: 5,
          nameProduct: "Serie Nara (Minisplit DAILP)",
        },
        {
          id: 6,
          nameProduct: "Serie Lo7 (Minisplit Lo7)",
        },
      ],
    },
    {
      item: "Divididos residenciales",
      data: [
        {
          item: "Condensadoras",
          data: [
            {
              item: "Solo frío",
              data: [
                {
                  id: 7,
                  nameProduct: "GSX14",
                },
                {
                  id: 8,
                  nameProduct: "CKL",
                },
                {
                  id: 9,
                  nameProduct: "GSC13",
                },
                {
                  id: 10,
                  nameProduct: "GSX13",
                },
                {
                  id: 11,
                  nameProduct: "GSX16",
                },
                {
                  id: 12,
                  nameProduct: "DX18TC",
                },
                {
                  id: 13,
                  nameProduct: "DX20VC",
                },
              ],
            },
            {
              item: "Bomba de calor",
              data: [
                {
                  id: 14,
                  nameProduct: "GSZ14",
                },
                {
                  id: 15,
                  nameProduct: "GSH13",
                },
                {
                  id: 16,
                  nameProduct: "GSZ13",
                },
                {
                  id: 17,
                  nameProduct: "GSZ16",
                },
                {
                  id: 18,
                  nameProduct: "DZ18TC",
                },
                {
                  id: 19,
                  nameProduct: "DZ18VC",
                },
                {
                  id: 20,
                  nameProduct: "DZ20VC",
                },
              ],
            },
          ],
        },
        {
          item: "Evaporadas",
          data: [
            {
              item: "Solo frío",
              data: [
                {
                  id: 21,
                  nameProduct: "High Wall",
                },
                {
                  id: 22,
                  nameProduct: "Piso techo",
                },
              ],
            },
            {
              item: "Bomba de calor",
              data: [
                {
                  id: 23,
                  nameProduct: "Piso techo",
                },
                {
                  id: 24,
                  nameProduct: "Cassette",
                },
                {
                  id: 25,
                  nameProduct: "Fan & Coil con gabinete",
                },
                {
                  id: 26,
                  nameProduct: "Fan & coil",
                },
              ],
            },
          ],
        },
        {
          item: "Manejadoras de aire",
          data: [
            {
              item: "Bomba de calor",
              data: [
                {
                  id: 27,
                  nameProduct: "ARUF",
                },
                {
                  id: 28,
                  nameProduct: "ASPT",
                },
                {
                  id: 29,
                  nameProduct: "AVPTC",
                },
                {
                  id: 30,
                  nameProduct: "DVPEC",
                },
                {
                  id: 31,
                  nameProduct: "DVPVC",
                },
              ],
            },
            {
              item: "Multisplits",
              data: [
                {
                  id: 32,
                  nameProduct: "MULTIZONE",
                },
                {
                  id: 33,
                  nameProduct: "MATCH-IT",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      item: "Paquetes residenciales",
      data: [
        {
          item: "Solo frío",
          data: [
            {
              id: 34,
              nameProduct: "DP14CM",
            },
            {
              id: 35,
              nameProduct: "GPC13H",
            },
            {
              id: 36,
              nameProduct: "GPC14H",
            },
          ],
        },
        {
          item: "Bomba de calor",
          data: [
            {
              id: 37,
              nameProduct: "DP14HM",
            },
            {
              id: 38,
              nameProduct: "GPH13H",
            },
            {
              id: 39,
              nameProduct: "GPH14H",
            },
          ],
        },
        {
          item: "Calefacción a gas",
          data: [
            {
              id: 40,
              nameProduct: "GPG13M",
            },
            {
              id: 41,
              nameProduct: "GPG14M",
            },
          ],
        },
      ],
    },
    {
      item: "Divididos comerciales",
      data: [
        {
          item: "Condensadoras",
          data: [
            {
              item: "Solo frío",
              data: [
                {
                  id: 42,
                  nameProduct: "GSC13",
                },
                {
                  id: 43,
                  nameProduct: "DX13",
                },
                {
                  id: 44,
                  nameProduct: "DX11",
                },
              ],
            },
            {
              item: "Bomba de calor",
              data: [
                {
                  id: 45,
                  nameProduct: "DZ14",
                },
                {
                  id: 46,
                  nameProduct: "DZ13",
                },
                {
                  id: 47,
                  nameProduct: "DZ11",
                },
              ],
            },
          ],
        },
        {
          item: "Manejadoras de aire",
          data: [
            {
              id: 48,
              nameProduct: "DAR",
            },
          ],
        },
      ],
    },
    {
      item: "Paquetes comerciales",
      data: [
        {
          item: "Solo frío",
          data: [
            {
              id: 49,
              nameProduct: "DSC",
            },
            {
              id: 50,
              nameProduct: "DP13CM",
            },
            {
              id: 51,
              nameProduct: "DP14CM",
            },
            {
              id: 52,
              nameProduct: "DCC",
            },
          ],
        },
        {
          item: "Bomba de Calor",
          data: [
            {
              id: 53,
              nameProduct: "DSH",
            },
            {
              id: 54,
              nameProduct: "DCH",
            },
          ],
        },
        {
          item: "Calefacción a gas",
          data: [
            {
              id: 55,
              nameProduct: "DSG",
            },
            {
              id: 56,
              nameProduct: "DCG",
            },
          ],
        },
      ],
    },
    {
      item: "PTAC",
      data: [
        {
          item: "Consola compacta",
          data: [
            {
              item: "Solo frío",
              data: [
                {
                  id: 57,
                  nameProduct: "PBC",
                },
              ],
            },
            {
              item: "Bomba de calor",
              data: [
                {
                  id: 58,
                  nameProduct: "PBH",
                },
              ],
            },
          ],
        },
        {
          item: "Consola",
          data: [
            {
              item: "Solo frío",
              data: [
                {
                  id: 59,
                  nameProduct: "PTC C/Resistencia eléctrica",
                },
                {
                  id: 60,
                  nameProduct: "PTC S/Resistencia eléctrica",
                },
              ],
            },
            {
              item: "Bomba de calor",
              data: [
                {
                  id: 61,
                  nameProduct: "PTH",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      item: "Calefactores a gas",
      data: [
        {
          id: 62,
          nameProduct: "GMS8",
        },
      ],
    },
  ];

  const fetchData = useCallback(() => {
    axios
      .get("/api/residencial.json")
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
      <Row className="resources-banner-residencial py-5 text-white">
        <div className="overlay-resources d-flex align-items-center justify-content-center">
          <Col xs={12} md={5} className="px-4 px-md-0 text-center">
            <div>
              <h3>Residencial</h3>
              <p>
                Los productos Daikin son reconocidos por su gran calidad y
                confiabilidad. Ofrecemos una amplia variedad de productos de
                última generación, diseñados y fabricados con tecnologías
                propias, que brindan la flexibilidad de adaptarse a los
                requerimientos de su aplicación.
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
                    src={require(`../img/Productos/Residencial/Productos/${product["image"]}`)}
                  />
                ) : (
                  <Image
                    fluid
                    src={require(`../img/Productos/Residencial/Productos/ASPT (1).jpg`)}
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

export default Residencial;
