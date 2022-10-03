import {  createAction, createAsyncThunk } from "@reduxjs/toolkit"
// import { setAuth } from "./stateReducers"
import { 
					getAuth, 
					createUserWithEmailAndPassword, 
					signInWithEmailAndPassword,

																			} from "firebase/auth"

import { IasyncReturnArrayContactsOrVoid, ILoginRegin, IoptionsForAsyncThunk, IresFromLoginOrRegIn } from "../typesDescriptions"


export const logIn = createAsyncThunk<
  IasyncReturnArrayContactsOrVoid,
  ILoginRegin,
  IoptionsForAsyncThunk
>("fetchStatus/logIn", async function (obj, { rejectWithValue, dispatch }) {
  // dispatch(setAuth(false));

  const { login, password } = obj;
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      login,
      password
    );
    if (!userCredential) throw new Error();

    // dispatch(setAuth(true));

    const user = userCredential.user;
    return user.email as string;
  } catch (e) {
    if (e instanceof Error) {
      return rejectWithValue(e.message);
    }
  }
});

export const regIn = createAsyncThunk<
  IasyncReturnArrayContactsOrVoid,
  ILoginRegin,
  IoptionsForAsyncThunk
>(
  "fetchStatus/logIn",
  async function (obj: ILoginRegin, { rejectWithValue, dispatch }) {
    // dispatch(setAuth(false));

    const { login, password } = obj;
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        login,
        password
      );
      if (!userCredential) throw new Error();

      // dispatch(setAuth(true));

      const user = userCredential.user;

      return user.email as string;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);
