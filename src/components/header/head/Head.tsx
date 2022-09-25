const Head: React.FC<{isAuth: boolean}> = ({isAuth}) =>  (
	<h2 className = "header__title">{!isAuth ? "Добро пожаловать" : ""}</h2>
)

export default Head