import React, {useContext} from "react"
import ContextData from "../../../ContextData"
import ContactEdit from "../contactEdit/ContactEdit"
import "./contactOptions.css"

import { IcontextForContactOptions } from "../../../typesDescriptions"

const ContactOptions: React.FC< {id: number}> = ({id} ) => {

	const {	editButton, copyButton, removeButton } = useContext(ContextData) as IcontextForContactOptions

	return (
		<div className = "contacts_contactOptions">
			<ContactEdit clickFunc = { (e)=>editButton(id) } title = "Редактировать" />
			<ContactEdit clickFunc = { (e)=>copyButton(id) } title = "Копировать" />
			<ContactEdit clickFunc = { (e)=>removeButton(id) } title = "Удалить" />
		</div>
	)
}

export default ContactOptions

