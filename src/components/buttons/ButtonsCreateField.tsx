import ButtonAcceptCancel from './ButtonAcceptCancel'
import { IButtonsDataForCreate } from "../../typesDescriptions"

const ButtonsCreateField: React.FC<IButtonsDataForCreate> = ({buttons, child = ""}) => (
	<div className = "modalForm__buttonsContainer">
		{child || <span />}
		<div className = "modalForm__buttonsSide">

		{
			buttons.map( ({type, name, value, clickFunc} ) => (
				<ButtonAcceptCancel
					key = {name}
					type = {type} 
					name = {name} 
					value = {value}
					className = "modalForm__buttons"
					clickFunc = {clickFunc}
				/>
			))
		}
		</div>
	</div>
)


export default ButtonsCreateField