const Head: React.FC<{isAuth: boolean}> = ({isAuth}) =>  (
	<h2 className = "contacts_head">{!isAuth ? "Добро пожаловать" : ""}</h2>
)

export default Head