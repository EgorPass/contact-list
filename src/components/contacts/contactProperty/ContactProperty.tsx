import React from "react"
import { IContactProperty } from "../../../typesDescriptions"


const ContactProperty: React.FC<IContactProperty> = ({title, prop}) => (
	<div className = "contacts_contactProperty">
		<span className = "contacts_contactPropertyProp">
			{title}: 
		</span>
		<span className = "contacts_contactPropertyVal">
			{ prop }
		</span>
	</div>

)

export default ContactProperty