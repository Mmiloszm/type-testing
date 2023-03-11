import { memo } from "react";
import "./style.scss";

type TestInputProps = {
  handleInput: (text: string) => void;
  inputValue: string;
};

const TestInput = ({ handleInput, inputValue }: TestInputProps) => {
  return (
    <div className="wrapper-input">
      <label htmlFor="words">
        <input
          type="text"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          name="words"
          id="words"
          value={inputValue}
          onChange={(e) => {
            handleInput(e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default memo(TestInput);
