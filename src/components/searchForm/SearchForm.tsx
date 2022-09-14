import React from "react"
import { useHookSelector } from "../../redux/hookStore"
import InputField from "../inputField/InputField"
import ButtonAcceptCancel from '../buttons/ButtonAcceptCancel'

import { ISearchForm  } from "../../typesDescriptions"

const SearchForm: React.FC<ISearchForm> = ({ changeField, searchContact, onKeyEnter }) => {
	

	const {searching} = useHookSelector(state=>state)
	
	return (
		<div className = "contacts_search"> 

			<InputField 
				type = "search"
				name = "search"
				value = { searching }
				autofocus = {true}
				changeFunc =  {changeField} 
				onKeyEnter = {onKeyEnter}
				className = "contacts_searchInput"
			/>
			
			<ButtonAcceptCancel 
				type = "submit" 
				name = "start" 
				value = "&#10550;"
				className = ""
				clickFunc = {(e)=> {e.preventDefault(); searchContact(searching)}}
			/>

		</div>
	)
}

export default SearchForm