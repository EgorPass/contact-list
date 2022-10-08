import React, { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContextData, {
  ContextCreateContact,
  ContextHeader,
  ContextLogIn,
  ContextContactOptions,
} from "./ContextData";
import { useCreateContext } from "./usersHooks/useCreateContext";

import { useHookSelector } from "./redux/hookStore";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CreateContact from "./components/createContact/CreateContact";
import ContactsList from "./components/contacts/contactsList/ContactsList";
import LoginForm from "./components/login/LoginForm";
import ErrorField from "./components/errorField/ErrorField";
import Loader from "./components/loader/Loader";
import { useMouseEvents } from "./usersHooks/useMouseEvents";

function App() {
  const { newContact, editContact, fetchStatus } = useHookSelector(
    (state) => state
  );
  const state = useHookSelector((state) => state);
  const {
    context,
    logInContext,
    headerContext,
    createContactContext,
    contactOptionsContext,
  } = useCreateContext();
  const { tooltipEvent } =
    useMouseEvents();

  const tooltipBox = document.body.querySelector(".body__tooltipBox");
  useEffect(() => {
    window.addEventListener("mouseover", tooltipEvent);
    if (!!tooltipBox) tooltipBox.remove();
    return () => {
      window.removeEventListener("mouseover", tooltipEvent);
    };
  }, [tooltipBox]);

  console.log(state);
  // console.log(fetchStatus);

  return (
    <article className="contacts">
      <ContextHeader.Provider value={headerContext}>
        <Header />
      </ContextHeader.Provider>

      <section className="contacts__body body">
        <ContextLogIn.Provider value={logInContext}>
          <ContextData.Provider value={context}>
            <ContextContactOptions.Provider value={contactOptionsContext}>
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/contact" element={<ContactsList />} />
              </Routes>
            </ContextContactOptions.Provider>

            <ContextCreateContact.Provider value={createContactContext}>
              {!!fetchStatus.log && editContact && (
                <CreateContact
                  title={
                    newContact ? "Создание контакта" : "Редактирование контакта"
                  }
                />
              )}
            </ContextCreateContact.Provider>

            {fetchStatus.status === "pending" && <Loader />}
            {fetchStatus.error && <ErrorField error={fetchStatus.error} />}
          </ContextData.Provider>
        </ContextLogIn.Provider>
      </section>

      <Footer />
    </article>
  );
}

export default App;
