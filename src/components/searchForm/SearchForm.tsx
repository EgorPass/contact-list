import React from "react"
import { useHookSelector } from "../../redux/hookStore"
import InputField from "../inputField/InputField"
import ButtonAcceptCancel from '../buttons/ButtonAcceptCancel'

import { ISearchForm  } from "../../typesDescriptions"

const SearchForm: React.FC<ISearchForm> = ({ changeField, searchContact, onKeyEnter }) => {
	

	const {searching} = useHookSelector(state=>state)
	
	return (
		<div className = "options__search search"> 

			<InputField 
				type = "search"
				name = "search"
				value = { searching }
				autofocus = {true}
				changeFunc =  {changeField} 
				onKeyEnter = {onKeyEnter}
				className="search__input"
				placeholder = "Поиск"
			/>
			
			<ButtonAcceptCancel 
				type = "submit" 
				name = "start" 
				value = "&#10550;"
				className = "search__buttons"
				clickFunc = {(e)=> {e.preventDefault(); searchContact(searching)}}
			/>

		</div>
	)
}

export default SearchForm