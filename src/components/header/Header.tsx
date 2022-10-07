import React, {useMemo} from "react";
import Head from "./head/Head";
import HeaderOptions  from "./hederOptions/HederOptions";
import { useHookSelector } from "../../redux/hookStore";

const Header: React.FC = () => {	
	console.log("...change header compouse");
	const {log } = useHookSelector(state => state.fetchStatus)
  return (
    <header className="contacts__header header">
      {!log && <Head isAuth={!!log} />}
      {!!log && <HeaderOptions />}
    </header>
  );
};


// export default Header;
export default React.memo(Header);
