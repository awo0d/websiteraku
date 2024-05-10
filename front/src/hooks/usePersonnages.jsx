import { useContext } from "react";
import { PersonnagesContext } from "../context/personnagesProvider";

const usePersonnages = () => {
  return useContext(PersonnagesContext);
};

export default usePersonnages;