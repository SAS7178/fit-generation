import { List, Offcanvas, OffcanvasBody, OffcanvasHeader, Progress } from "reactstrap"

export const WelcomeFooter = () => {

    return (
        <>
            <div>
                <Offcanvas
                    direction="start"
                    scrollable
                    toggle={function noRefCheck() { }}
                >
                    <OffcanvasHeader toggle={function noRefCheck() { }}>
                        Offcanvas
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <strong>
                            This is the Offcanvas body.
                        </strong>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
            <>

                <List className="footer">

                    <div className="footer-box">
                        <div className="about">
                            About us:
                        </div>
                        <img className="footer_img" src="https://thumbs.dreamstime.com/z/detailed-illustration-silhouettes-strong-rolling-people-set-girl-man-sport-fitness-gym-body-building-workout-powerlifting-115536119.jpg"></img>
                        <>
                        </>
                        <img className="footer_img" src="https://i.pinimg.com/564x/42/e7/ef/42e7ef3b07f289a59476d49f0d92ee57.jpg"></img>
                        <>
                        </>
                        <img className="footer_img" src="https://thumbs.dreamstime.com/z/detailed-colorful-silhouette-yoga-vector-illustration-fitness-concept-gymnastics-aerobicssport-aerobics-115520142.jpg"></img>
                        <div className="contact">
                            Contact us:
                        </div>
                    </div>

                </List>

            </>
        </>

    )
}