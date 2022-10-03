import { useHookDispatch } from './hookStore';
import { bindActionCreators } from 'redux';
import * as contactActons from "./contactsReducers"
import { fetchActions } from "./fetchReducers";
import { fieldsActions } from "./fieldsReducers"	
import * as loginActions from "./loginActions"
import { stateActions } from "./stateReducers"

export const useActionsOfContacts = () => {
  const dispatch = useHookDispatch();
  return bindActionCreators(contactActons, dispatch);
};

export const useActionsOffetchReducers = () => {
	const dispatch = useHookDispatch();
	return bindActionCreators(fetchActions, dispatch);
}

export const useActionsOfFields = () => {
  const dispatch = useHookDispatch();
  return bindActionCreators(fieldsActions, dispatch);
};

export const useActionsOfLogin = () => {
  const dispatch = useHookDispatch();
  return bindActionCreators(loginActions, dispatch);
}

export const useActionsOfState = () => {
  const dispatch = useHookDispatch();
  return bindActionCreators(stateActions, dispatch);
};
