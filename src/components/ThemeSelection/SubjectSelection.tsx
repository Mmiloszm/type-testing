import { useContext } from "react";
import SubjectContext from "../../context/Subject";
import "./style.scss";

const SubjectSelection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSubject] = useContext(SubjectContext);

  return (
    <div className="search">
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const subject = formData.get("subject")?.toString();
          if (subject) {
            setSubject(subject);
          }
        }}
      >
        <label htmlFor="subject">
          Enter the subject you want your test to be based on.
          <input id="subject" name="subject" spellCheck="false" />
        </label>
        <button>Play</button>
      </form>
    </div>
  );
};

export default SubjectSelection;
