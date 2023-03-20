import { TextParts } from "../types/TextParts";

export const handleTextParts = (
  newStride: number,
  currentTextParts: TextParts,
  text: string[]
) => {
  const newTextParts: TextParts = {
    upperText: currentTextParts.mainText,
    mainText: currentTextParts.bottomText,
    bottomText: text.slice(newStride, newStride + 10),
  };
  console.log(currentTextParts);
  console.log(text);
  return newTextParts;
};
