import React, {useContext} from "react"
import { useHookSelector, useHookDispatch } from "../../redux/hookStore"
import  ContextData  from "../../ContextData"
import ModalForm from "../modalForm/ModalForm"
import "./createContact.css"
import IrootState from "../../redux/store"


import { IButtonsProps, IobjOfString, IcontextForCreateContact, IInputProps } from "../../typesDescriptions"

const CreateContact: React.FC<{title: string}> = ({title})=> {

		const { changeContact: obj, changeContact: {name, sur, tel, email } } = useHookSelector(state=> state)
		const { acceptButton, cancelButton, handleChangeInput  } = useContext(ContextData) as IcontextForCreateContact
		
		const buttons: Array<IButtonsProps> = [
			{
				type: "submit",
				name: "accept",
				value: "сохранить",
				clickFunc: (e) => {e.preventDefault(); acceptButton( {name, sur, tel, email}  ) },
			},
			{
				type: "button",
				name: "cancel",
				value: "отменить",
				clickFunc: (e)=> {e.preventDefault(); cancelButton()},
			}
		]
		
		const titleName: IobjOfString = {
			name: "Имя",
			sur: "Фамилия",
			tel: "Телефон",
			email: "Email",
		} 

		const typeName: IobjOfString = {
			name: "text",
			sur: "text",
			tel: "text",
			email: "email",
		}

		const getValue  = (key: string): string => {
			let value: string = ''
			if(key === "name") value = obj.name
			if(key === "sur") value = obj.sur
			if(key === "tel") value = obj.tel
			if(key === "email") value = obj.email

				return value;
		}

		const inputs: IInputProps[] = Object
										.entries(obj)
											.map( ([key, prop])=> {
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

		<div className = "contacts_createContactContainer">

			<ModalForm 
				title = { title }
				inputs = { inputs }
				changeFunc = { handleChangeInput }
				buttons = { buttons }
			/>

		</div>
	)
}

export default CreateContact