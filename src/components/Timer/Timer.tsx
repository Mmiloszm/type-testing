const Timer = ({ countdownTime }: { countdownTime: number }) => {
  return (
    <div className="timer">
      <span>{countdownTime}</span>
    </div>
  );
};

export default Timer;
