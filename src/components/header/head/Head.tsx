import React from "react";

const Head: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
	console.log("...rendering Head")
  return <h2 className="header__title">{!isAuth ? "Добро пожаловать" : ""}</h2>;
};

// React.memo исключает повторный рендеринг
// export default React.memo(Head)
export default Head;

