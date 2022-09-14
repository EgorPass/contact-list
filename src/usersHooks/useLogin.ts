import { useHookDispatch } from "../redux/hookStore"
import { setAuth, changeFieldLogin, changeFieldReg } from "../redux/stateReducers"
import { addLoginForChangeForm, addPasswordForChangeForm } from "../redux/fieldsReducers"
import { logIn, regIn } from "../redux/loginActions"

import { IloginButton, IhandleChangeInput, IchangeLoginToReg } from "../typesDescriptions"

export function useLogin() {
	const dispatch = useHookDispatch();

	// сброс полей диалогового окна
	const resetChange: Function = () => {
	  dispatch( addLoginForChangeForm("") );
		dispatch( addPasswordForChangeForm("") ); 
  }

	// функция для контролируемого взаимодействия с input
	const handleChangeLogin: IhandleChangeInput = (e) => {
		let target = e.target as HTMLInputElement;
		let { name, value } = target;

			if( name === "login" ) dispatch( addLoginForChangeForm(value) )
	   	if( name === "password") dispatch( addPasswordForChangeForm(value) )
	}

	// действие для смены модалки регистрации или входа
	const changeLoginToReg: IchangeLoginToReg = (str) => {
			// if(typeof str === "string") {
				resetChange()

				if( str === "login" ) dispatch( changeFieldLogin() )
				if( str === "reg" ) dispatch( changeFieldReg() )
			// } 
	}

	// действие для кнопки Вход
	const loginButton: IloginButton = async (obj) => {	
		const res = await dispatch( logIn(obj) )
		let state = (res.payload === obj.login)
			if(state) resetChange()
		return state;
	}

	// действие для кнопки Регистрации
	const regButton: IloginButton = async (obj) => { 
		const res = await dispatch( regIn(obj) )
		let state = (res.payload === obj.login)
			if(state) resetChange()
		return state;
	}


	// действие для кнопки Exit
	const logOutButton: Function = () => {
		dispatch( setAuth(false) )
	}

	return {
		regButton,
		loginButton,
		handleChangeLogin,
		logOutButton,
		changeLoginToReg
	}
} 