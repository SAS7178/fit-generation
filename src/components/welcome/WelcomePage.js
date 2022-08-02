import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"
import "./Welcome.css"

export const WelcomePage = () => {

  return (
    <>
      <section>
        <Card inverse className="welcome__card">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270?grayscale"
            style={{
              height: 270
            }}
            width="80%"
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
      {/* My discription info */}
      <>
        <div className="div"></div></>
    </>
  )
}