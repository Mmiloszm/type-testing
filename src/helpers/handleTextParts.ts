import { TextPartsType } from "../types/types";

export const handleTextParts = (
  newStride: number,
  currentTextParts: TextPartsType,
  text: string[]
) => {
  const newTextParts: TextPartsType = {
    upperText: currentTextParts.mainText,
    mainText: currentTextParts.bottomText,
    bottomText: text.slice(newStride, newStride + 10),
  };
  return newTextParts;
};
