import { Dispatch } from "react";
import "./style.scss";

const SubjectSelection = ({
  setSubject,
}: {
  setSubject: Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <section className="search">
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
          <input
            id="subject"
            name="subject"
            spellCheck="false"
            minLength={3}
            maxLength={15}
            pattern={"^w+{2,14}*$"}
          />
        </label>
        <button>Play</button>
      </form>
    </section>
  );
};

export default SubjectSelection;
