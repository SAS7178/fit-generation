import { useEffect, useState } from "react"
import { ExerciseEdit } from "./ExerciseEdit"

export const ExerciseList = ({ searchTermState }) => {
    const [exercises, setExercises] = useState([])
    const [filteredExercises, setFiltered] = useState([])

    useEffect(
        () => {
            const searchedExercises = exercises.filter(exercise => exercise.name.startsWith(searchTermState))
            setFiltered(searchedExercises)
        },
        [searchTermState, exercises]
    )

    useEffect(
        () => {
            // fetch(`https://glitch.com/edit/#!/fitgeneration-api/exercises`)
            fetch(`https://glitch.com/edit/#!/fitgeneration-api/exercises`)
                .then(response => response.json())
                .then((data) => {
                    setExercises(data)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )
    const getAllExercises = () => {
        // fetch(`https://glitch.com/edit/#!/fitgeneration-api/Exercises`)
        fetch(`https://glitch.com/edit/#!/fitgeneration-api/exercises`)
            .then(response => response.json())
            .then((ticketArray) => {
                setExercises(ticketArray)
            })
    }

    return <>
        <article className="tickets">

            {filteredExercises.map(
                (exercise) =>
                    <ExerciseEdit key={`exercise--${exercise.id}`}
                        getAllExercises={getAllExercises}
                        exerciseObject={exercise}
                    />
            )
            }
        </article>
    </>
}