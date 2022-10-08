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
  changeLoginToReg = () => {},
}) => {
  let titleChangeForm;

  if (login) {
    titleChangeForm = (
			<span
				data-tooltip={changeField === "login" ? "Нажмите если нужно зарегистрироваться" : "Нажмите если уже есть логин и пароль для входа"}
        className="modalForm__loginChangeField"
        onClick={(e) => {
					changeLoginToReg(changeField);
					
        }}>
        {changeField === "login" ? "Регистрация" : "Войти"}
      </span>
    );
  }

  return (
    <form className="body__modalForm modalForm">
      <fieldset className="modalForm__modalField">
        <legend className = "modalForm__title">{title}</legend>

				<InputsCreateField inputs={inputs} changeFunc={changeFunc} />
        <ButtonsCreateField buttons={buttons} child={titleChangeForm} />
      </fieldset>
    </form>
  );
};

export default ModalForm;
