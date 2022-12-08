
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

  useEffect(
    () => {
      // fetch(`https://fitgeneration-api.glitch.me//qoutes`)
      fetch(`https://fitgeneration-api.glitch.me//qoutes`)
       .then(response => response.json())
           .then(response => {setQoute(response[Math.floor(Math.random() * response.length)])
        })
       },
    [] // When this array is empty, you are observing initial component state
  )

  //get fitCustomer from local set to var
  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)
  // return one nav if customer true return other if false
  if (fitCustomerObject) {
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
                "{`${quote.Quote}`}"
                -{`${quote.Author}`}-
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
        <img  className="vertline" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsaahKP7BJT6okiK4RHijvgPZH4NyzubFdA&usqp=CAU" width="100" height="200em"></img>
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
            <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="50%" height="100em"></img>
            <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="90%" height="100em"></img>
          </div>
          <img alt="" className='gorilla-home' src="/2E5049CB-BAED-4DAC-97C5-065C0E195D5E_4_5005_c.jpeg" width="200" height="200" ></img>
          <div className="lin">
          </div>
        </section>
        <WelcomeFooter />
      </div>

    )
  } else {
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
                "{`${quote.Quote}`}"
                -{`${quote.Author}`}-
              </CardTitle>
              <CardText>
                <small className="text-quote">
                </small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </section>
        <div className="seperation"></div>
        <div className="taglinenon"><b>Where <strong>Fitness Generation</strong> is our Mission!</b></div>
        
        <div className="nonVids">
        <iframe className="welcomeTTIframe" width="460" height="350" src="https://www.youtube.com/embed/BHY0FxzoKZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="welcomeIframe" width="460" height="350" src="https://www.youtube.com/embed/Kpbo9SXbGXE"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <section className="taglinenonb" >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="welcome-btns">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={() => { window.open(URL = "https://whatnerd.com/apps-gamify-fitness-and-health/") }}
              className="btn-games">
              Exercise Games
            </button>
          </div>
          <img alt="" className='gorilla-home' src="/2E5049CB-BAED-4DAC-97C5-065C0E195D5E_4_5005_c.jpeg" width="200" height="200" ></img>
          </section>
        <WelcomeFooter/>
      </div>
    )
  }
} 