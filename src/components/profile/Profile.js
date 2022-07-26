import { Link } from "react-router-dom"
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"
import "./Profile.css"
export const Profile = () => {

    return (
        <>
        <div className="profile__nav">
        <Link className="navbar__home" to="/">Home</Link>
        <Link className="navbar__generate" to="/generateWorkout">Generate New Workout</Link>
        </div>
        <div className='welcome__header'>
            <h1> Fit Generation </h1>
            <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
          </div>
    <div>Welcome to your profile!</div>
    <div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/270?grayscale"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay className="profile__card">
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>
    </>
    )
}