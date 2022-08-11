import { Link } from "react-router-dom"

export const ExerciseEdit = ({ exerciseObject, getAllTickets }) => {

    //function that updates the ticket with a new date completed
    return <>
    <Link className="searchDrop" to={`/exerciseWatch/${exerciseObject.id}`}>&nbsp;&nbsp;&nbsp;View</Link>
    <section>{getAllTickets}</section>
    <section>{exerciseObject.name}</section>
   </>
}