import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { handleScore } from "../helpers/handleScore";
import { handleTextParts } from "../helpers/handleTextParts";
import { TextApiResponse } from "../types/TextApiResponse";
import { TextParts } from "../types/TextParts";

type UseParagraphChangePropsType = {
  score: number;
  inputTextParts: string[];
  textParts: TextParts;
  data: TextApiResponse | undefined;
  setInputText: Dispatch<SetStateAction<string>>;
  setTextParts: Dispatch<SetStateAction<TextParts>>;
  setScore: Dispatch<SetStateAction<number>>;
};

export const useParagraphChange = ({
  score,
  setScore,
  inputTextParts,
  textParts,
  data,
  setInputText,
  setTextParts,
}: UseParagraphChangePropsType) => {
  const [stride, setStride] = useState(10);

  useEffect(() => {
    if (inputTextParts.length - 1 === textParts.mainText.length) {
      const newStride = stride + 10;
      setScore(handleScore(textParts.mainText, inputTextParts, score));
      setInputText("");
      const newParts = data?.choices[0].text.trim().split(/\s+/);
      if (newParts) {
        setTextParts(handleTextParts(newStride, textParts, newParts));
      }

      setStride(newStride);
    }
  }, [
    inputTextParts,
    textParts,
    data,
    stride,
    score,
    setInputText,
    setTextParts,
    setScore,
  ]);
};
