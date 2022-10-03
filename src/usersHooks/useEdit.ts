import {
  useActionsOfContacts,
  useActionsOfState,
  useActionsOffetchReducers,
  useActionsOfFields,
} from "./../redux/bindActions";
import { useHookSelector } from "../redux/hookStore";
import useSyntaxisCheck from "./useSyntaxisCheck";

import {
  Icontact,
  IhandleChangeInput,
  IoptionButtons,
  IacceptButton,
  IsearchButton,
  IInputKeyboardFunc,
  IButtonsClickFunc,
  IcheckFieldsForAccept,
} from "../typesDescriptions";

export function useEdit() {
  const { setStatusEdit, setNewContact } = useActionsOfState();
  const {
    delContactFromServer,
    getContactsFromServer,
    editContactAtServer,
    newContactForServer,
	} = useActionsOfContacts();
	
	const { editError, resetEditError } = useActionsOffetchReducers();

	const {
    setIdForEditField,
    changeSearchField,
    addNameForChangeContact,
    addSurForChangeContact,
    addEmailForChangeContact,
    addTelForChangeContact,
  } = useActionsOfFields();
  const { editId, fetchStatus, newContact, editContact } = useHookSelector(
    (state) => state
  );
  const contacts = fetchStatus.data || [];

  const {
    checkFieldsForAccept,
  }: { checkFieldsForAccept: IcheckFieldsForAccept } = useSyntaxisCheck();

  const resetChange: Function = () => {
    addNameForChangeContact("");
    addSurForChangeContact("");
    addTelForChangeContact("");
    addEmailForChangeContact("");
  };

  // заполенение сторы из формы при создании или редактировании
  const methods: Function = (value: string, name: string): void => {
    if (name === "name") addNameForChangeContact(value);
    if (name === "sur") addSurForChangeContact(value);
    if (name === "tel") addTelForChangeContact(value);
    if (name === "email") addEmailForChangeContact(value);
    if (name === "search") changeSearchField(value);
  };

  // функция для поиска контакта в сторе
  const findContact = (id: number) => {
    return contacts.find((it: Icontact) => {
      if (typeof it.id === "number") {
        const i: number = it.id;
        if (i === id) {
          return it;
        }
      }
    });
  };

  // функция для контролируемого взаимодействия с input
  const handleChangeInput: IhandleChangeInput = (e) => {
    let target = e.target as HTMLInputElement;
    let { name, value } = target;

    methods(value, name);
  };

  // обработка нажатия Enter для поисковой формы
  const handleSearch: IInputKeyboardFunc = (e) => {
    let target = e.target as HTMLInputElement;
    let { value } = target;

    if (e.code === "Enter") getContactsFromServer(value);
  };

  // функция для устанвления зависимостей в сторе для создания нового контакта
  const createNewContact: Function = () => {
    setNewContact();
    setStatusEdit();
  };

  // дейстиве на кнопке для кнопке удалить
  const removeButton: IoptionButtons = (id) => {
    if (window.confirm("уверен?")) delContactFromServer(id);
  };

  // дейстиве на кнопке для кнопке копировать
  const copyButton: IoptionButtons = (id: number) => {
    const contact = findContact(id);
    if (contact) {
      window.navigator.clipboard.writeText(JSON.stringify(contact));
    }
  };

  // дейстиве на кнопке для кнопке редактировать
  const editButton: IoptionButtons = (id) => {
    setIdForEditField(id);
    setStatusEdit();

    const contact = findContact(id);
    for (let key in contact as Icontact | undefined) {
      if (contact && Object.keys(contact).length)
        if (key !== "id") methods(contact[key], key);
    }
  };

  // сброс полей при закрытии или смене окна
  const resetDefault: Function = () => {
    if (fetchStatus.error === "field-empty") resetEditError();
    setStatusEdit();
    resetChange();
  };

  // дейстивие для кнопки Сохранить контакт
  const acceptButton: IacceptButton = (obj) => {
    if (checkFieldsForAccept(obj)) {
      editError("field-empty");
      return;
    }

    if (newContact) {
      obj.id = Date.now() as number;
      newContactForServer(obj);
      setNewContact();
    }

    if (editContact && !newContact) {
      obj.id = editId;
      editContactAtServer({ id: editId, obj });
    }

    resetDefault();
    setIdForEditField(0);
  };

  // дейстивие для кнопки Отменить
  const cancelButton: Function = () => {
    if (newContact) setNewContact();

    resetDefault();
  };

  // дейстивие для кнопки Поиск
  const searchButton: IsearchButton = (str) => {
    getContactsFromServer(str);
  };

  // дейстивие для кнопки закрыть, на модалке об ошибках
  const closeButton: IButtonsClickFunc = (e) => {
    resetEditError();
  };

  return {
    contacts,
    createNewContact,

    editButton,
    copyButton,
    removeButton,

    searchButton,

    acceptButton,
    cancelButton,
    closeButton,

    handleChangeInput,
    handleSearch,

    getContactsFromServer,
  };
}
