import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

const ContextDistribuidores = createContext();

const ContextDistribuidoresProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [stateOption, setStateOption] = useState({});
    const [dataDistributors, setDataDistributors] = useState({});
    
    useEffect(() => {
        fetchData();
        return () => {};
      }, []);
    
      const fetchData = () => {
        axios
          .get("/api/distributorsByState.json")
          .then((response) => {
            setDataDistributors(response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
    
      const handleShowModal = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

      const options = Object.values(dataDistributors);

    const contextValue = {
        options,
        showModal,
        stateOption,
        setStateOption,
        handleShowModal,
        handleCloseModal
    };
  
    return (
      <ContextDistribuidores.Provider value={contextValue}>
        {children}
      </ContextDistribuidores.Provider>
    );
  };
  

export {ContextDistribuidores, ContextDistribuidoresProvider};
