import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/cssScreens/CulturaDaikin.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ItemCultura from "../components/culturaComponents/ItemCultura";
import ItemNosotros from "../components/culturaComponents/ItemNosotros";
import ItemHistoria from "../components/culturaComponents/ItemHistoria";
import ItemResponsabilidad from "../components/culturaComponents/ItemResponsabilidad";
import ItemPlanta from "../components/culturaComponents/ItemPlanta";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CulturaDaikin() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="text-center">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="bg-white"
      >
        <Container className="d-flex align-items-center justify-content-center ">
          <Tabs
            value={value}
            onChange={handleChange}
            className="px-0 px-lg-5 pt-2 pt-lg-4"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label="Cultura Daikin" {...a11yProps(0)} className="px-3 px-lg-5" />
            <Tab label="Nosotros" {...a11yProps(1)} className="px-3 px-lg-5" />
            <Tab label="Historia" {...a11yProps(2)} className="px-3 px-lg-5" />
            <Tab
              label="Responsabilidad Ambiental"
              {...a11yProps(3)}
              className="px-3 px-lg-5"
            />
            <Tab label="Planta" {...a11yProps(4)} className="px-3 px-lg-5" />
          </Tabs>
        </Container>
      </Box>
      <Container fluid className="p-0">
        <CustomTabPanel value={value} index={0}>
          <ItemCultura />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ItemNosotros />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ItemHistoria />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ItemResponsabilidad />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <ItemPlanta />
        </CustomTabPanel>
      </Container>
    </Box>
  );
}

export default CulturaDaikin;
