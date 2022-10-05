import { createSlice } from "@reduxjs/toolkit";

export const {
  actions: { setStatusEdit },
  reducer: editContact,
} = createSlice({
  name: "editContact",
  initialState: false,
	reducers: {
		setStatusEdit: (state) => {
			console.log("...action & reducer setStatusEdit");
			
			return state = !state
	},
  },
});

export const {
  actions: { setNewContact },
  reducer: newContact,
} = createSlice({
  name: "newContact",
  initialState: false,
  reducers: {
		setNewContact: (state) => {
			console.log("...action & reducer setNewContact");

			return state = !state
		},
  },
});

export const {
  actions: { changeFieldLogin, changeFieldReg },
  reducer: changeField,
} = createSlice({
  name: "changeField",
  initialState: "login",
  reducers: {
		changeFieldLogin: (state) => {
			console.log("...action & reducer changeFieldLogin");
			return "reg"
		},
		changeFieldReg: (state) => {
			console.log("...action & reducer changeFieldReg");
			
			return "login"
		},
  },
});

export const stateActions = {
  setStatusEdit,
  setNewContact,
  changeFieldLogin,
  changeFieldReg,
};
