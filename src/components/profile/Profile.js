import { Link } from "react-router-dom"
import "./Profile.css"
export const Profile = () => {

    return (
        <>
        <div className="profile__nav">
        <Link className="navbar__link" to="/">Home</Link>
       
        
        <Link className="navbar__link" to="/generateWorkout">Generate New Workout</Link>
        </div>
    <div>Welcome to your profile!</div>
    </>
    )
}