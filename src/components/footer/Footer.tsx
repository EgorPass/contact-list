import React from "react"

const Footer: React.FC = () => {
console.log("...rendering Footer")
	return (
		<footer className = "contacts__footer">
		<div>
			Пасюков Егор Александрович
		</div>
		<div>pegas1984.sd@gmail.com</div>
	</footer>
)
} 

// export default Footer;
export default React.memo(Footer)