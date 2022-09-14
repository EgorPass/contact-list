import React from "react"
import  { Oval } from "react-loader-spinner"
import "./loader.css"

const Loader = () => (
		<div className = "contacts_loader">
			<div className = "contacts_loaderPosition">
				<Oval
			    height={80}
			    width={80}
			    color="#4fa94d"
			    wrapperStyle={{}}
			    wrapperClass=""
			    visible={true}
			    ariaLabel='oval-loading'
			    secondaryColor="#4fa94d"
			    strokeWidth={2}
			    strokeWidthSecondary={2}
			  
			  /> 
				<h1 className = "contacts_loaderText">Loading...</h1>
			</div>
		</div>
)

export default Loader