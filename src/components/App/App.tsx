import "./style.scss";
import SubjectSelection from "../SubjectSelection/SubjectSelection";
import TestForm from "../TestForm/TestForm";
import { SubjectProvider } from "../../context/Subject";
import { ScoreProvider } from "../../context/Score";

const App = () => {
  return (
    <ScoreProvider>
      <SubjectProvider>
        {/*<SubjectSelection />*/}
        <TestForm />
      </SubjectProvider>
    </ScoreProvider>
  );
};

export default App;
