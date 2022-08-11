import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import { WelcomeFooter } from "../welcome/WelcomeFooter"

export const ExerciseWatch = () => {
    const { exerciseId } = useParams()
    const [exercises, setExercises] = useState([])

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

  
    const singleExercise = () => {
            return exercises.map((exercise) => {
                if (exerciseId === exercise.id) {
                    return <li className="workout__exercise" key="exercise--{exercise.id}">
                        <strong>
                            {exercise.name}
                        </strong>
                        <br />
                        sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
                        reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
                        rest time:&nbsp;{exercise.rest}<br />
                        <a href={exercise.exampleVid}>
                            <Button className="exercise__link">Watch tutorial</Button>
                        </a>
                    </li>
                }
            })
        }
    

    return <>
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
                <img alt="" className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
            </div>
            {singleExercise()}
            <><br></br><br></br><br></br><br></br><br></br><br></br>
    <WelcomeFooter/>
    </>
    </>
    

    
}