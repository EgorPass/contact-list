import InputField from './InputField'
import { IInputProps, IInputsDataForCreate } from "../../typesDescriptions"

const InputsCreateField: React.FC<IInputsDataForCreate> = ({ inputs, changeFunc,  }) => (
	<>
		{
		inputs.map( ({title, name, type, value, placeholder = ''}, i: number)=> {
							return (
									<InputField key = {name}
										title = {title}
										type = {type}
										value = {value}
										name = {name}
										autofocus={i === 0 ? true : false}
										placeholder = {placeholder}
										changeFunc={changeFunc}
									/>
								)
						})
		}
	</>
)


export default InputsCreateField