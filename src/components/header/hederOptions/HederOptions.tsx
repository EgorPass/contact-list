import React, { useContext } from "react";

import SearchForm from "../../searchForm/SearchForm";
import Nav from "../nav/Nav";
import Menu from "../menu/Menu";
import { ContextHeader} from "../../../ContextData";

import { IcontextForHeaderOptions } from "../../../typesDescriptions";

const HeaderOptions: React.FC = () => {
  const {
    searchButton,
    logOutButton,
    createNewContact,
    handleChangeInput,
    handleSearch,
  } = useContext(ContextHeader) as IcontextForHeaderOptions;

	console.log("...rendening HeaderOptions")

  return (
    <div className="header__options headerOptions">
      <Menu createNewContact={createNewContact} />

      <SearchForm
        changeField={handleChangeInput}
        searchContact={searchButton}
        onKeyEnter={handleSearch}
      />

      <Nav logOutButton={logOutButton} />
    </div>
  );
};

// React.memo не работает, компонент рендеринтся до 4 раз
// export default React.memo(HeaderOptions)
export default HeaderOptions;
