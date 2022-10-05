import Head from "./head/Head";
import HederOptions from "./hederOptions/HederOptions";

const Header: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
  console.log("...change header compouse");
  return (
    <header className="contacts__header header">
      <Head isAuth={isAuth} />
      {isAuth && <HederOptions />}
    </header>
  );
};

export default Header;
