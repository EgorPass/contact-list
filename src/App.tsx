import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom"
import ContextData from "./ContextData"
import { useCreateContext }  from "./usersHooks/useCreateContext";

import { useHookSelector } from "./redux/hookStore"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import CreateContact from "./components/createContact/CreateContact"
import ContactsList from "./components/contacts/contactsList/ContactsList"
import LoginForm from "./components/login/LoginForm"
import ErrorField from "./components/errorField/ErrorField"
import Loader from "./components/loader/Loader"

function App() {
  const {   
            newContact,   editContact,  
            fetchStatus,  
	} = useHookSelector(state => state)
	
	
	
	const navigate = useNavigate();
	
	useEffect(
		() => {
					if(fetchStatus.log) navigate("/contact");	
		},
		[fetchStatus.log]
	);
	
	// console.log(fetchStatus)
	
	const state = useHookSelector(state => state)
	// console.log(state)
  
	const context = useCreateContext();
	return (
    <article className="contacts">
      <ContextData.Provider value={context}>
				<Header isAuth={!!fetchStatus.log} />

        <section className="contacts__body body">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/contact" element={<ContactsList />} />
          </Routes>

          {!!fetchStatus.log && editContact && (
            <CreateContact
              title={
                newContact ? "Создание контакта" : "Редактирование контакта"
              }
            />
          )}

          {fetchStatus.status === "pending" && <Loader />}
          {fetchStatus.error && <ErrorField error={fetchStatus.error} />}
        </section>

        <Footer />
      </ContextData.Provider>
    </article>
  );
}

export default App;
