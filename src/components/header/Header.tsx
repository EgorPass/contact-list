import React from "react"
import Head from "./head/Head"
import Menu from "./menu/Menu"
			
const Header: React.FC<{isAuth: boolean}> = ({isAuth}) =>(
		<header className = "contacts__header header">
			
			<Head isAuth = {isAuth} />
			{isAuth && <Menu /> }

		</header>
)


export default Header