import React, {} from "react";
import { Modal, Button } from "react-bootstrap";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";


function ModalStates({showModal, handleCloseModal, options, setStateOption, stateOption}) {
  return (
    <>
      {/* Modal centrado verticalmente */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Elige un estado:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {options != null ? (
            <Autocomplete
              disablePortal
              id="grouped-state"
              options={options}
              getOptionLabel={(option) => option.state}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Estado" />}
              onChange={(event, value) => {
                setStateOption(value);
              }}
            />
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Link
            className="btn btn-primary"
            to={"/distribuidores"}
            state={stateOption}
            onClick={handleCloseModal}
          >
            Continuar
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalStates;
