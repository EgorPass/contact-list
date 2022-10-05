import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { 
				newContactForServer, 		getContactsFromServer, 
				editContactAtServer, 		delContactFromServer,
																} from "./contactsReducers"

import { Icontact, IfetchStatus, IpayloadString, IasyncReturnArrayContactsOrVoid } from "../typesDescriptions"
import { logIn } from "./loginActions"

const pendingFunc = (state: IfetchStatus) => {
	console.log("...reducer pendingFunc")
	
	state.status = "pending"
	// state.error = null
	state.data = [];
}

const rejectedFunc = (state: IfetchStatus, action: IpayloadString) => {
	console.log("...reducer rejectedFunc");

	state.status = "rejected"
	state.error = action.payload
	state.data = []
}

////// создает дополнительный ререндеринг //////////
const fulfilledFunc = (state: IfetchStatus) => {	//
	console.log("...reducer fulfilledFunc");				//
																									//
	state.status = "fulfilled"											//
	// state.error = null															//
}																									//
////////////////////////////////////////////////////

const fulfilledFuncToGetContacts = (state: IfetchStatus, action: PayloadAction<IasyncReturnArrayContactsOrVoid>) => {
	console.log("...reducer fulfilledFuncToGetContacts");
		state.status = "fulfilled"
		state.data = action.payload	as Array<Icontact>
}

const fulfilledFuncTolog = (
  state: IfetchStatus,
  action: PayloadAction<IasyncReturnArrayContactsOrVoid>
) => {
  console.log("...reducer fulfilledFuncTolog");
  state.status = "fulfilled"; //

  state.log = action.payload as string;
};

export const {
  reducer: fetchStatus,
  actions: { editError, resetEditError, logOut },
} = createSlice({
  name: "fetchStatus",
  initialState: {
    // status: "loading",
    status: "fulfilled",
    error: null,
    data: [],
    log: null,
  },
  reducers: {
    editError: {
      prepare: (val) => ({ payload: val }),
      reducer: (state: IfetchStatus, action: IpayloadString) => {
        console.log("...reducer editError");

        state.error = action.payload;
      },
    },
    resetEditError: (state: IfetchStatus) => {
      console.log("...reducer resetEditError");

      state.error = null;
    },
    logOut: (state: IfetchStatus) => {
      console.log("...reducer logOut");

      state.log = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactsFromServer.fulfilled, fulfilledFuncToGetContacts)
      .addCase(delContactFromServer.fulfilled, fulfilledFuncToGetContacts)
      .addCase(newContactForServer.fulfilled, fulfilledFuncToGetContacts)
      .addCase(editContactAtServer.fulfilled, fulfilledFuncToGetContacts)
      .addCase(logIn.fulfilled, fulfilledFuncTolog)
      .addMatcher((action) => action.type.includes("pending"), pendingFunc)
      .addMatcher((action) => action.type.includes("rejected"), rejectedFunc);
    // .addMatcher(
    // 	(action) => action.type.includes("fulfilled"),
    // 	fulfilledFunc
    // )
  },
});

export const fetchActions = {
  editError,
  resetEditError,
  logOut,
};