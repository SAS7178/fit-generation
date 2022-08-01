// import { click } from "@testing-library/user-event/dist/click"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./Exercise.css"

export const ExerciseView = () => {
    const { workoutId } = useParams()
    const [workout, setWorkout] = useState({})
    // const shownWorkout = Number(workoutId)
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/workoutExercises?id=${workoutId}`)
            .then(response => response.json())
            .then((data) => {
                const singleWorkout = data[0]
                setWorkout(singleWorkout)
            })
        },
        [workoutId] // When this array is empty, you are observing initial component state
        )
        // const getExercises = () => {
        //  return workout.exercises.map(exercise => ({ ...exercise }))
        // }
        // const exercises = getExercises()
    //export function of each array mapped to access each object  key:values  
       const thisWorkout = () => {
          console.log(workout)
          let str = null
         str = JSON.stringify(workout.exercises)
        console.log(str)
        //str.forEach(() => (exercise){ $('tbody').append('<tr>,<td>'+ exercise.name + '</td><td>'
        //+ exercise["sets"]+'</td><td>' + exercise.reps+'</td></tr>')

        //})
        }
    //             exercises.map((exercise) => {
    //                 return <ul>
    //                     <li key="exercise--{exercise.id}">
    //                         <strong>{exercise.name}</strong>&nbsp;<br />
    //                         sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
    //                         reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
    //                         rest time:&nbsp;{exercise.rest}<br />
    //                         <button className="exercise__link"
    //                         >Watch tutorial</button>
    //                     </li>
    //                 </ul>
    //             })}  
            
    // const workoutName = () => {
          
    //             <>{workout.exercises.map((exercise) => {
    //                 return <ul>
    //                     <li key="exercise--{exercise.id}">
    //                         <strong>{exercise.name}</strong>&nbsp;<br />
    //                         sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
    //                         reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
    //                         rest time:&nbsp;{exercise.rest}<br />
    //                         <button className="exercise__link"
    //                         >Watch tutorial</button>
    //                     </li>
    //                 </ul>
    //             })}  </>
    //         }
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
            <>
                <h2 className="workout"><b>MyWorkout</b></h2>
                <div className="workout__exercises">
{/* 
                    {workoutName()} */}
                    {thisWorkout()}
                    
{/* 
                    <div className="workout__exercises">
                        <ul>
                            {workoutExercises.map(workout => {
                                if (workout.id === shownWorkout) {
                                    workout.exercises.map((exercise) => {
                                        return <li className="w__e" key="{exercise.id}">
                                            <strong>{exercise.name}</strong>&nbsp;<br />
                                            sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
                                            reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
                                            rest time:&nbsp;{exercise.rest}<br />
                                            <button className="exercise__link"
                                            >Watch tutorial</button>
                                        </li>
                                    })
                                }
                            })}
                        </ul>
                    </div> */}
                </div></>
        </>
    )
}

