import { configureStore , combineReducers } from "@reduxjs/toolkit"

import {   
				isAuth,
				editContact,
				newContact,
				changeField,
								} from "./stateReducers"
import {
				editId,
				searching,
				changeLogin,
				changeContact, 
								} from "./fieldsReducers"

import { fetchStatus } from "./fetchReducers"

let store = configureStore({
	reducer:{
		changeContact,
		changeLogin,
		searching,
		editId,
		editContact,
		newContact,
		changeField,
		isAuth,
		fetchStatus
	}
})


export default store

export type  Idispatch = typeof store.dispatch
export type IrootState = ReturnType <typeof store.getState>

