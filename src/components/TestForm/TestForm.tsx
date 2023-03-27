import { useCallback, useContext, useState, useEffect, useMemo } from "react";
import TestInput from "../TestInput/TestInput";
import "./style.scss";
import { handleTextParts } from "../../helpers/handleTextParts";
import { ScoreContext } from "../../context/Score";
import { handleScore } from "../../helpers/handleScore";
import { TextParts } from "../../types/TextParts";
import ParagraphCarousel from "../ParagraphCarousel/ParagraphCarousel";
import Timer from "../Timer/Timer";
import { useQuery } from "@tanstack/react-query";
import getText from "../../services/TextService";
import { initTextParts } from "../../helpers/initTextParts";
import { generatePlaceholderText } from "../../helpers/generatePlaceholderText";
import { useParagraphChange } from "../../hooks/useParagraphChange";

type TestFormProps = {
  countdownTime: number;
  handleCountdownStart: (start: boolean) => void;
  subject: string;
};

const TestForm = ({
  countdownTime,
  handleCountdownStart,
  subject,
}: TestFormProps) => {
  const [isAbleToSetNewText, setIsAbleToSetNewText] = useState(true);
  let parts = useMemo(() => generatePlaceholderText(), []);
  const { data, isLoading, isFetched } = useQuery(["text", subject], getText);
  const [inputText, setInputText] = useState("");
  const [textParts, setTextParts] = useState<TextParts>(() =>
    initTextParts(parts)
  );
  const { score, setScore } = useContext(ScoreContext);
  const inputTextParts = useMemo(() => inputText.split(/\s+/), [inputText]);

  useParagraphChange({
    score: score,
    setScore: setScore,
    inputTextParts: inputTextParts,
    textParts: textParts,
    data: data,
    setInputText: setInputText,
    setTextParts: setTextParts,
  });

  useEffect(() => {
    if (inputText.length) handleCountdownStart(true);
  }, [inputText, handleCountdownStart]);

  const handleInput = useCallback((text: string) => {
    setInputText(text);
  }, []);

  if (isLoading) {
    return (
      <div className=" loader-wrapper">
        <span className="loader"></span>
      </div>
    );
  }

  if (isFetched && isAbleToSetNewText) {
    const newParts = data?.choices[0].text.trim().split(/\s+/);
    if (newParts) {
      const temp = initTextParts(newParts);
      setTextParts(temp);
      parts = newParts;
      setIsAbleToSetNewText(false);
    }
  }

  return (
    <section className="typing-test">
      <Timer countdownTime={countdownTime} />
      <ParagraphCarousel
        upperText={textParts.upperText}
        mainText={textParts.mainText}
        bottomText={textParts.bottomText}
        inputTextParts={inputTextParts}
      />
      <TestInput handleInput={handleInput} inputValue={inputText} />
    </section>
  );
};

export default TestForm;
