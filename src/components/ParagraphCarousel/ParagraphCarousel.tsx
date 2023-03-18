import { memo } from "react";
import { TextPartsType } from "../../types/types";
import TestParagraph from "../TestParagraph/TestParagraph";
import "./style.scss";

type ParagraphCarouselProps = TextPartsType & { inputTextParts: string[] };

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
