import { useEdit } from "../usersHooks/useEdit";
import { useLogin } from "../usersHooks/useLogin";

export const useCreateContext = () => {

  const {
    loginButton,
    regButton,
    logOutButton,
    handleChangeLogin,
    changeLoginToReg,
  } = useLogin();
  const {
    searchButton,
    createNewContact,
    editButton,
    copyButton,
    removeButton,
    acceptButton,
    cancelButton,
    closeButton,
    handleChangeInput,
    handleSearch,
    getContactsFromServer,
  } = useEdit();

	
	return {
    logInContext: {
      regButton,
      loginButton,
      changeLoginToReg,
      handleChangeLogin,
    },
    headerContext: {
      logOutButton,
      searchButton,
      createNewContact,
      handleChangeInput,
      handleSearch,
    },
    createContactContext: {
      acceptButton,
      cancelButton,
      handleChangeInput,
    },
    contactOptionsContext: {
      editButton,
      copyButton,
      removeButton,
    },
    context: {
      closeButton,
      getContactsFromServer,
    },
  };

  // return context;
};
