import React from "react"

const ContactName: React.FC<{ name: string, sur: string }> = ({ name, sur }) => (
	<div className="contactItem__name">
		{name}&nbsp;{sur}
	</div>

) 

export default ContactName