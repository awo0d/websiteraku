import { useContext } from "react";
import { TexturesContext } from "../context/texturesProvider";

const useTextures = () => {
  return useContext(TexturesContext);
};

export default useTextures;