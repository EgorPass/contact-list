import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IpayloadString, IpayloadNumber } from "../typesDescriptions";

// так как поле вне видимости кнопки accept
export const {
  actions: { setIdForEditField },
  reducer: editId,
} = createSlice({
  name: "editId",
  initialState: 0,
  reducers: {
    setIdForEditField: (state, action: IpayloadNumber) => action.payload,
  },
});

export const {
  actions: { changeSearchField },
  reducer: searching,
} = createSlice({
  name: "searching",
  initialState: "",
  reducers: {
    changeSearchField: {
      prepare: (value) => ({ payload: value }),
      reducer: (state, action: IpayloadString) => action.payload,
    },
  },
});

// установка для поля input на регистрации и входа
export const {
  actions: { addLoginForChangeForm, addPasswordForChangeForm },
  reducer: changeLogin,
} = createSlice({
  name: "changeLogin",
  initialState: {
    login: "",
    password: "",
  },
  reducers: {
    addLoginForChangeForm: {
      prepare: (value) => ({ payload: value }),
      reducer: (state, action: IpayloadString) => {
        state.login = action.payload;
      },
    },
    addPasswordForChangeForm: {
      prepare: (value) => ({ payload: value }),
      reducer: (state, action: IpayloadString) => {
        state.password = action.payload;
      },
    },
  },
});

// //slice по наполнению временного поля создания или редактирования //
export const {
  actions: {
    addNameForChangeContact,
    addSurForChangeContact,
    addEmailForChangeContact,
    addTelForChangeContact,
  },
  reducer: changeContact,
} = createSlice({
  name: "changeContact",
  initialState: {
    name: "",
    sur: "",
    tel: "",
    email: "",
  },
  reducers: {
    addNameForChangeContact: {
      prepare: (value) => ({ payload: value }),
      reducer: (state, action: IpayloadString) => {
        state.name = action.payload;
      },
    },
    addSurForChangeContact: {
      prepare: (value) => ({ payload: value }),
      reducer: (state, action: IpayloadString) => {
        state.sur = action.payload;
      },
    },
    addEmailForChangeContact: {
      prepare: (value) => ({ payload: value }),
      reducer: (state, action: IpayloadString) => {
        state.email = action.payload;
      },
    },
    addTelForChangeContact: {
      prepare: (value) => ({ payload: value }),
      reducer: (state, action: IpayloadString) => {
        state.tel = action.payload;
      },
    },
  },
});

export const fieldsActions = {
  setIdForEditField,
  changeSearchField,
  addLoginForChangeForm,
  addPasswordForChangeForm,
  addNameForChangeContact,
  addSurForChangeContact,
  addEmailForChangeContact,
  addTelForChangeContact,
};
