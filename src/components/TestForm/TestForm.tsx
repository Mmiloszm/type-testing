import { useState } from "react";
import TestInput from "../TestInput/TestInput";
import TestParagraph from "../TestParagraph/TestParagraph";
import "./style.scss";

const testString =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sit facilis fugit voluptatem, dolore autem earum nostrum consectetur quo laboriosam quasi placeat illum assumenda porro obcaecati delectus blanditiis amet odio nobis eos magnam aliquid. Voluptate odit eligendi fugit mollitia odio quae officiis distinctio aperiam voluptatem temporibus repellat placeat dicta, impedit quas iste necessitatibus optio, ipsum quaerat iure? Voluptatibus quos eligendi pariatur quisquam et tenetur non, ut temporibus fugit. Aperiam, quasi?";

const parts = testString.split(/\s+/);

type TextPartsType = {
  upperText: string[];
  mainText: string[];
  bottomText: string[];
};

const TestForm = () => {
  const [stride, setStride] = useState(10);
  const [inputText, setInputText] = useState<string[]>([]);
  const [textParts, setTextParts] = useState<TextPartsType>({
    upperText: [],
    mainText: parts.slice(0, stride),
    bottomText: parts.slice(stride, stride + stride),
  });

  const handleTextParts = (newStride: number) => {
    const newTextParts: TextPartsType = {
      upperText: textParts.mainText,
      mainText: textParts.bottomText,
      bottomText: parts.slice(newStride, newStride + 10),
    };
    setTextParts(newTextParts);
  };

  const handleInput = (text: string[]) => {
    setInputText(text);
  };

  return (
    <section className="typing-test">
      <div className="test-paragraphs">
        <TestParagraph
          textParts={textParts.upperText}
          className="non-active-text"
        />
        <TestParagraph
          textParts={textParts.mainText}
          className="active-text"
          inputText={inputText}
        />
        <TestParagraph
          textParts={textParts.bottomText}
          className="non-active-text"
        />
      </div>
      <TestInput handleInput={handleInput} />
      <span>{inputText}</span>
      <button
        onClick={() => {
          const newStride = stride + 10;
          handleTextParts(newStride);
          setStride(newStride);
        }}
      >
        Click
      </button>
    </section>
  );
};

export default TestForm;
