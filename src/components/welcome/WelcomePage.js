
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"
import "./Welcome.css"
import { WelcomeFooter } from "./WelcomeFooter.js";

export const WelcomePage = () => {
  const navigate = useNavigate()
  const [quote, setQoute] = useState({})

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
  //          .then(response => {setQoute(response)
  //       })
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
            <CardTitle className="qoute-box" tag="h5">
              "{`${quote.quote}`}"
              -{`${quote.author}`}-
            </CardTitle>
            <CardText>
              <small className="text-quote">
              </small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </section>
      <div className="seperation"></div>
      <iframe className="welcomeIframe" width="460" height="350" src="https://www.youtube.com/embed/Kpbo9SXbGXE" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <section className="tagline" >
        <div className="tag-logo">
          <b>Where <strong>Fitness Generation</strong> is our Mission!</b>

        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <img alt="" className='gorilla-home' src="/2E5049CB-BAED-4DAC-97C5-065C0E195D5E_4_5005_c.jpeg" width="200" height="200" ></img>
      </section>
      <WelcomeFooter />
    </div>

  )
}