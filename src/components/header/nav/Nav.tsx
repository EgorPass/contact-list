import { Link } from "react-router-dom"

import { IobjOfFuncWhithEvent } from "../../../typesDescriptions"

const Nav: React.FC<IobjOfFuncWhithEvent> = ({ logOutButton }) => (
  <nav className="headerOptions__buttons">
    <span>
      <Link onClick={logOutButton} to="/" className="headerOptions__link">
        Exit
      </Link>
    </span>
  </nav>
);

export default Nav