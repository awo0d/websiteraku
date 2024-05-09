import { useContext } from "react";
import { MasquesContext } from "../context/masquesProvider";

const useMasques = () => {
  return useContext(MasquesContext);
};

export default useMasques;