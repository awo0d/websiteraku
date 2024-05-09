import { useContext } from "react";
import { PlumiersContext } from "../context/plumiersProvider";

const usePlumiers = () => {
  return useContext(PlumiersContext);
};

export default usePlumiers;