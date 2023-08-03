import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from "axios";

const ContextProyectos = createContext();

const ContextProyectosProvider = ({ children }) => {
    const [dataMalls, setDataMalls] = useState(null)
    const [dataHotels, setDataHotels] = useState(null);
    const [dataInfraestructure, setDataInfraestructure] = useState(null)
    const [dataIndustry, setDataIndustry] = useState(null);
    const [dataHospital, setDataHospital] = useState(null);
    const [dataOffice, setDataOffice] = useState(null);
    const [dataEducation, setDataEducation] = useState(null);
    const [dataOthers, setDataOthers] = useState(null);

    const fetchData = useCallback(() => {
      axios
        .get("/api/mall.json")
        .then((response) => {
          setDataMalls(response.data["projects"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      axios
        .get("/api/hoteles.json")
        .then((response) => {
          setDataHotels(response.data["projects"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      axios
        .get("/api/infraestructure.json")
        .then((response) => {
          setDataInfraestructure(response.data["projects"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      axios
        .get("/api/industry.json")
        .then((response) => {
          setDataIndustry(response.data["projects"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      axios
        .get("/api/hospital.json")
        .then((response) => {
          setDataHospital(response.data["projects"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      axios
        .get("/api/office.json")
        .then((response) => {
          setDataOffice(response.data["projects"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      axios
        .get("/api/schools.json")
        .then((response) => {
          setDataEducation(response.data["projects"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      axios
        .get("/api/others.json")
        .then((response) => {
          setDataOthers(response.data["projects"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
  
    useEffect(() => {
      fetchData();
      /* console.log(dataHoteles) */
    }, [fetchData]);

    const contextValue = {
      dataMalls,
      dataHotels,
      dataInfraestructure,
      dataIndustry,
      dataHospital,
      dataOffice,
      dataEducation,
      dataOthers
    };
  
    return (
      <ContextProyectos.Provider value={contextValue}>
        {children}
      </ContextProyectos.Provider>
    );
  };
  

export {ContextProyectos, ContextProyectosProvider};
