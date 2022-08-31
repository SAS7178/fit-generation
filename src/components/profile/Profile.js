import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, FormGroup, FormText, Input, Label, Spinner, UncontrolledCarousel } from "reactstrap"
import { WelcomeFooter } from "../welcome/WelcomeFooter"
import "./Profile.css"

export const Profile = () => {
  const [workoutExercises, setworkoutExercises] = useState([])
  const [filteredWorkouts, setFilteredWorkouts] = useState([])
  const [customerObject, setCustomerObject] = useState("")
  const [customer, setCustomers] = useState({})
  const { customerId } = useParams()
  const navigate = useNavigate()
  const [customerProgress, update] = useState({
    customerId: 0,
    image: "",
    dateCompleted: new Date()
  })

  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)

  // fetches and set all workouts for cust sets to var to make available for iteration globally
  useEffect(
    () => {
      fetch(`http://localhost:8088/workouts`)
        .then(response => response.json())
        .then((data) => {
          setworkoutExercises(data)
        })
    },
    [customerId] // When this array is empty, you are observing initial component state
  )
  useEffect(
    () => {
      fetch(`http://localhost:8088/customers?id=${fitCustomerObject.id}`)
        .then(response => response.json())
        .then((data) => {
          setCustomers(data[0])
        })
    },
    [fitCustomerObject.id] // When this array is empty, you are observing initial component state
  )

  //set customer workoutExercises to var dep on workoutexercises change 
  useEffect(
    () => {
      let filteredWorkouts = workoutExercises.filter(
        (workout) =>
          fitCustomerObject.id === workout.customerId)
      setFilteredWorkouts(filteredWorkouts)
    },
    [workoutExercises, fitCustomerObject.id] // When this array is empty, you are observing initial component state
  )
  //funt to reerender all workouts to be used where needed
  const getAllWorkouts = () => {
    fetch(`http://localhost:8088/workouts`)
      .then(response => response.json())
      .then((workoutArray) => {
        setworkoutExercises(workoutArray)
      })
  }
  //func to delete workout from database if has wworkoutid
  const deleteButton = (workoutId) => {
    fetch(`http://localhost:8088/workouts/${workoutId}`, {
      method: "DELETE"
    })
      .then(() => { getAllWorkouts() })

  }

  const handleUpdateButtonClick = (event) => {
    event.preventDefault()
    const workoutToSendToApi = {
      customerId: fitCustomerObject.id,
      // image needs to be converted to a blob
      image: customerProgress.image,
      dateCompleted: new Date()
    }
  
// const blob = new Blob([JSON.stringify(workoutToSendToApi, null, 2)], {type : 'application/json'});

    return fetch(`http://localhost:8088/customerProgress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workoutToSendToApi)
    })
  }

  useEffect(
    () => {
      fetch(`http://localhost:8088/customerProgress?customerId=${fitCustomerObject.id}`)
        .then(response => response.json())
        .then((data) => {
          let length = data.length - 1
          let cust = data[length]
          setCustomerObject(cust.image)
        })
    },
    [customerProgress] // When this array is empty, you are observing initial component state
  )

  
  return (
    <article className="background">
      <div className="profile__nav">
        <Link className="navbar__home" to="/"><b>Home</b></Link>
        <Link className="navbar__generate" to="/generateWorkout"><b>Generation Form </b></Link>
      </div>
      <div className='welcome__header'>
        <h1 className="tit"> Fit Generation </h1>
        <img alt="" className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
      </div>
      <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
      <div className="topPro">
        <div className="top-half">
          <section className="welcomebtn">
            <div className="welcome-msg" >
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Welcome back,</b>
              <div className="customer-name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>{customer.name}</b></div><br></br><br></br><br></br><br></br><br></br>
            </div>
            <FormGroup className="fileLoad">
              <Label for="exampleFile"></Label>
              &nbsp;&nbsp;
              {/* ///////////////////////////////////////////////// */}
              <Input type="file"
                id="addImage"
                className="addImage"
                value={customerProgress.image}
                onChange={
                  //take current obj value and update with user selected value
                  (evt) => {
                    const copy = { ...customerProgress }
                     copy.image = [JSON.stringify(evt.target.value)]
                    update(copy)
                  }
                } />
                {/* ////////////////////////////////////////////// */}
              <button
                onClick={(clickEvent) => handleUpdateButtonClick(clickEvent)}
                className="btn-UpdateImage">
                Update
              </button>
              <FormText>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>..Track your Gainz..</b>
              </FormText>
            </FormGroup>
          </section>
          {/* uploaded customer image returned to page */}
          <img className="profileObject" alt="" src={`${customerObject}`} />
        </div>
      </div>
      <div className="card__Element">
      </div>
      <div className="max">
        <div className="seperation-pro"></div>
        <div className="edu-zone"><b> &nbsp;&nbsp;(Education Zone)&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Tools)</b>
        </div>
        <section className="understandMax">
          <div className="tableLine">
            <img alt="" className='fit__logo' src="/2E5049CB-BAED-4DAC-97C5-065C0E195D5E_4_5005_c.jpeg" width="200" height="100" ></img>
            <div className="edu">
              <Button outline onClick={() => { window.open(URL = "https://cdn.jwplayer.com/previews/tsMR14Nv") }}
                className="max-link">
                OneRep Max
              </Button>
              <Button outline onClick={() => { window.open(URL = "https://youtu.be/PNeLRc3b3C8") }}
                className="max-link">
                InLine Body Scan
              </Button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="tools">
              <Button outline onClick={() => { window.open(URL = "https://www.nasm.org/resources/one-rep-max-calculator") }}
                className="max-link">
                Max Calculator
              </Button>
              <Button outline onClick={() => { window.open(URL = "https://www.calculator.net/bmi-calculator.html") }}
                className="max-link">
                BMI Calculator
              </Button>
            </div>

          </div>
        </section>
        <Button className="generateNew" onClick={() => { navigate("/GenerateWorkout") }}>
          <Spinner
            color="primary"
            size="sm"
          >
            Loading...
          </Spinner>&nbsp;&nbsp;&nbsp;
          <b>Generate New Workout </b>
        </Button>
        <div className="seperation-pro"></div>
        <UncontrolledCarousel className="carousel"
          items={[

            {
              altText: 'Learn about Crossfit',
              caption: 'Get into Crossfit!',
              key: 1,
              src: 'https://assets.website-files.com/6233518c68804f1e9ed11958/6233705d07c7252d292159dc_Homepage%20in%20Jacksonville%20Hero.jpg'
              //  onClick(href = "https://www.crossfit.com")
              
            },
            {
              altText: 'trauma yoga room',
              caption: 'Trauma Yoga',
              key: 2,
              src: 'https://images.squarespace-cdn.com/content/v1/5e629534caa5281c111f060d/1590536808236-QI2MNON9ON8NQQL9RRHD/hero-image?format=1500w'
              // https://www.thetrymethod.com/
            },
            {
              altText: 'Toughest Race in the World',
              caption: 'Echo Challenge(World/s Toughest)',
              key: 3,
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2qTHxQK6PT5Oi84IJn4kq1DoqYcRTY0D0A&usqp=CAU'
              // https://mybigplunge.com/culture/movies-documentaries/new-reality-show-worlds-toughest-race-eco-challenge-fiji-amazon-prime-video-keeps-viewers-engaged/
            }
          ]}
        />
        <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
        <h2 className="workoutList-Profile"><b><i>~</i>My Workout List<i>~</i></b></h2>
      </div>
      <section className="workout__list">
        <ul className="w__List">

          {filteredWorkouts.map(workout => <li className="w__Item" key={workout.id}>
            <h3 className="workout_name"><strong>{workout.workoutName}</strong></h3>&nbsp;<br />
            <b><i>Generated on Date:</i></b>&nbsp;{workout.dateCompleted}&nbsp;&nbsp;
            <div className="workout__btns">
              <Button outline onClick={() =>
                navigate(`/exerciseView/${workout.id}`)}
                className="pro-primary" >
                View Workout
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
              <Button outline onClick={() => deleteButton(workout.id)}
                className="pro-primary">
                Delete Workout
              </Button>
            </div>
          </li>)}

        </ul>
      </section>
      <WelcomeFooter />
    </article>
  )
}
