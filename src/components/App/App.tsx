import "./style.scss";
import SubjectSelection from "../SubjectSelection/SubjectSelection";
import TestForm from "../TestForm/TestForm";
import { ScoreProvider } from "../../context/Score";
import { useCallback, useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Scoreboard from "../Scoreboard/Scoreboard";

const queryClient = new QueryClient();

const App = () => {
  const [startCountdown, setStartCountdown] = useState(false);
  const countdownTime = useCountdown(startCountdown);
  const [subject, setSubject] = useState("");

  const handleResetTest = useCallback(() => {
    setSubject("");
    setStartCountdown(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ScoreProvider>
        {!subject && <SubjectSelection handleSubject={setSubject} />}
        {subject && countdownTime !== 0 && (
          <TestForm
            countdownTime={countdownTime}
            handleCountdownStart={setStartCountdown}
            subject={subject}
          />
        )}
        {subject && countdownTime === 0 && (
          <Scoreboard handleResetTest={handleResetTest} />
        )}
      </ScoreProvider>
    </QueryClientProvider>
  );
};

export default App;
