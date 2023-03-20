import { useContext } from "react";
import { ScoreContext } from "../../context/Score";
import "./style.scss";

type ScoreboardProps = {
  handleResetTest: () => void;
};

const Scoreboard = ({ handleResetTest }: ScoreboardProps) => {
  const { score, setScore } = useContext(ScoreContext);
  return (
    <section className="score-card">
      <h1>Score</h1>
      <hr />
      <div className="results-wrapper">
        <h3>
          Your score: <span className="highlight">{score}</span>
        </h3>
        <hr />
        <h3>Average scores by age:</h3>
        <p>{`6-10 y/o\t|\t25 wpm\t|\t(125 cpm)`}</p>
        <p>{`12-16 y/o\t|\t40 wpm\t|\t(200 cpm) `}</p>
        <p>{`>17y/o\t|\t55 wpm\t|\t(275 cpm)`}</p>
        <button
          onClick={() => {
            handleResetTest();
            setScore(0);
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Scoreboard;
