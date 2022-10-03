import ButtonAcceptCancel from './ButtonAcceptCancel'
import { IButtonsDataForCreate } from "../../typesDescriptions"

const ButtonsCreateField: React.FC<IButtonsDataForCreate> = ({buttons, child = ""}) => (
	<div className = "contacts_createContectButtonField">
		{child || <span />}
		<div className = "contacts_buttonsSide">

		{
			buttons.map( ({type, name, value, clickFunc} ) => (
				<ButtonAcceptCancel
					key = {name}
					type = {type} 
					name = {name} 
					value = {value}
					className = "contacts_createContactButton"
					clickFunc = {clickFunc}
				/>
			))
		}
		</div>
	</div>
)


export default ButtonsCreateField