import { 
				Ifields, IcheckField, IcheckString, 
				IclassToInput, IchangeClassAtInputs, 
				IcheckFieldsForAccept,
			} from "../typesDescriptions"

function useSyntaxisCheck () {
	const checkName: IcheckString = (value) => (( !value || value.length < 3 ) ? false : true);
	const checkTel: IcheckString = (value) => value ? /^[\d\+][\d\(\)\ -]{4,14}\d$/gi.test(value) : false; 
	const checkEmail: IcheckString = (value) => value ? /^\w+?\.??\w*?@\w+?\.??\w*?\.\w{2,}$/i.test(value) : false;


	const checkField: IcheckField = (obj, nameInput) => {
		
		// const arr: Array<[string, string]> = Object.entries(obj)


		switch(nameInput) {
			case "name":
				return checkName(obj[nameInput])

			case "sur": 
				return checkName(obj[nameInput]) 

			case "email":
				return checkEmail(obj[nameInput])
				
			case "tel":
				return checkTel(obj[nameInput])

			default: return false; 
		}
	}

	const classToInput: IclassToInput = (target, cool) => {
		if (!cool) {
				if( !target.classList.contains("error") ) target.classList.add("error")
			}
			else if( target.classList.contains("error") ) target.classList.remove("error")
	}

	const changeClassAtInputs: IchangeClassAtInputs = (target, obj, nameInput) => {
				classToInput(target,  checkField(obj, nameInput) ) 
	}

	const checkFieldsForAccept: IcheckFieldsForAccept = (obj) => {
		if( !(!!obj.name || !!obj.sur) || !(!!obj.tel || !!obj.email) ) return true
		if( Object.entries(obj)
					.map( ([key, value]: [string, string]): boolean => value.length > 0 ? checkField(obj, key) : true )
						.includes(false) 
															) return true;
		return false
	}
	
	return {
		changeClassAtInputs,
		checkFieldsForAccept,
	}
}

export default useSyntaxisCheck