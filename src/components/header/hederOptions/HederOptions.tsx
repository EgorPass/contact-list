import React, { useContext } from "react";

import SearchForm from "../../searchForm/SearchForm";
import Nav from "../nav/Nav";
import Menu from "../menu/Menu";
import ContextData from "../../../ContextData";

import { IcontextForSearchForm } from "../../../typesDescriptions";

const HederOptions: React.FC = () => {
  const {
    searchButton,
    logOutButton,
    createNewContact,
    handleChangeInput,
    handleSearch,
  } = useContext(ContextData) as IcontextForSearchForm;

  return (
    <div className="header__options options">
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

export default HederOptions;
