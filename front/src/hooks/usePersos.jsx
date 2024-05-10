import { useContext } from "react";
import { PersosContext } from "../context/persosProvider";

const usePersos = () => {
  return useContext(PersosContext);
};

export default usePersos;