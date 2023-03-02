import "./style.scss";
import SubjectSelection from "../ThemeSelection/SubjectSelection";
import { useState } from "react";
import SubjectContext from "../../context/Subject";

const App = () => {
  const [subject, setSubject] = useState(null as string | null);
  return (
    <SubjectContext.Provider value={[subject, setSubject]}>
      {!subject ? <SubjectSelection /> : null}
    </SubjectContext.Provider>
  );
};

export default App;
