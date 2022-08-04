import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"
import "./Welcome.css"
import { WelcomeFooter } from "./WelcomeFooter.js";
export const WelcomePage = () => {

  return (
    <>
      <section className="card-box">
        <Card inverse className="welcome__card">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270?grayscale"
          // style={{
          //   height: 270
          // }}
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
      <section className="myPT" >
        <iframe width="250" height="120" src="https://www.youtube.com/embed/N0HRRWn7Ayg" title="My PT Hub - Face to Face Personal Training and Coaching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="250" height="120" src="https://www.youtube.com/embed/N0HRRWn7Ayg" title="My PT Hub - Face to Face Personal Training and Coaching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      </section>

      <WelcomeFooter />
    </>

  )
}