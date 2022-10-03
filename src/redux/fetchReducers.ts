import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { 
				newContactForServer, 		getContactsFromServer, 
				editContactAtServer, 		delContactFromServer,
																} from "./contactsReducers"

import { Icontact, IfetchStatus, IpayloadString, IasyncReturnArrayContactsOrVoid } from "../typesDescriptions"
import { logIn } from "./loginActions"

const pendingFunc = (state: IfetchStatus) => {
	state.status = "pending"
	state.error = null
	state.data = [];
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
		state.data = action.payload	as Array<Icontact>
}

const fulfilledFuncTolog = (state: IfetchStatus, action: PayloadAction<IasyncReturnArrayContactsOrVoid>) => {
	state.log = action.payload as string
}

export const {reducer: fetchStatus, actions: {editError, resetEditError, logOut}} = createSlice ({
	name: "fetchStatus",
	initialState: {
		status: "loading",
		error: null,
		data: [],
		log: null,
	},
	reducers: {
		editError: {
			prepare: (val) => ({payload: val}),
			reducer: (state: IfetchStatus, action: IpayloadString) => {
				state.error = action.payload;
			}
		},
		resetEditError: (state: IfetchStatus) => {
			state.error = null;
		},
		logOut: (state: IfetchStatus) => {
			state.log = null;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getContactsFromServer.fulfilled, fulfilledFuncToGetContacts)
			.addCase(delContactFromServer.fulfilled, fulfilledFuncToGetContacts)
			.addCase(newContactForServer.fulfilled, fulfilledFuncToGetContacts)
			.addCase(editContactAtServer.fulfilled, fulfilledFuncToGetContacts)
			.addCase(logIn.fulfilled, fulfilledFuncTolog)
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

export const fetchActions = {
  editError,
  resetEditError,
  logOut,
};