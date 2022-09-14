import React from "react"
import  ContactProperty  from "../contactProperty/ContactProperty"
import "./contactData.css"

import { Icontact } from "../../../typesDescriptions"

const ContactData: React.FC< {data: Icontact }> = ({data : {name, sur, tel, email} }) => (
	<div className = "contacts_contactData">
		
		<div className = "contacts_contactName">
			{ name }&nbsp;{ sur }
		</div>

		<div>
			<ContactProperty prop = { tel }  title = "Телефон" />
			<ContactProperty prop = { email }  title = "Email" />
		</div>
	
	</div>
)

export default ContactData