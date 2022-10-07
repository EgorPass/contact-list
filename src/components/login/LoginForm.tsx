import React, { useContext } from "react";
import { useHookSelector } from "../../redux/hookStore";
import { ContextLogIn } from "../../ContextData";

import {
  IButtonsProps,
  IobjOfString,
  IloginContext,
  IInputProps,
  IplaceholdersObj,
  Itooltip,
} from "../../typesDescriptions";

import ModalForm from "../modalForm/ModalForm";

const LoginForm = () => {
  const state = useHookSelector((state) => state);
  const {
    changeLogin: obj,
    changeField,
    changeLogin: { login, password },
  } = state;
  const { regButton, loginButton, changeLoginToReg, handleChangeLogin } =
    useContext(ContextLogIn) as IloginContext;

  const titleName: IobjOfString = {
    login: "Логин",
    password: "Пароль",
  };
  const typeName: IobjOfString = {
    login: "text",
    password: "password",
  };

  const placeholders: IplaceholdersObj = {
    login: "Введите email в качестве логина ",
    password: "Введите пароль от этой страницы",
  };

  const tooltip: Itooltip = {
    login: "В качестве логина используйте адрес Вашей электронной почты",
    password:
      "Ведите пароль минимум из 6 символов, состоящий из латинских букв различного регистра, цифр и различных символов",
  };

  const buttons: Array<IButtonsProps> = [
    {
      type: "button",
      name: "login",
      value: "Войти",
      tooltip: "Открыть страницу с контактами",
      clickFunc: async (e) => {
        loginButton(obj);
      },
    },
    {
      type: "button",
      name: "singup",
      value: "Регистрация",
      tooltip: "Зарегистрироваться и открыть страницу с контактами",
      clickFunc: async (e) => {
        regButton(obj);
      },
    },
  ];
  const button = [changeField === "login" ? buttons[0] : buttons[1]];
  const title =
    changeField === "login"
      ? "Вход в личный кабинет"
      : "Регистрация лчного кабинета";

  const getValue = (key: string): string => {
    let value: string = "";

    if (key === "login") value = login;
    if (key === "password") value = password;

    return value;
	};
	
	console.log(obj)

  const inputs: IInputProps[] = Object.entries(obj).map(([key, prop]) => {
    // console.log(tooltip[key])
    return {
      title: titleName[key],
      type: typeName[key],
      name: key,
      value: getValue(key),
      placeholder: placeholders[key],
      tooltip: tooltip[key],
    };
  });

  return (
    <>
      <ModalForm
        login={true}
        title={title}
        inputs={inputs}
        changeFunc={handleChangeLogin}
        buttons={button}
        changeField={changeField}
        changeLoginToReg={changeLoginToReg}
      />
    </>
  );
};

export default LoginForm;
