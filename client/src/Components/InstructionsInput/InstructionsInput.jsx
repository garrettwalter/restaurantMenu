import React from "react";
import "./InstructionsInput.css";

const InstructionsInput = ({ value, handleChange }) => {
  return (
    <div className="input-field">
      <textarea
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        id="special-instructions"
        className="materialize-textarea"
      ></textarea>
      <label htmlFor="special-instructions">Special instructions</label>
    </div>
  );
};

export default InstructionsInput;
