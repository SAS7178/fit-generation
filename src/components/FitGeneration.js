import { Route, Routes } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { GenerateWorkoutForm } from "./workouts/GenerateWorkoutForm"
import { Profile } from "./profile/Profile"
import { WelcomePage } from "./welcome/WelcomePage"
import { WelcomeFooter } from "./welcome/WelcomeFooter"
import { Exercise } from "./exercise/Exercise"

export const FitGeneration = () => {
	return <Routes>
		
		<Route path="/" element={
				<>
					<NavBar />
					<WelcomePage />
					<WelcomeFooter />
				</>
		} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/generateWorkout" element={<GenerateWorkoutForm />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/exercise/:customerId" element={<Exercise />} />
	</Routes>
}

