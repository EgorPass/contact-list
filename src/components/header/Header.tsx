import React from "react"
import Head from "./head/Head"

import Menu from "./menu/Menu"
import "./header.css"
			

const Header: React.FC<{isAuth: boolean}> = ({isAuth}) =>(
		<header className = "contacts_header">
			
			<Head isAuth = {isAuth} />
			{isAuth && <Menu /> }



		</header>
)


export default Header