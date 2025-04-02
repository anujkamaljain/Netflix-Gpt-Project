import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constants";

const ai = new GoogleGenerativeAI(OPENAI_KEY);

export default ai;