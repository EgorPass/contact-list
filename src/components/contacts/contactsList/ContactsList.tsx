import React, {useContext, useEffect} from "react"
import ContextData from "../../../ContextData"
import {useNavigate} from "react-router-dom"
import Contact from ".././contact/Contact"

import { IcontactList } from "../../../typesDescriptions"

const ContactsList = () => {

	const { contacts, getContactsFromServer, isAuth } = useContext(ContextData) as IcontactList;
	const navigate = useNavigate();
	
	useEffect( ()=> {
  	if(!isAuth) navigate("/", {replace: true,})
		 getContactsFromServer() 	
  }, [])
    
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