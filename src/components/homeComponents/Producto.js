import React from "react";
import { Button, Image } from "react-bootstrap";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Producto = ({ imgUrl, nomProduct }) => {
  return (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box sx={{ width: 250, height: "100%" }}>
        <Button variant="outline-primary">
          <Image fluid src={imgUrl} alt="test" />
          <p className="mb-0 fs-4">{nomProduct}</p>
        </Button>
      </Box>
    </Paper>
  );
};

export default Producto;
