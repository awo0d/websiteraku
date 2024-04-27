import { useState, useEffect, createContext } from "react";
import axios from "axios";

const ArtContext = createContext();
const ArtProvider=({children})=>{
    const [arts,setArts]=useState()
    const fetchArts=async () =>{
        const artResponse = await axios.get(
            "Data.json"
            //"http://localhost:3000/dancer_workshop/read"
          );
          setArts(artResponse);
    }
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
