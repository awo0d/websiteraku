import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const PersonnagesContext = createContext();

const PersonnagesProvider = ({ children }) => {
  const [personnages, setPersonnages] = useState([]);

  const fetchPersonnages = async () => {
    try {
      const res = await axios.get("personnages.json");
      setPersonnages(res.data);
    } catch (error) {
      console.error("Error fetching personnages:", error);
    }
  };

  useEffect(() => {
    fetchPersonnages();
  }, []);

  return (
    <PersonnagesContext.Provider
      value={{
        personnages,
        fetchPersonnages,
      }}
    >
      {children}
    </PersonnagesContext.Provider>
  );
};

export { PersonnagesProvider, PersonnagesContext };
