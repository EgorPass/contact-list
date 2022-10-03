import React from "react";
import ButtonsCreateField from "../buttons/ButtonsCreateField";
import InputsCreateField from "../inputField/InputsCreateField";

import { ImodalProps } from "../../typesDescriptions";

const ModalForm: React.FC<ImodalProps> = ({
  title,
  changeField,
  login = false,
  inputs,
  buttons,
	changeFunc,
	placeholders = {},
  changeLoginToReg = () => {},
}) => {
  let titleChangeForm;

  if (login) {
    titleChangeForm = (
      <span
        className="contacts_loginChangeField"
        onClick={(e) => {
          changeLoginToReg(changeField);
        }}>
        {changeField === "login" ? "Регистрация" : "Войти"}
      </span>
    );
  }

  return (
    <form className="contacts_logIn">
      <fieldset className="contacts_createContact">
        <legend>{title}</legend>

				<InputsCreateField inputs={inputs} changeFunc={changeFunc} />
        <ButtonsCreateField buttons={buttons} child={titleChangeForm} />
      </fieldset>
    </form>
  );
};

export default ModalForm;
