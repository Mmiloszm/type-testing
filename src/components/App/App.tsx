import "./style.scss";
import SubjectSelection from "../SubjectSelection/SubjectSelection";
import TestForm from "../TestForm/TestForm";
import { SubjectProvider } from "../../context/Subject";

const App = () => {
  return (
    <SubjectProvider>
      {/*<SubjectSelection />*/}
      <TestForm />
    </SubjectProvider>
  );
};

export default App;
