import { useHookSelector, useHookDispatch } from "../redux/hookStore"
import useSyntaxisCheck from "./useSyntaxisCheck"

import { 
        delContactFromServer,     getContactsFromServer, 
        editContactAtServer,      newContactForServer,                                           
                                                  } from "../redux/contactsReducers"
import {  
        setStatusEdit,    setNewContact, 
                                                  } from "../redux/stateReducers"
import { 
        setIdForEditField,        changeSearchField,
        addNameForChangeContact,  addSurForChangeContact,
        addEmailForChangeContact, addTelForChangeContact,
                                                  } from "../redux/fieldsReducers"

import { editError, resetEditError } from "../redux/fetchReducers"

import { 
		Icontact,  
		IhandleChangeInput,
		IoptionButtons, 
		IacceptButton, 
		IsearchButton,
		IInputKeyboardFunc,
		IButtonsClickFunc,
		IcheckFieldsForAccept
	} from "../typesDescriptions"

export function useEdit() {

	const {
					editId,				fetchStatus,
					newContact, 	editContact, 	
															} = useHookSelector(state => state)
  const contacts = fetchStatus.data || []

  const {	checkFieldsForAccept }: {checkFieldsForAccept: IcheckFieldsForAccept} = useSyntaxisCheck()

	const dispatch = useHookDispatch();

  const resetChange: Function = () => {
  	dispatch( addNameForChangeContact("") ); 
  	dispatch( addSurForChangeContact("") );  
  	dispatch( addTelForChangeContact("") );
  	dispatch( addEmailForChangeContact("") ); 
  }

 	// заполенение сторы из формы при создании или редактировании 
  const methods: Function = (value: string, name: string): void => {
  	if( name === "name" ) dispatch( addNameForChangeContact(value) )
   	if( name === "sur") dispatch( addSurForChangeContact(value) )
   	if( name === "tel") dispatch( addTelForChangeContact(value) )
   	if( name === "email") dispatch( addEmailForChangeContact(value) )
   	if( name === "search") dispatch( changeSearchField(value) )
  }

	// функция для поиска контакта в сторе
	const findContact = (id: number) => {
		return contacts.find((it: Icontact) => {
			if(typeof it.id === "number"){
				const i: number = it.id
				if( i === id ) {
					return it
				}
				
			}
		})
	}

	// функция для контролируемого взаимодействия с input
	const handleChangeInput: IhandleChangeInput = (e) => {
		
		let target = e.target as HTMLInputElement
		let { name, value } = target

			methods(value, name)
	}

	// обработка нажатия Enter для поисковой формы
	const handleSearch: IInputKeyboardFunc = (e) => {		
		let target = e.target as HTMLInputElement
		let { value } = target;

			if(e.code === "Enter") dispatch( getContactsFromServer(value) );			
	}

	// функция для устанвления зависимостей в сторе для создания нового контакта
	const createNewContact: Function = () => {
		dispatch( setNewContact() );
		dispatch( setStatusEdit() );
	}

	// дейстиве на кнопке для кнопке удалить 
	const removeButton: IoptionButtons = (id) => {
		if(window.confirm("уверен?")) 
				dispatch( delContactFromServer(id) )
	}

	// дейстиве на кнопке для кнопке копировать 
	const copyButton: IoptionButtons = (id: number) => {
		const contact = findContact(id)
			if(contact) {
				window.navigator.clipboard.writeText(JSON.stringify(contact))
			}
	}


	// дейстиве на кнопке для кнопке редактировать 
	const editButton: IoptionButtons = (id) => {
		dispatch( setIdForEditField(id) )
		dispatch( setStatusEdit() )

		const contact = findContact(id)
		for(let key in contact as (Icontact | undefined) ) {
			if(contact && Object.keys(contact).length)
				if( key !== "id")  methods(contact[key], key) 
		}
	}

	// сброс полей при закрытии или смене окна
	const resetDefault: Function = () => {
		if(fetchStatus.error === "field-empty")dispatch (resetEditError())
			dispatch( setStatusEdit() )
			resetChange(); 
	}

	// дейстивие для кнопки Сохранить контакт
	const acceptButton: IacceptButton = (obj) => {
		
		if(checkFieldsForAccept(obj) ) {
			dispatch(editError("field-empty"))
			return
		}

		if(newContact) {	
			obj.id = Date.now() as number
			dispatch( newContactForServer(obj) )
			dispatch( setNewContact() );
		}
		
		if(editContact && !newContact) {
			obj.id = editId 
			dispatch( editContactAtServer({id: editId, obj}) )
		}

			resetDefault()
			dispatch( setIdForEditField(0) )
	}

	// дейстивие для кнопки Отменить
	const cancelButton: Function = () => {
		if(newContact) dispatch( setNewContact() );
			
		resetDefault()
	}

	// дейстивие для кнопки Поиск
	const searchButton: IsearchButton = (str)=> {
		dispatch( getContactsFromServer(str) )
	}

	// дейстивие для кнопки закрыть, на модалке об ошибках
	const closeButton: IButtonsClickFunc = (e)=> {
		dispatch (resetEditError())
	}

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

		getContactsFromServer

	}
}