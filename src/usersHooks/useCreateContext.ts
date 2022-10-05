import { useHookSelector } from "../redux/hookStore";
import { useEdit } from "../usersHooks/useEdit";
import { useLogin } from "../usersHooks/useLogin";

export const useCreateContext = () => {
  const { fetchStatus } = useHookSelector((state) => state);

  const {
    loginButton,
    regButton,
    logOutButton,
    handleChangeLogin,
    changeLoginToReg,
  } = useLogin();
  const {
    contacts,
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

  const context = {
    isAuth: !!fetchStatus.log,
    contacts,
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
    handleChangeLogin,
    regButton,
    loginButton,
    changeLoginToReg,
    logOutButton,
  };

  return context;
};
