import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const TexturesContext = createContext();

const TexturesProvider = ({ children }) => {
  const [textures, setTextures] = useState([]);

  const fetchTextures = async () => {
    try {
      const res = await axios.get("textures.json");
      setTextures(res.data);
    } catch (error) {
      console.error("Error fetching textures:", error);
    }
  };

  useEffect(() => {
    fetchTextures();
  }, []);

  return (
    <TexturesContext.Provider
      value={{
        textures,
        fetchTextures,
      }}
    >
      {children}
    </TexturesContext.Provider>
  );
};

export { TexturesProvider, TexturesContext };
