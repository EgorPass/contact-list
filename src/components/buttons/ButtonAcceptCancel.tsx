import React from "react"
import { IButtonsProps } from "../../typesDescriptions"

const ButtonAcceptCancel: React.FC<IButtonsProps> = ({ type, name, value, clickFunc, className = '', tooltip }) => (
	<button 
		type = {type} 
		name={name}
		onClick = {clickFunc} 
		className = {className}
		data-tooltip = {tooltip}
	>
		<span className = "buttonTitle">{value}</span>
	</button>

)

export default ButtonAcceptCancel

