import { 
				IcheckField, IcheckString, 
				IclassToInput, IchangeClassAtInputs, 
				IcheckFieldsForAccept,
			} from "../typesDescriptions"

function useSyntaxisCheck () {
	const checkName: IcheckString = (value) => (( value.length < 3 ) ? false : true);
	const checkTel: IcheckString = (value) => value ? /^[\d\+][\d\(\)\ -]{4,14}\d$/gi.test(value) : false; 
	const checkEmail: IcheckString = (value) => value ? /^\w+?\.??\w*?@\w+?\.??\w*?\.\w{2,}$/i.test(value) : false;

	const checkField: IcheckField = (value, nameInput) => {
		switch(nameInput) {
			case "name": return checkName(value)
			case "sur": return checkName(value) 
			case "email":	return checkEmail(value)
			case "tel":	return checkTel(value)
			default: return true; 
		}
	}

	const classToInput: IclassToInput = (target, cool) => {
		if (!cool) target.classList.add("body__errorInput")		
		else if( target.classList.contains("body__errorInput") ) target.classList.remove("body__errorInput")
	}

	const changeClassAtInputs: IchangeClassAtInputs = (target, value, nameInput) => {
		if (value.length)	classToInput(target, checkField(value, nameInput)) 
		else classToInput(target, true);
	}

	const checkFieldsForAccept: IcheckFieldsForAccept = (obj) => {
		if( !(!!obj.name || !!obj.sur) || !(!!obj.tel || !!obj.email) ) return true
		if (
      Object.entries(obj)
        .map(([key, value]: [string, string]): boolean =>
          value.length > 0 ? checkField(value, key) : true
			)
				.includes(false)
    )	return true;
		
		return false
	}
	
	return {
		changeClassAtInputs,
		checkFieldsForAccept,
	}
}

export default useSyntaxisCheck