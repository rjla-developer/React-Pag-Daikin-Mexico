import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

const ContextEntrenamientos = createContext();

const ContextEntrenamientosProvider = ({ children }) => {
  const [dataEntrenamientos, setEntrenamientos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://daikinmx.megcrm.mx/external/api/training-center/events/cache");
      setEntrenamientos(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const dataTrainings = Object.values(dataEntrenamientos);

  const contextValue = {
    dataTrainings,
    loading
  };

  return (
    <ContextEntrenamientos.Provider value={contextValue}>
      {children}
    </ContextEntrenamientos.Provider>
  );
};

export { ContextEntrenamientos, ContextEntrenamientosProvider };
