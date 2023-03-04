import { useState } from "react";
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
  const [textParts, setTextParts] = useState<TextPartsType>({
    upperText: [],
    mainText: parts.slice(0, stride),
    bottomText: parts.slice(stride, stride + stride),
  });

  const handleText = (newStride: number) => {
    const newTextParts: TextPartsType = {
      upperText: textParts.mainText,
      mainText: textParts.bottomText,
      bottomText: parts.slice(newStride, newStride + 10),
    };
    setTextParts(newTextParts);
  };

  return (
    <section className="typing-test">
      <div className="test-paragraphs">
        <p className="non-active-text">{textParts.upperText.join(" ")}</p>
        <p className="active-text">
          {textParts.mainText.map((word, index) => (
            <span key={index}>{word + " "}</span>
          ))}
        </p>
        <p className="non-active-text">{textParts.bottomText.join(" ")}</p>
      </div>
      <div className="wrapper-input">
        <label htmlFor="words">
          <input type="text" name="words" id="words" />
        </label>
        <button
          onClick={() => {
            const newStride = stride + 10;
            handleText(newStride);
            setStride(newStride);
          }}
        >
          Click
        </button>
      </div>
    </section>
  );
};

export default TestForm;
