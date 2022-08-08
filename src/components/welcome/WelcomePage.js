import { useNavigate } from "react-router-dom";
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"
import "./Welcome.css"
import { WelcomeFooter } from "./WelcomeFooter.js";
export const WelcomePage = () => {
 const navigate = useNavigate() 

  const handleGenerateButtonClick = () => {
    navigate(`/generateWorkout`)
  }

  return (
    <>
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

     <div> <b>Where <strong>Fitness Generation</strong> is our Pleasure!</b></div>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button 
        onClick={(evt) => handleGenerateButtonClick(evt)
        }
        className="btn-primary">
        Generate Workout
      </button>
          </section>
  
      <WelcomeFooter />
    </>

  )
}