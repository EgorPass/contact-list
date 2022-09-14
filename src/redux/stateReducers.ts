import { createSlice } from "@reduxjs/toolkit"

import { IpayloadBoolean } from "../typesDescriptions"


export const {actions: {setStatusEdit}, reducer: editContact } = createSlice({
	name: "editContact",
	initialState: false,
	reducers: {
		setStatusEdit: state => state = !state
	}
})

export const {actions: {setNewContact}, reducer: newContact} = createSlice({
	name: "newContact",
	initialState: false,
	reducers: {
		setNewContact: state => state = !state
	}
})

export const {actions: {changeFieldLogin, changeFieldReg}, reducer: changeField} = createSlice({
	name: "changeField",
	initialState: "login",
	reducers: {
		changeFieldLogin: state => "reg",
		changeFieldReg: state => "login"
	}
})

export const {actions: {setAuth}, reducer: isAuth} = createSlice({
	name: "isAuth",
	initialState: false,
	reducers: {
		setAuth: {
			prepare: val => ({payload: val}),
			reducer: (state, action: IpayloadBoolean) =>  action.payload,
		} 
	}
})
