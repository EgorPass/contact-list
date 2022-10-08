import React from "react";
import { Link } from "react-router-dom"
import { IobjOfFuncWhithEvent } from "../../../typesDescriptions"

const Nav: React.FC<IobjOfFuncWhithEvent> = ({ logOutButton }) =>{

	console.log("...rendering Nav")

	return (
		<nav className="headerOptions__buttons">
    <span data-tooltip = "Выйти из списка контактов на поле входа и регистрации">
      <Link onClick={logOutButton} to="/" className="headerOptions__link">
        Выход
      </Link>
    </span>
  </nav>
);
} 

// export default Nav;
export default React.memo(Nav);
