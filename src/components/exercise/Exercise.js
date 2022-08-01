import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, useNavigate, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import "./Exercise.css"

// func to find all customerWorkouts then most recent generated customerWorkout in database and set
// objects to vars  
export const Exercise = () => {
    const { customerId } = useParams()
    const [workoutName, set] = useState("")
    const [exercises, setExercises] = useState([])
    const [filteredExercises, setFilteredExercises] = useState([])
    const [latestWorkout, setLatest] = useState({})
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/exercises`)
                .then(response => response.json())
                .then((data) => {
                    setExercises(data)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )
    useEffect(
        () => {
            fetch(`http://localhost:8088/customerWorkouts?customerId=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    const workoutLength = data.length - 1
                    const singleWorkout = data[workoutLength]
                    setLatest(singleWorkout)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            let filteredExercises = exercises.filter(
                (exercise) =>
                    latestWorkout.goalId == exercise.goalId
                // && latestWorkout.muscleId == exercise.muscleId
            )
            setFilteredExercises(filteredExercises)
        },
        [latestWorkout] // When this array is empty, you are observing initial component state
    )
    //gets current app customer sets to var
    const localFitCustomer = localStorage.getItem("fit_customer")
    const fitCustomerObject = JSON.parse(localFitCustomer)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        // TODO: Create the object to be saved to the API
        const workoutToSendToApi = {
            customerId: fitCustomerObject.id,
            workoutName: workoutName,
            exercises: filteredExercises,
            //   goalId: customerWorkout.goalId,
            //   muscleId: customerWorkout.muscleId,
            dateCompleted: new Date
        }

        return fetch(`http://localhost:8088/workoutExercises`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutToSendToApi)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/profile/${fitCustomerObject.id}`)

            })

    }

    // fetches and set all exercises to var to make available for iteration globally
    return (
        <>
            <div className='generator__nav'>
                <nav>
                    <Link className="navbar__link" to="/">Home</Link>
                </nav>
                <nav>
                    <Link className="navbar__link" to="/profile/:customerId">Profile</Link>
                </nav>
            </div>
            <div className='welcome__header'>
                <h1> Fit Generation </h1>
                <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
            </div>
            <h2 className="workout"><b>Workout</b></h2>
            <div className="workout__exercises">
                <ul>
                    {filteredExercises.map(exercise => <li className="w__e" key="{exerciseId}">
                        <strong>{exercise.name}</strong>&nbsp;<br />
                        sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
                        reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
                        rest time:&nbsp;{exercise.rest}<br />
                       <a href={exercise.exampleVid}> <Button className="exercise__link" 
                        >Watch tutorial</Button></a>
                    </li>)}
                </ul>
            </div>
            <fieldset></fieldset>
            <h3>MyWorkout</h3>
            <input type="name"
                value={workoutName}
                onChange={evt => set(evt.target.value)}
                className="form-control"
                placeholder="Name..."
                required autoFocus />
            <div>
                <Button outline onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                    className="save-primary">
                    Save to MyWorkouts List
                </Button>
            </div>
        </>
    )
}