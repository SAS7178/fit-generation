export const ExerciseSearch = ({setterFunction}) => {
    return (

       <div className="search" >
           <input className="search" 
           onChange={
               (changeEvent) => {
                   setterFunction(changeEvent.target.value)
               }
           }
            type="text" placeholder="Search for Exercise" />
       </div>
        
    )
}