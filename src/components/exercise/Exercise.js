import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, FormGroup } from "reactstrap"
import { WelcomeFooter } from "../welcome/WelcomeFooter"
import "./Exercise.css"

// func to find all customerWorkouts then most recent generated customerWorkout in database and set
// objects to vars  
export const Exercise = () => {
    const { customerId } = useParams()
    const [workoutName, set] = useState("")
    const [exercises, setExercises] = useState([])
    const [filteredExercises, setFilteredExercises] = useState([])
    const [latestCustomerWorkout, setLatest] = useState({})
    const [newWorkoutId, setId] = useState(null)
    const workoutId = Number(newWorkoutId)
    const navigate = useNavigate()

    //fetch exercises set to var
    useEffect(
        () => {
            // fetch(`https://git.heroku.com/fitgenapi.gitexercises`)
            fetch(`https://git.heroku.com/fitgenapi.gitexercises`)
                .then(response => response.json())
                .then((data) => {
                    setExercises(data)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )
    //fetch customerWorkouts set var to customersWorkouts with queried customerId last index
    useEffect(
        () => {
            // fetch(`https://git.heroku.com/fitgenapi.gitcustomerWorkouts?customerId=${customerId}`)
            fetch(`https://git.heroku.com/fitgenapi.gitcustomerWorkouts?customerId=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    const workoutLength = data.length - 1
                    const singleCustomerWorkout = data[workoutLength]
                    setLatest(singleCustomerWorkout)
                })
        },
        [customerId] // When this array is empty, you are observing initial component state
    )
    //fetch workouts and set workout id to next workout id that will made 
    useEffect(
        () => {
            // fetch(`https://git.heroku.com/fitgenapi.gitworkouts`)
            fetch(`https://git.heroku.com/fitgenapi.gitworkouts`)
                .then(response => response.json())
                .then((data) => {
                    const WObj = (data.slice(-1))
                    setId(WObj[0].id + 1)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )
    //use effect to watch latestcustomerworkout and set the filtered exercises to
    // var
    useEffect(
        () => {
            let filteredExercises = exercises.filter(
                (exercise) =>
                    latestCustomerWorkout?.goalId === exercise?.goalId
            )
            setFilteredExercises(filteredExercises)
        },
        [latestCustomerWorkout, exercises] // When this array is empty, you are observing initial component state
    )
    
    //post function for onclick of workout Exercise
    const handleAddExerciseClick = (exerciseId) => {

        // TODO: Create the object to be saved to the API
        const exerciseToSendToApi = {
            workoutId: workoutId,
            exerciseId: parseInt(exerciseId)
        }
        //post Object in this APi array
        // return fetch(`https://git.heroku.com/fitgenapi.gitworkoutExercises`, {
        return fetch(`https://git.heroku.com/fitgenapi.gitworkoutExercises`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exerciseToSendToApi)
        })
    }
    //func to map exercises info and tutorial button/add to workout butn
    const exerciseList = () => {
        return filteredExercises.map(exercise => {
            return <ul className="exerciseList" key={exercise.id}>
                <li className="w__e" key={exercise.id} type="checkbox">
                    <strong>{exercise.name}</strong>&nbsp;<br />
                    sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
                    reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
                    rest time:&nbsp;{exercise.rest}<br />
                    <a target="_blank" href={exercise.exampleVid} onClick="window.open(`popup`)">
                        <Button className="exercise__link"
                        >Video tutorial</Button></a>
                    
                    <FormGroup>
                        <button
                            onClick={() => handleAddExerciseClick(`${exercise.id}`)}
                            className="btn btn-primary">
                            Add to Workout
                        </button>
                    </FormGroup>
                </li>
            </ul>
        })

    }
    //gets current app customer sets to var
    const localFitCustomer = localStorage.getItem("fit_customer")
    const fitCustomerObject = JSON.parse(localFitCustomer)

    //func to post workout of saved workoutexercises on save btn click
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const date = new Date()
        // TODO: Create the object to be saved to the API
        const workoutToSendToApi = {
            customerId: fitCustomerObject.id,
            workoutName: workoutName,
            dateCompleted: date.toDateString()
        }

        // return fetch(`https://git.heroku.com/fitgenapi.gitworkouts`, {
        return fetch(`https://git.heroku.com/fitgenapi.gitworkouts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutToSendToApi)
        })
            .then(response => response.json())
            .then(() => {
                //navigates back to profile with render of new workout 
                //added to list passed customer id for useParam
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
            <section className="exHead">
                <div className='welcome__header'>
                    <h1> Fit Generation </h1>
                    <img alt="" className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
                </div>
                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
            </section>
            <section className="exHead">
                <div className="exercisePage">
                    {exerciseList()}
                </div>

                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
                <h2 className="workoutName"><b><i>~</i>Workout Name<i>~</i></b></h2>
                <fieldset className="nameText">
                    <input type="name"
                        value={workoutName}
                        onChange={evt => set(evt.target.value)}
                        className="form-control"
                        placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...Name This Workout..."
                        required autoFocus />
                    <div>
                        <Button outline onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                            className="save-workout">
                            Save to MyWorkouts List
                        </Button>
                    </div>
                </fieldset>
                <WelcomeFooter />
            </section>
        </>
    )
}