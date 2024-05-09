import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const MasquesContext = createContext();

const MasquesProvider = ({ children }) => {
  const [masques, setMasques] = useState([]);

  const fetchMasques = async () => {
    try {
      const res = await axios.get("masques.json");
      setMasques(res.data);
    } catch (error) {
      console.error("Error fetching masques:", error);
    }
  };

  useEffect(() => {
    fetchMasques();
  }, []);

  return (
    <MasquesContext.Provider
      value={{
        masques,
        fetchMasques,
      }}
    >
      {children}
    </MasquesContext.Provider>
  );
};

export { MasquesProvider, MasquesContext };
