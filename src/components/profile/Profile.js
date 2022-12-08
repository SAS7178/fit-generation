import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, FormGroup, FormText, Label, Spinner } from "reactstrap"
import { WelcomeFooter } from "../welcome/WelcomeFooter"
import ReactCardSlider from 'react-card-slider-component';
import Axios from 'axios'
import { Image } from 'cloudinary-react'
import "./Profile.css"

export const Profile = () => {
  const { customerId } = useParams()
  // current local fituser
  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)

  const [workoutExercises, setworkoutExercises] = useState([]) // gets all workouts from API
  const [filteredWorkouts, setFilteredWorkouts] = useState([]) // filtered workouts for current user
  const [RESObject, setRESObject] = useState("") // chosen files cloudinary post response url value to push with API obj
  const [Objects, setObjects] = useState([]) // chosen files cloudinary post response url value to push with API obj
  const [customerObject, setCustomerObject] = useState("https://res.cloudinary.com/stephensmithdev/image/upload/v1670178379/default_Inline_Scan_stcejn.png") // url image from API for current customer to print to screen
  const [customerObject2, setCustomerObject2] = useState("https://res.cloudinary.com/stephensmithdev/image/upload/v1670178379/default_Inline_Scan_stcejn.png") // url image from API for current customer to print to screen
  const [customerObject3, setCustomerObject3] = useState("https://res.cloudinary.com/stephensmithdev/image/upload/v1670178379/default_Inline_Scan_stcejn.png") // url image from API for current customer to print to screen
  const [customerObject4, setCustomerObject4] = useState("https://res.cloudinary.com/stephensmithdev/image/upload/v1670178379/default_Inline_Scan_stcejn.png") // url image from API for current customer to print to screen
  const [customer, setCustomers] = useState({}) //current logged customer
  const navigate = useNavigate()

  // fetches and set all workouts for cust sets to var to make available for iteration globally
  useEffect(
    () => {
      // fetch(`https://fitgeneration-api.glitch.me//workouts`)
      fetch(`https://fitgeneration-api.glitch.me//workouts`)
        .then(response => response.json())
        .then((data) => {
          setworkoutExercises(data)
        })
    },
    [customerId] // When this array is empty, you are observing initial component state
  )
  useEffect(
    () => {
      // fetch(`https://fitgeneration-api.glitch.me//customers?id=${fitCustomerObject.id}`)
      fetch(`https://fitgeneration-api.glitch.me//customers?id=${fitCustomerObject.id}`)
        .then(response => response.json())
        .then((data) => {
          setCustomers(data[0])
        })
    },
    [fitCustomerObject.id] // When this array is empty, you are observing initial component state
  )
  useEffect(
    () => {
      if (RESObject !== "") { handleUpdateButtonClick() }
    },
    [RESObject] // When this array is empty, you are observing initial component state
  )
  useEffect(
    () => {
      if (customerObject !== "" || "https://res.cloudinary.com/stephensmithdev/image/upload/v1670178379/default_Inline_Scan_stcejn.png") { }
    },
    [customerObject] // When this array is empty, you are observing initial component state
  )

  useEffect(
    () => {
      updateImage()
    },
    [] // When this array is empty, you are observing initial component state
  )

  useEffect(
    () => {
      if (Objects) {
        // let tag = `${Objects[0].image}`
        let length = Objects.length 
        setCustomerObject2(Objects[length - 2]?.image)
        setCustomerObject3(Objects[length - 3]?.image)
        setCustomerObject4(Objects[length - 4]?.image)
      }
    },
    [Objects] // When this array is empty, you are observing initial component state
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
  //func to reerender all workouts to be used where needed
  const getAllWorkouts = () => {
    // fetch(`https://fitgeneration-api.glitch.me//workouts`)
    fetch(`https://fitgeneration-api.glitch.me//workouts`)
      .then(response => response.json())
      .then((workoutArray) => {
        setworkoutExercises(workoutArray)
      })
  }
  //func to delete workout from database if has wworkoutid
  const deleteButton = (workoutId) => {
    // fetch(`https://fitgeneration-api.glitch.me//workouts/${workoutId}`, {
    fetch(`https://fitgeneration-api.glitch.me//workouts/${workoutId}`, {
      method: "DELETE"
    })
      .then(() => { getAllWorkouts() })
  }

  const handleUpdateButtonClick = () => {
    const customerImageToSendToApi = {
      customerId: fitCustomerObject.id,
      image: RESObject,
      dateCompleted: new Date()
    }

    // return fetch(`https://fitgeneration-api.glitch.me//customerProgress`, {
    return fetch(`https://fitgeneration-api.glitch.me//customerProgress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customerImageToSendToApi)
    }).then(updateImage())
  }

  const updateImage = () => {
    // fetch(`https://fitgeneration-api.glitch.me//customerProgress?customerId=${fitCustomerObject.id}`)
    fetch(`https://fitgeneration-api.glitch.me//customerProgress?customerId=${fitCustomerObject.id}`)
      .then(response => response.json())
      .then((data) => {
        let length = data.length - 1
        let cust = data[length]
        setObjects(data)
        setCustomerObject(cust.image)
      })
  }


  const slides = [
    { image: "https://assets.website-files.com/6233518c68804f1e9ed11958/6233705d07c7252d292159dc_Homepage%20in%20Jacksonville%20Hero.jpg", title: "Get into Crossfit!", description: "Learn about Crossfit here.", clickEvent: () => { window.open(URL = "https://www.crossfit.com") } },
    { image: "https://images.squarespace-cdn.com/content/v1/5e629534caa5281c111f060d/1590536808236-QI2MNON9ON8NQQL9RRHD/hero-image?format=1500w", title: "Trauma Yoga", description: "Trauma yoga and the benefits!", clickEvent: () => { window.open(URL = "https://www.thetrymethod.com/") } },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2qTHxQK6PT5Oi84IJn4kq1DoqYcRTY0D0A&usqp=CAU", title: "Echo Challenge(World/s Toughest)", description: "Toughest race in the world!", clickEvent: () => { window.open(URL = "https://mybigplunge.com/culture/movies-documentaries/new-reality-show-worlds-toughest-race-eco-challenge-fiji-amazon-prime-video-keeps-viewers-engaged/") } },
    { image: "https://cdn.mos.cms.futurecdn.net/XJhUdVn39K7zMPndY9TXMe-970-80.jpg.webp", title: "Best Outdoor Activities for Staying in Shape", description: "Get outside, stay in shape, amd have fun!", clickEvent: () => { window.open(URL = "https://www.livescience.com/59288-best-outdoor-activities-exercise.html") } },
    { image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvHBPKZRVMaU5lWNJlT80uutu0-Zk2eei1cEddUQPjSPzjVQtE", title: "Limitless With Chris Hemsworth", description: "A epic mission to discover how to live better for longer.", clickEvent: () => { window.open(URL = "https://www.disneyplus.com/series/limitless-with-chris-hemsworth/2wow8Otyubmk") } }
  ]
  const [image, setImageSelected] = useState({});

  const uploadImage = () => {
    const formData = new FormData
    formData.append('file', image)
    formData.append('upload_preset', 'urq4tpm4')

    Axios.post("https://api.cloudinary.com/v1_1/stephensmithdev/image/upload/", formData).then(resp => setRESObject(resp.data.url.toString())).then(
      window.alert("Your image has been uploaded, refresh page to see updates!")
    )
  }


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
            <div className="welcome-msg" >
              &nbsp;&nbsp;&nbsp;&nbsp;<h2><b>Welcome back,</b></h2>
              <div className="customer-name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>{customer.name}</b></div><br></br><br></br><br></br><br></br><br></br>
            </div>
        <div className="top-half">
          <section className="welcomebtn">
            <FormGroup className="fileLoad">
              <FormText>
              </FormText>
            </FormGroup>
          </section>
          <div className="galleryi">
              <div className="chooseFile">
                <i><b>This is your gallery to easily track fitness data.</b></i>
                <Label for="exampleFile"></Label>
                &nbsp;&nbsp;
                <input className="input" type="file" onChange={(event) => {
                  setImageSelected(event.target.files[0]);
                }} />
                <button className="upload" onClick={() => uploadImage()}>Upload</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>..Track your Progress..</b>
              </div>
            <div className="gallery">
            <Image style={{ width: 470 }} className="profileObject" cloudName='stephensmithdev'
              publicId={customerObject}
            />
            <Image style={{ width: 470 }} className="profileObject" cloudName='stephensmithdev'
              publicId={customerObject2}
            />
            <Image style={{ width: 470 }} className="profileObject" cloudName='stephensmithdev'
              publicId={customerObject3}
            />
            <Image style={{ width: 470 }} className="profileObject" cloudName='stephensmithdev'
              publicId={customerObject4}
            />
          </div>
          </div>
        </div>

      </div>
      <div className="card__Element">
      </div>
      <div className="max">
        <div className="seperation-pro"></div>
        <div className="edu-zone"><b> &nbsp;&nbsp;Education Zone&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tools</b>
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
        <div className="seperation-pro"></div>
        <ReactCardSlider className="slider" slides={slides} />
        <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
        <Button className="generateNew" onClick={() => { navigate("/GenerateWorkout") }}>
          <Spinner
            color="primary"
            size="sm"
          >
            Loading...
          </Spinner>&nbsp;&nbsp;&nbsp;
          <b>Generate New Workout </b>
          &nbsp;&nbsp;&nbsp;<Spinner
            color="primary"
            size="sm"
          >
            Loading...
          </Spinner>
        </Button>
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
