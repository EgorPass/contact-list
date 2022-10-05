import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { 
					Icontact, 
					IeditContactAtServer,
					IoptionsForAsyncThunk,
					IasyncReturnArrayContactsOrVoid,
																				} from "../typesDescriptions"

axios.defaults.baseURL = `http://localhost:3001/`

export const delContactFromServer = createAsyncThunk<IasyncReturnArrayContactsOrVoid, number, IoptionsForAsyncThunk >(
	"contacts/delContactFromServer",
	async function (id, { rejectWithValue }){
		try
		{		
				console.log("...async action - delContactFromServer")
				const res = await axios.delete(`contact/${id}`)
					if(res.statusText !== "OK") throw new Error ("Oops")
				
				const contacts = await axios.get("contact")
					if(contacts.statusText !== "OK") throw new Error ("Oops")
				return contacts.data
		} 
		catch(e ) {
				if(e instanceof Error)
					return rejectWithValue(e.message)
		}
	}
)

export const newContactForServer = createAsyncThunk< IasyncReturnArrayContactsOrVoid, Icontact, IoptionsForAsyncThunk> (
	"contacts/newContactForServer",
	async function ( obj, { rejectWithValue }) {
		try
		{
				console.log("...async action - newContactForServer");
				const res = await axios.post("contact/",  obj )
					if(res.statusText !== "Created") throw new Error ("Oops")

				const contacts = await axios.get("contact")
					if(contacts.statusText !== "OK") throw new Error ("Oops")
				return contacts.data
		} 
		catch (e) {
				if(e instanceof Error)
					return rejectWithValue(e.message)
		}
	}
)

export const getContactsFromServer = createAsyncThunk< IasyncReturnArrayContactsOrVoid, string, IoptionsForAsyncThunk > (
	"contacts/getContactsFromServer",
	async function (str = "", { rejectWithValue }) {
		const param =  encodeURIComponent(str)
		const url =  str ? `contact?q=${param}` : "contact";
		try
		{
				console.log("...async action - getContactsFromServer");
				const res = await axios.get(url)
					if(res.statusText !== "OK") throw new Error ("Oops")
				return res.data;
		} 
		catch (e) {
				if(e instanceof Error)
					return rejectWithValue(e.message)
		}
	}
)

export const editContactAtServer = createAsyncThunk<IasyncReturnArrayContactsOrVoid, IeditContactAtServer, IoptionsForAsyncThunk> (
	"contacts/editContactAtServer",
	async function ( {id = 0, obj = {}} , { rejectWithValue }) {
		try
		{
				console.log("...async action - editContactAtServer");
				const res = await axios.put(`contact/${id}`, obj)
					if(res.statusText !== "OK") throw new Error ("Oops")

				const contacts = await axios.get("contact")
					if(contacts.statusText !== "OK") throw new Error ("Oops")
				
				return contacts.data
		} 
		catch (e) {
				if(e instanceof Error)
					return rejectWithValue(e.message)
		}
	}
)
