import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const PlumiersContext = createContext();

const PlumiersProvider = ({ children }) => {
  const [plumiers, setPlumiers] = useState([]);

  const fetchPlumiers = async () => {
    try {
      const res = await axios.get("plumiers.json");
      setPlumiers(res.data);
    } catch (error) {
      console.error("Error fetching plumiers:", error);
    }
  };

  useEffect(() => {
    fetchPlumiers();
  }, []);

  return (
    <PlumiersContext.Provider
      value={{
        plumiers,
        fetchPlumiers,
      }}
    >
      {children}
    </PlumiersContext.Provider>
  );
};

export { PlumiersProvider, PlumiersContext };
