import { memo } from "react";
import { TextParts } from "../../types/TextParts";
import TestParagraph from "../TestParagraph/TestParagraph";
import "./style.scss";

type ParagraphCarouselProps = TextParts & { inputTextParts: string[] };

const ParagraphCarousel = ({
  upperText,
  mainText,
  bottomText,
  inputTextParts,
}: ParagraphCarouselProps) => {
  return (
    <div className="test-paragraphs">
      <TestParagraph textParts={upperText} className="non-active-text" />
      <TestParagraph
        textParts={mainText}
        className="active-text"
        inputText={inputTextParts}
      />
      <TestParagraph textParts={bottomText} className="non-active-text" />
    </div>
  );
};

export default memo(ParagraphCarousel);
