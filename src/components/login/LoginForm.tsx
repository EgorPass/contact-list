import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import {useHookSelector } from "../../redux/hookStore"
import  ContextData  from "../../ContextData"

import { IButtonsProps, IobjOfString, IloginContext, IInputProps } from "../../typesDescriptions"


import ModalForm from "../modalForm/ModalForm"
import "./loginForm.css"

const LoginForm = () => {
	const state = useHookSelector(state=> state)
	const {  
					isAuth,
					changeLogin: obj, 
					changeField,
					changeLogin: {login, password }, 
																					} = state
	const {
					
					regButton, 
					loginButton, 
					changeLoginToReg, 
					handleChangeLogin , 
																					} = useContext(ContextData) as IloginContext
		
		
	
	const navigate = useNavigate()

	const titleName: IobjOfString = {
			login: "Логин",
			password: "Пароль",		
	};
	const typeName: IobjOfString ={
			login: "text",
			password: "password",	
	}
	
	const buttons: Array<IButtonsProps> = [
		{
			type: "button",
			name: "login",
			value: "Войти",
			clickFunc: async (e)=> { 		
				const res = await loginButton(obj)
				if(res) navigate("/contact")
			},
		},
		{
			type: "button",
			name: "singup",
			value: "Регистрация",
			clickFunc: async (e)=> { 
				const res = await regButton(obj)
				if(res) navigate("/contact") 
			},
		}
	]	

		const button = [ changeField === "login" ? buttons[0]: buttons[1] ]  
		const title = changeField === "login" ? "Вход в личный кабинет" : "Регистрация лчного кабинета";
		
		const getValue = (key: string): string => {
			let value: string = ''
	
				if(key === "login") value = obj.login
				if(key === "password") value = obj.password
				
			return value;
		}

		const inputs: IInputProps[] = Object
										.entries(obj)
											.map( ([key, prop]) => {
												return (
														{
															title: titleName[key],
															type: typeName[key],
															name: key,
															value: getValue(key),
														}
													)
											})

	return (
		<>
			<ModalForm 
				login = {true}
				title = {title}
				inputs = {inputs}
				changeFunc = {handleChangeLogin}
				buttons = {button}
				changeField = {changeField}
				changeLoginToReg = {changeLoginToReg}
			/>
	
		</>
	)
}

export default LoginForm