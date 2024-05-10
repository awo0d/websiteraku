import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const PersosContext = createContext();

const PersosProvider = ({ children }) => {
  const [persos, setPersos] = useState([]);

  const fetchPersos = async () => {
    try {
      const res = await axios.get("persos.json");
      setPersos(res.data);
    } catch (error) {
      console.error("Error fetching persos:", error);
    }
  };

  useEffect(() => {
    fetchPersos();
  }, []);

  return (
    <PersosContext.Provider
      value={{
        persos,
        fetchPersos,
      }}
    >
      {children}
    </PersosContext.Provider>
  );
};

export { PersosProvider, PersosContext };
