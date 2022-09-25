import React from "react"
import { Dispatch,  PayloadAction} from "@reduxjs/toolkit"

export interface Icontact {
  name: string,
  sur: string,
  tel: string,
  email: string,
  id?: number,
}

// useEdit //
  export type Imethods = { [propsName: string]: (value: string)=>({payload: PayloadAction<string>}) } 
  export type IhandleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => void
  export type IoptionButtons = (id: number) => void
  export type IacceptButton = (obj: Icontact) => void
  export type IsearchButton = (str: string) => void

// useLogin //
  export type IchangeLoginToReg = (str: (string | undefined)) => void
  export type IloginButton = (obj: ILoginRegin) => Promise<boolean>
  export interface ILoginRegin {
    login: string,
    password: string,
  }
  export interface IoptionsForAsyncThunk {
    rejectValue: string,
    dispatch?: Dispatch,
  }
  export type IresFromLoginOrRegIn = (string | unknown)
  export interface IloginContext {
    isAuth: boolean,
    regButton: IloginButton,
    loginButton: IloginButton,
    changeLoginToReg: IchangeLoginToReg,
    handleChangeLogin: IhandleChangeInput
  }

// useSyntaxis //
  export type Ifields = Omit<Icontact, "id">
  export type IcheckString = (value: string) => boolean
  export type IcheckField = (obj: Ifields, nameInput: string) => boolean
  export type IclassToInput = (target: HTMLElement, cool: boolean) => void
  export type IchangeClassAtInputs = (target: HTMLElement, obj: Ifields, nameInput: string) => void
  export type IcheckFieldsForAccept = (obj: Ifields) => boolean

//  buttons  //
  export type IButtonsClickFunc = (e: React.MouseEvent<HTMLButtonElement>) => void
  export type IButtonsType = "submit" | "button" | "reset"
  export interface IButtonsProps {
    type: IButtonsType,
    name: string,
    value: string,
    key?: string,
    className?: string,
    clickFunc?: IButtonsClickFunc,
  }
  export interface IButtonsDataForCreate {
    child: React.ReactNode,
    buttons: Array<IButtonsProps>
  }

  export interface IcontextCloseButton {
    closeButton: IButtonsClickFunc
  }
//  inputs  //
  export type IInputType = "text" | "tel" | "email" | "search" | "password"

  export type IInputKeyboardFunc = (e: React.KeyboardEvent) => void
  export interface IInputProps {
    type: string,
    name: string, 
    value: string,
    title?: string,
    className?: string,
    autofocus?: boolean,
    changeFunc?: IhandleChangeInput,
    onKeyEnter?: IInputKeyboardFunc,
  }
  export interface IInputsDataForCreate {
    inputs: Array<IInputProps>,
		changeFunc: IhandleChangeInput,
  }

// searchForm //
  export type ISeachContact = (value: string) => void
  export type IlogOutButton = ()=>void
  export type IhandleChangeSearch = IhandleChangeInput
  export interface IcontextForSearchForm {
    searchButton: IsearchButton,
    logOutButton: IlogOutButton,
    createNewContact: ()=>void,
    handleChangeInput: IhandleChangeSearch,
    handleSearch: IInputKeyboardFunc
  }
  export interface ISearchForm {
    searchContact: IsearchButton, 
    changeField: IhandleChangeSearch,
    onKeyEnter: IInputKeyboardFunc, 
  }

// contacts folder //
  export type IArrayContacts = Array<Icontact>
  export interface IcontactList {
    contacts: IArrayContacts,
    getContactsFromServer: Function,
    isAuth: boolean,
  }
  export interface IclickFunc {
    (e: React.MouseEvent<HTMLSpanElement>): void
  }
  export interface IContactProperty {
    title: string,
    prop: string,
  }

  export interface IcontextForContactOptions {
    [porps: string]: IoptionButtons
  }

export type IobjOfFuncWhithEvent = { [prop: string]: (e: React.SyntheticEvent<HTMLElement>)=>void }
export type IobjOfString = { [prop: string]: string }

// createContact //
  export interface IcontextForCreateContact {
    acceptButton: IacceptButton,
    cancelButton: Function,
    handleChangeInput: IhandleChangeInput,
  }

export interface ImodalProps {
  title: string,
  inputs: IInputProps[],
  buttons: IButtonsProps[],
  login?: boolean,
  changeFunc: IhandleChangeInput,
  changeField?: string,
  changeLoginToReg?: IchangeLoginToReg,
}

// redux //

export interface IfetchStatus {
  status: string,
  error: (string | null),
  data: Icontact[]
}

export type IpayloadBoolean = PayloadAction<boolean>
export type IpayloadString = PayloadAction<string>
export type IpayloadNumber = PayloadAction<number>

export type IasyncReturnArrayContactsOrVoid = (Array<Icontact> | void)

export interface IeditContactAtServer {
  obj: Icontact,
  id: number,
}