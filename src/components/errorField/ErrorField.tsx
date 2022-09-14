import React, {useContext} from "react"
import ContextData from "../../ContextData"
import ButtonAccept from "../buttons/ButtonAcceptCancel"
import { IButtonsClickFunc,IcontextCloseButton} from "../../typesDescriptions"

import "./errorField.css"

const ErrorField: React.FC<{error: string}> = ({error})=> {

	const { closeButton } = useContext(ContextData) as IcontextCloseButton

	let string: string = '';
		if(error.includes( "invalid-email" )) string = `Пользователь не зарегистрирован`
		if(error.includes("user-not-found")) string = `Пользователь с Вашим логином не зарегистрирован`
		if(error.includes("already-in-use") ) string = "Пользователь с таким же логином уже существует"
		if(error.includes("wrong-password")) string = `Пароль не верный. Проверьте раскладку клавиатуры.`
		if(error.includes("internal-error") ) string = "Нужно ввести пароль"
		if(error.includes("field-empty") ) string = "Одно из полей имени и одно из полей контактной информации должны быть заполненны корректно"
		if(error.includes("Request failed with status code 404") ) string = "Что то пошло не так во время запроса на сервер"
				
	return(
		<div className = "contacts_createContactContainer">
			
			<div className = "contacts_errorField">	
				<div className = "contacts_errorField_text">
					{string}
				</div>

				<div className = 'contacts_errorField_buttonContainer'>
					<span />
					<ButtonAccept 
						type = "button"
						name = 'closeButton'
						className = "contacts_createContactButton"
						clickFunc = {closeButton}
						value = "Закрыть"
					/>
				</div>
			</div>

		</div>

	)

}

export default ErrorField
