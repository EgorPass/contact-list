import React from "react";
import { IInputProps } from "../../typesDescriptions";

const InputField: React.FC<IInputProps> = ({
  autofocus = false,
  changeFunc = () => {},
  onKeyEnter = () => {},
  name = "",
  title = "",
  value = "",
  type = "text",
	placeholder = "",
  className = "modalForm__inputContainer inputContainer",
}) => (
  <div className={className}>
    <span className = "inputTitle">
      {title}
      {title ? ":" : ""}{" "}
    </span>
    <input
      onChange={changeFunc}
      onKeyPress={onKeyEnter}
      value={value}
      type={type}
      name={name}
			autoFocus={autofocus}
			placeholder={placeholder}
			className = 'inputField'
    />
  </div>
);

export default InputField;
