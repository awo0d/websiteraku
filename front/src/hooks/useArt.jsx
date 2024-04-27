import { useContext } from "react";
import { ArtContext } from "../context/artProvider";

const useArt = () => {
  return useContext(ArtContext);
};

export default useArt;