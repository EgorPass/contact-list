import React from "react"
import { IButtonsProps } from "../../typesDescriptions"

const ButtonAcceptCancel: React.FC<IButtonsProps> = ({ type, name, value, clickFunc, className = '' }) => (
	<button 
		type = {type} 
		name = {name} 
		onClick = {clickFunc} 
		className = {className}
	>
		<span>{value}</span>
	</button>

)

export default ButtonAcceptCancel

