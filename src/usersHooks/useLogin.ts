import {
  useActionsOfState,
  useActionsOffetchReducers,
  useActionsOfFields,
  useActionsOfLogin,
} from "./../redux/bindActions";

import {
  IloginButton,
  IhandleChangeInput,
  IchangeLoginToReg,
} from "../typesDescriptions";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const { logIn, regIn } = useActionsOfLogin();
  const { addLoginForChangeForm, addPasswordForChangeForm } =
    useActionsOfFields();
  const { changeFieldLogin, changeFieldReg } = useActionsOfState();
	const { logOut } = useActionsOffetchReducers();
	const navigate = useNavigate();
 
	// сброс полей диалогового окна
  const resetChange: Function = () => {
    addLoginForChangeForm("");
    addPasswordForChangeForm("");
  };

  // функция для контролируемого взаимодействия с input
  const handleChangeLogin: IhandleChangeInput = (e) => {
    let target = e.target as HTMLInputElement;
    let { name, value } = target;

    if (name === "login") addLoginForChangeForm(value);
    if (name === "password") addPasswordForChangeForm(value);
  };

  // действие для смены модалки регистрации или входа
  const changeLoginToReg: IchangeLoginToReg = (str) => {
    resetChange();

    if (str === "login") changeFieldLogin();
    if (str === "reg") changeFieldReg();
  };

	// финальные действия для кнопок регистрации или входа
	const logInOrRegIn: Function = (state: boolean) => {
		if (state) addPasswordForChangeForm("");
    navigate("/contact", { replace: true });
	}

  // действие для кнопки Вход
  const loginButton: IloginButton = async (obj) => {
		const res = await logIn(obj);
			logInOrRegIn(!!res);
  };

  // действие для кнопки Регистрации
  const regButton: IloginButton = async (obj) => {
		const res = await regIn(obj);
		logInOrRegIn(!!res);
  };

  // действие для кнопки Exit
  const logOutButton: Function = () => {
    logOut();
  };

  return {
    regButton,
    loginButton,
    handleChangeLogin,
    logOutButton,
    changeLoginToReg,
  };
}
