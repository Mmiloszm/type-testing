import { useEffect, useState } from "react";

export const useCountdown = (startCountdown: boolean) => {
  const [countdownTime, setCountdownTime] = useState(60);

  useEffect(() => {
    let timeout: number;

    if (!startCountdown) {
      setCountdownTime(60);
    }

    if (startCountdown && countdownTime > 0) {
      timeout = setTimeout(() => {
        setCountdownTime(countdownTime - 1);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [startCountdown, countdownTime]);
  return countdownTime;
};
