import React from "react";

const Menu: React.FC<{ createNewContact: () => void }> = ({
  createNewContact,
}) => {

	console.log("...rendering Menu");

	return (
		<div onClick={createNewContact} className="headerOptions__buttons">
			Новый контакт
		</div>
	);
}

// export default React.memo(Menu)
export default Menu;
