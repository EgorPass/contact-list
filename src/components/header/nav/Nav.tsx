import { Link } from "react-router-dom"

import { IobjOfFuncWhithEvent } from "../../../typesDescriptions"

const Nav: React.FC<IobjOfFuncWhithEvent> = ({logOutButton}) => (
	<nav className = "options__buttons">
		<span	onClick = {logOutButton} >
			<Link to = "/">
				Exit
			</Link>
		</span>
	</nav>
)

export default Nav