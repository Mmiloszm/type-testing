import "./style.scss";

const SubjectSelection = ({
  handleSubject,
}: {
  handleSubject: (subject: string) => void;
}) => {
  return (
    <div className="search">
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const subject = formData.get("subject")?.toString();
          if (subject) {
            handleSubject(subject);
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
            pattern={"^[a-zA-Z]*$"}
          />
        </label>
        <button>Play</button>
      </form>
    </div>
  );
};

export default SubjectSelection;
