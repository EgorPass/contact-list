import React, {useContext} from "react"

import SearchForm from "../../searchForm/SearchForm"
import Nav from "../nav/Nav"
import ContextData from "../../../ContextData"

import {IcontextForSearchForm} from "../../../typesDescriptions"

const Menu: React.FC = () => {

	const {
				searchButton, 
				logOutButton, 
				createNewContact, 
				handleChangeInput,
				handleSearch,
								} = useContext(ContextData)  as IcontextForSearchForm
	
	return (
				<div className = "contacts_headerMenu">
					<div
						onClick = {createNewContact} 
						className = "contacts_createNewContact"
					>
						Новый контакт
					</div>

					<SearchForm 
						changeField = {handleChangeInput}
						searchContact = {searchButton}
						onKeyEnter = {handleSearch}
					/>

					<Nav logOutButton = {logOutButton} />
				</div>
	)
} 

export default Menu