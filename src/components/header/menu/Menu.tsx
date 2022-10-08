import React from "react";

const Menu: React.FC<{ createNewContact: () => void }> = ({
  createNewContact,
}) => {

	console.log("...rendering Menu");

	return (
		<div onClick={createNewContact} className="headerOptions__buttons" data-tooltip= "Нажмите, чтобы начать создавать нового контакта">
			Новый контакт
		</div>
	);
}

// export default React.memo(Menu)
export default Menu;
