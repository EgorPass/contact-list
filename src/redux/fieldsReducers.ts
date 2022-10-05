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
    setIdForEditField: (state, action: IpayloadNumber) => {
      console.log("...action & reducer setIdForEditField");
      return action.payload;
    },
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
      prepare: (value) => {
        console.log("...action changeSearchField");

        return { payload: value };
      },
      reducer: (state, action: IpayloadString) => {
        console.log("...reducer changeSearchField");

        return action.payload;
      },
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
      prepare: (value) => {
        console.log("...action addLoginForChangeForm");
        return { payload: value };
      },
      reducer: (state, action: IpayloadString) => {
        console.log("...reducer addLoginForChangeForm");

        state.login = action.payload;
      },
    },
    addPasswordForChangeForm: {
      prepare: (value) => {
        console.log("...action addPasswordForChangeForm");

        return { payload: value };
      },
      reducer: (state, action: IpayloadString) => {
        console.log("...reducer addPasswordForChangeForm");
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
      prepare: (value) => {
        console.log("...action addNameForChangeContact");

        return { payload: value };
      },
      reducer: (state, action: IpayloadString) => {
        console.log("...reducer addNameForChangeContact");

        state.name = action.payload;
      },
    },
    addSurForChangeContact: {
      prepare: (value) => {
        console.log("...action addSurForChangeContact");

        return { payload: value };
      },
      reducer: (state, action: IpayloadString) => {
        console.log("...reducer addSurForChangeContact");

        state.sur = action.payload;
      },
    },
    addEmailForChangeContact: {
      prepare: (value) => {
        console.log("...action addEmailForChangeContact");

        return { payload: value };
      },
      reducer: (state, action: IpayloadString) => {
        console.log("...reducer addEmailForChangeContact");

        state.email = action.payload;
      },
    },
    addTelForChangeContact: {
      prepare: (value) => {
        console.log("...action addTelForChangeContact");

        return { payload: value };
      },
      reducer: (state, action: IpayloadString) => {
        console.log("...reducer addTelForChangeContact");

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
