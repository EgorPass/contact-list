import React from "react"
import { IclickFunc } from "../../../typesDescriptions"

const ContactEdit: React.FC<{title: string, clickFunc: IclickFunc}> = ({title, clickFunc}) => (
	<span onClick = {clickFunc }> {title} </span>
)

export default ContactEdit