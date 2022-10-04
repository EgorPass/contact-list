import React from "react";

const Menu: React.FC<{ createNewContact: () => void }> = ({
  createNewContact,
}) => (
  <div onClick={createNewContact} className="headerOptions__buttons">
    Новый контакт
  </div>
);

export default Menu;
