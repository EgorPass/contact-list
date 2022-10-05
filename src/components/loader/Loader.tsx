import  { Oval } from "react-loader-spinner"

const Loader = () => (
		<div className = "body__loader">
			<div className = "loader__loaderPosition">
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
				<h1 className = "loader__loaderText">Loading...</h1>
			</div>
		</div>
)

export default Loader