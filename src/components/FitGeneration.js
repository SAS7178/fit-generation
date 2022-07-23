import { Route, Routes } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
//import { ApplicationViews } from "./views/ApplicationViews"



export const FitGeneration = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		
		<Route path="*" element={
				<>
					<NavBar />
					{/* <ApplicationViews /> */}
				</>
		} />
	</Routes>
}

