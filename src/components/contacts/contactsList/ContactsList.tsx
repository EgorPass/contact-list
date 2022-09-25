import React, {useContext, useEffect} from "react"
import ContextData from "../../../ContextData"
import {useHookDispatch} from "../../../redux/hookStore"
import {useNavigate} from "react-router-dom"
import Contact from ".././contact/Contact"

import { IcontactList } from "../../../typesDescriptions"

const ContactsList = () => {

	const { contacts, getContactsFromServer, isAuth } = useContext(ContextData) as IcontactList;
	const navigate = useNavigate();
	const dispatch = useHookDispatch();
	
	useEffect( ()=> {
  	if(!isAuth) navigate("/", {replace: true,})
		dispatch( getContactsFromServer() )	
  }, [dispatch])
    
	return (
		<ul className = "body__listsItems">
			{
				contacts.map( it => (
						<li 
							key  = {it.id} 
							className = "body__contactList" 
						>
							<Contact data = {it}/>
						</li>
					)
				)
			}


		</ul>
	)
}

export default ContactsList