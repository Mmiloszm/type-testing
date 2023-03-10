import "./style.scss";

type TestInputProps = {
  handleInput: (text: string[]) => void;
};

const TestInput = ({ handleInput }: TestInputProps) => {
  return (
    <div className="wrapper-input">
      <label htmlFor="words">
        <input
          type="text"
          name="words"
          id="words"
          onChange={(e) => {
            const splitted = e.target.value.split(/\s+/);
            handleInput(splitted);
          }}
        />
      </label>
    </div>
  );
};

export default TestInput;
