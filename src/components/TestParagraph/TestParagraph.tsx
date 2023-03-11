import { memo } from "react";
import "./style.scss";

type TestParagraphProps = {
  textParts: string[];
  className: "active-text" | "non-active-text";
  inputText?: string[];
};

const TestParagraph = ({
  textParts,
  className,
  inputText,
}: TestParagraphProps) => {
  const assignClass = (word: string, index: number) => {
    if (inputText) {
      if (inputText.length - 1 == index) {
        return (
          <span key={index} className={"current"}>
            {word + " "}
          </span>
        );
      }
      if (inputText.length - 1 > index) {
        if (inputText[index] === textParts[index]) {
          return (
            <span key={index} className="correct-word">
              {word + " "}
            </span>
          );
        }
        return (
          <span key={index} className="incorrect-word">
            {word + " "}
          </span>
        );
      }
    }
    return <span key={index}>{word + " "}</span>;
  };

  return (
    <p className={`${className}`}>
      {textParts.map((word, index) => assignClass(word, index))}
    </p>
  );
};

export default memo(TestParagraph);
