import { createSlice } from "@reduxjs/toolkit";

export const {
  actions: { setStatusEdit },
  reducer: editContact,
} = createSlice({
  name: "editContact",
  initialState: false,
  reducers: {
    setStatusEdit: (state) => (state = !state),
  },
});

export const {
  actions: { setNewContact },
  reducer: newContact,
} = createSlice({
  name: "newContact",
  initialState: false,
  reducers: {
    setNewContact: (state) => (state = !state),
  },
});

export const {
  actions: { changeFieldLogin, changeFieldReg },
  reducer: changeField,
} = createSlice({
  name: "changeField",
  initialState: "login",
  reducers: {
    changeFieldLogin: (state) => "reg",
    changeFieldReg: (state) => "login",
  },
});

export const stateActions = {
  setStatusEdit,
  setNewContact,
  changeFieldLogin,
  changeFieldReg,
};
