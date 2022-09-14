import { createSlice, createAsyncThunk, PayloadAction, Reducer } from "@reduxjs/toolkit"

import { 
				newContactForServer, 		getContactsFromServer, 
				editContactAtServer, 		delContactFromServer,
																} from "./contactsReducers"

import { Icontact, IfetchStatus, IpayloadString, IasyncReturnArrayContactsOrVoid } from "../typesDescriptions"

const pendingFunc = (state: IfetchStatus) => {
	state.status = "pending"
	state.error = null
	state.data = []
}

const rejectedFunc = (state: IfetchStatus, action: IpayloadString) => {
	state.status = "rejected"
	state.error = action.payload
	state.data = []
}


const fulfilledFunc = (state: IfetchStatus) => {
	state.status = "fulfilled"
	state.error = null
}

const fulfilledFuncToGetContacts = (state: IfetchStatus, action: PayloadAction< IasyncReturnArrayContactsOrVoid >) => {
	if(typeof action.payload !== "undefined") {
		state.data = action.payload	
	}
}

export const {reducer: fetchStatus, actions: {editError, resetEditError}} = createSlice ({
	name: "fetchStatus",
	initialState: {
		status: "loading",
		error: null,
		data: []
	},
	reducers: {
		editError: {
			prepare: (val) => ({payload: val}),
			reducer: (state: IfetchStatus, action: IpayloadString) => {
				state.error = action.payload
			}
		},
		resetEditError: (state: IfetchStatus) => {
			state.error = null;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getContactsFromServer.fulfilled, fulfilledFuncToGetContacts)
			.addCase(delContactFromServer.fulfilled, fulfilledFuncToGetContacts)
			.addCase(newContactForServer.fulfilled, fulfilledFuncToGetContacts)
			.addCase(editContactAtServer.fulfilled, fulfilledFuncToGetContacts)
			.addMatcher(
				(action) => action.type.includes("pending"), 
				pendingFunc
			)
			.addMatcher(
				(action) => action.type.includes("rejected"), 
				rejectedFunc
			)
			.addMatcher(
				(action) => action.type.includes("fulfilled"),
				fulfilledFunc
			)
	}
})
