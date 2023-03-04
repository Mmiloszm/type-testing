import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

type SubjectContextType = {
  subject: string;
  setSubject: Dispatch<SetStateAction<string>>;
};

export const SubjectContext = createContext<SubjectContextType>({
  subject: "",
  setSubject: () => {},
});

export const SubjectProvider = ({ children }: PropsWithChildren) => {
  const [subject, setSubject] = useState("");

  return (
    <SubjectContext.Provider value={{ subject, setSubject }}>
      {children}
    </SubjectContext.Provider>
  );
};
