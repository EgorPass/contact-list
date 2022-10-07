import React, { useContext, useEffect, useLayoutEffect } from "react";
import ContextData from "../../../ContextData";
import { useNavigate } from "react-router-dom";
import Contact from ".././contact/Contact";
import { useHookSelector } from "../../../redux/hookStore";
import { IcontactList , Icontact} from "../../../typesDescriptions";

const ContactsList = () => {
	const { fetchStatus } = useHookSelector(
    (state) => state
	)
	const { data: contacts = [], log } = fetchStatus;

  const { getContactsFromServer } = useContext(
    ContextData
  ) as IcontactList;
  const navigate = useNavigate();

  useEffect(() => {
    if (!log) navigate("/", { replace: true });
    console.log("...get contacts in useEffect at ContactsList");
    getContactsFromServer();
  }, [log]);

  console.log("...compouse contactList");
  return (
    <ul className="body__listsItems">
      {contacts.length > 0 && contacts.map((it: Icontact) => {
        console.log("...create ListItem in ContactsLists");
        return (
          <li key={it.id} className="body__contactList">
            <Contact data={it} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
