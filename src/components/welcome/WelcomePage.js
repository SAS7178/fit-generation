
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap"
import "./Welcome.css"
import { WelcomeFooter } from "./WelcomeFooter.js";

export const WelcomePage = () => {

  const navigate = useNavigate()
   const [qoute, setQoute] = useState("")

  const handleGenerateButtonClick = () => {
    navigate(`/generateWorkout`)
  }

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'df702358e3msh0a60399ba97f41ap1be78cjsn2053bd221176',
  //     'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com'
  //   }
  // };

  
  // useEffect(
  //   () => {
  //    fetch('https://bodybuilding-quotes1.p.rapidapi.com/random-quote', options)
  //      .then(response => response.json())
  //      .then((response) => {setQoute(response)}) 
  //      },
  //   [] // When this array is empty, you are observing initial component state
  // )

  return (
    <div className="">
  
      <section className="card-box">
        <Card inverse className="welcome__card">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270?grayscale"
            className="card-img"
          />
          <CardImgOverlay className="overLay">
            <CardTitle tag="h5">
            {/* {`${qoute.qoute}`} */}
            </CardTitle>
            <CardText>
              <small className="text-quote">
              {/* {`${qoute.qoute}`} */}
              </small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </section>
      <div className="seperation"></div>
      
      <section className="tagline" >

        <div><b>Where <strong>Fitness Generation</strong> is our Mission!</b></div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <div className="welcome-btns">
          <button
            onClick={(evt) => handleGenerateButtonClick(evt)}
            className="btn-generate">
            Generate Workout
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => { window.open(URL = "https://whatnerd.com/apps-gamify-fitness-and-health/") }}
            className="btn-games">
            Exercise Games
          </button>
        </div>
      </section>
      <WelcomeFooter />
    </div>

  )
}