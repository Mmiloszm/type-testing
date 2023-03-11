import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

type ScoreContextType = {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
};

export const ScoreContext = createContext<ScoreContextType>({
  score: 0,
  setScore: () => {},
});

export const ScoreProvider = ({ children }: PropsWithChildren) => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
