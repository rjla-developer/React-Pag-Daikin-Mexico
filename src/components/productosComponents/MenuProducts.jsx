import React from "react";
import { Accordion, ListGroup, ListGroupItem, Button } from "react-bootstrap";

function MenuProducts({ dataItems, setProduct, products }) {
  function btnAcordion(nameProduct, id, numKey) {
    return (
      <Button
        key={numKey}
        onClick={() => {
          /* console.log(products[id]); */
          setProduct(products[id]);
        }}
        variant="link"
        className="text-decoration-none m-0 p-2 rounded-0 border-0"
      >
        <ListGroupItem>{nameProduct}</ListGroupItem>
      </Button>
    );
  }

  return (
    <Accordion>
      {dataItems.map((element, index) => {
        return (
          <Accordion.Item eventKey={index} className="text-white" key={index}>
            <Accordion.Header>{element.item}</Accordion.Header>
            <Accordion.Body className="p-2">
              <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                {element["data"].map((element2, index) => {
                  if (element2["item"]) {
                    return (
                      <Accordion key={index}>
                        <Accordion.Item eventKey={index} className="text-white">
                          <Accordion.Header>{element2.item}</Accordion.Header>
                          <Accordion.Body className="p-2">
                            <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                              {element2["data"].map((element3, index) => {
                                if (element3["item"]) {
                                  return (
                                    <Accordion key={index}>
                                      <Accordion.Item
                                        eventKey="0"
                                        className="text-white"
                                      >
                                        <Accordion.Header>
                                          {element3.item}
                                        </Accordion.Header>
                                        <Accordion.Body className="p-0">
                                          <ListGroup className="border-top-0 border-bottom-0 rounded-0 border-right-0 border-left-0">
                                            {element3["data"].map(
                                              (element4, index) =>
                                                btnAcordion(
                                                  element4["nameProduct"],
                                                  element4["id"],
                                                  index
                                                )
                                            )}
                                          </ListGroup>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                  );
                                } else
                                  return btnAcordion(
                                    element3["nameProduct"],
                                    element3["id"],
                                    index
                                  );
                              })}
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    );
                  } else
                    return btnAcordion(
                      element2["nameProduct"],
                      element2["id"],
                      index
                    );
                })}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default MenuProducts;
