import React from "react"
import { IInputProps } from "../../typesDescriptions"

const InputField: React.FC<IInputProps> = ({
																							autofocus = false,
																							changeFunc = ()=>{},
																							onKeyEnter = () => {},
																							name = "", title = "", 
																							value = "", type = "text",
																							className = "contacts_createContectInputField"
																																													}) => (
		<div className = {className}>
			<span>{title}{title ? ":" : ''} </span>
				<input
					onChange = { changeFunc }
					onKeyPress = { onKeyEnter }
					value = { value }
					type = { type } 
					name = { name }
					autoFocus = { autofocus }
				/>
		</div>	
)


export default InputField