import React from 'react';
import { Route, Routes } from "react-router-dom"
import  ContextData  from "./ContextData"
import { useEdit } from "./usersHooks/useEdit"
import { useLogin } from "./usersHooks/useLogin"
import { useHookSelector, useHookDispatch } from "./redux/hookStore"

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
            fetchStatus,  isAuth, 
                                                } = useHookSelector( state => state)
  const { 
          loginButton,  regButton, logOutButton,
          handleChangeLogin,  changeLoginToReg,
                                                } = useLogin()
  const { 
          contacts,           
          searchButton,
          createNewContact,
          editButton,    copyButton,     removeButton,    
          acceptButton,  cancelButton,    closeButton,
          handleChangeInput,  
          handleSearch,
          getContactsFromServer,
                                                } = useEdit() 
  const context = { 
                    isAuth,
                    contacts,
                    searchButton,
                    createNewContact,  
                    editButton,   copyButton,   removeButton,
                    acceptButton,   cancelButton,   closeButton,   
                    handleChangeInput,
                    handleSearch,
                    getContactsFromServer,
                    handleChangeLogin, 
                    regButton,          loginButton,
                    changeLoginToReg,   logOutButton,
                                                          }

  return (
      <article className = "contacts_container">
        <ContextData.Provider value = { context } >
          
          <Header isAuth = {isAuth}/>
          
          <section className = "contacts_body">        

            <Routes>
              <Route path = "/" element = { <LoginForm /> } />  
              <Route path =  "/contact"  element = { <ContactsList /> } />
            </Routes>

            {isAuth && editContact && <CreateContact title = {newContact ? "Создание контакта" : "Редактирование контакта" }/> }
              
            { fetchStatus.status === "pending" && <Loader /> }
            { fetchStatus.error && <ErrorField error = {fetchStatus.error}/>}

          </section>
                  
          <Footer />

        </ContextData.Provider>
      </article>  

    
  );
}

export default App;
