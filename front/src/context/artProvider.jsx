import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const ArtContext = createContext();

const ArtProvider = ({ children }) => {
  const [arts, setArts] = useState([]);

  const fetchArts = async () => {
    try {
      const res = await axios.get("data.json");
      setArts(res.data);
    } catch (error) {
      console.error("Error fetching arts:", error);
    }
  };

  useEffect(() => {
    fetchArts();
  }, []);

  return (
    <ArtContext.Provider
      value={{
        arts,
        fetchArts,
      }}
    >
      {children}
    </ArtContext.Provider>
  );
};

export { ArtProvider, ArtContext };
