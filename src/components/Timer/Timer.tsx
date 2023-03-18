import "./style.scss";

const Timer = ({ countdownTime }: { countdownTime: number }) => {
  const setTimerColor = () => {
    if (countdownTime > 30) return "timer-green";
    if (countdownTime <= 30 && countdownTime > 15) return "timer-orange";
    return "timer-red";
  };
  return (
    <div className="timer-wrapper">
      <span className={`timer ${setTimerColor()}`}>{countdownTime}</span>
    </div>
  );
};

export default Timer;
