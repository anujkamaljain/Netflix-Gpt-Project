import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSelector } from "react-redux";

const useAI = () => {
  const apiKey = useSelector((store) => store.user.API_KEY);
  return new GoogleGenerativeAI(apiKey);
};

export default useAI;
