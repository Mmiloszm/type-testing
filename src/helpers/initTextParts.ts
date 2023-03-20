import { TextParts } from "../types/TextParts";

export const initTextParts = (parts: string[]): TextParts => {
  return {
    upperText: [],
    mainText: parts.slice(0, 10),
    bottomText: parts.slice(10, 20),
  };
};
