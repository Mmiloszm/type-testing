import { useCallback, useContext, useState, useEffect, useMemo } from "react";
import TestInput from "../TestInput/TestInput";
import "./style.scss";
import { handleTextParts } from "../../helpers/handleTextParts";
import { ScoreContext } from "../../context/Score";
import { handleScore } from "../../helpers/handleScore";
import { TextPartsType } from "../../types/types";
import ParagraphCarousel from "../ParagraphCarousel/ParagraphCarousel";
import Timer from "../Timer/Timer";

const testString =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sit facilis fugit voluptatem, dolore autem earum nostrum consectetur quo laboriosam quasi placeat illum assumenda porro obcaecati delectus blanditiis amet odio nobis eos magnam aliquid. Voluptate odit eligendi fugit mollitia odio quae officiis distinctio aperiam voluptatem temporibus repellat placeat dicta, impedit quas iste necessitatibus optio, ipsum quaerat iure? Voluptatibus quos eligendi pariatur quisquam et tenetur non, ut temporibus fugit. Aperiam, quasi?";

const parts = testString.split(/\s+/);

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
  const [stride, setStride] = useState(10);
  const [inputText, setInputText] = useState("");
  const [textParts, setTextParts] = useState<TextPartsType>({
    upperText: [],
    mainText: parts.slice(0, stride),
    bottomText: parts.slice(stride, stride + stride),
  });
  const { score, setScore } = useContext(ScoreContext);
  const inputTextParts = useMemo(() => inputText.split(/\s+/), [inputText]);

  useEffect(() => {
    if (inputTextParts.length - 1 === textParts.mainText.length) {
      const newStride = stride + 10;
      setScore(() => handleScore(textParts.mainText, inputTextParts, score));
      setInputText("");
      setTextParts(() => handleTextParts(newStride, textParts, parts));
      setStride(newStride);
    }
  }, [setScore, score, stride, inputTextParts, textParts]);

  useEffect(() => {
    if (inputText.length) handleCountdownStart(true);
  }, [inputText, handleCountdownStart]);

  const handleInput = useCallback((text: string) => {
    setInputText(text);
  }, []);

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
