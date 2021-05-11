import PropTypes from "prop-types";
import { useState } from "react";
import Avatar from "./Avatar";
import "./ComposeForm.css";

function ComposeForm({ onSubmit }) {
  const [editorValue, setEditorValue] = useState("");

  console.log(editorValue);

  const handleEditorValueChange = (event) => {
    setEditorValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(editorValue);
    setEditorValue("");
  };

  return (
    <form className="compose-form" onSubmit={handleSubmit}>
      <div className="compose-form-container">
        <Avatar />
        <textarea
          value={editorValue}
          onChange={handleEditorValueChange}
          className="compose-form-textarea"
          placeholder="What's Happening?"
        />
      </div>
      <button className="compose-form-submit">Tweet</button>
    </form>
  );
}

ComposeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ComposeForm;
