import InputField from '../../inputField/InputField'
import { IInputProps, IInputsDataForCreate } from "../../../typesDescriptions"

const InputsCreateField: React.FC<IInputsDataForCreate> = ({inputs, changeFunc}) => (
	<>
		{
		inputs.map( ({title, name, type, value}, i: number)=> {
							return (
									<InputField key = {name}
										title = {title}
										type = {type}
										value = {value}
										name = {name}
										autofocus = {i === 0 ? true: false}
										changeFunc = {changeFunc}
									/>
								)
						})
		}
	</>
)


export default InputsCreateField