//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"
import "./Welcome.css"
import { WelcomeFooter } from "./WelcomeFooter.js";

export const WelcomePage = () => {
  const navigate = useNavigate()
 // const [qoute, setQoute] = useState({})
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

  // fetch('https://bodybuilding-quotes1.p.rapidapi.com/random-quote', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //    .then(response => setQoute(response))
 

  return (
    <div className="background__home">
      <section className="card-box">
        <Card inverse className="welcome__card">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270?grayscale"
          />

          <CardImgOverlay>
            <CardTitle tag="h5">
              Fit Generation Mission
            </CardTitle>
            <CardText>
              {/* {qoute.qoute} */}
            </CardText>
            <CardText>
              <small className="text-muted">
                {/* WE are Here to Better our Selves! */}
              </small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </section>

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