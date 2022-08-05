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
                          
                        </div>
                        <img className="footer_img1" src="https://img.freepik.com/premium-vector/continuous-line-drawing-man-workout-activities-fitness-concept-isolated-white-background_554735-277.jpg"></img>
                        <>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                        <img className="footer_img2" src="https://i.pinimg.com/564x/42/e7/ef/42e7ef3b07f289a59476d49f0d92ee57.jpg"></img>
                        <>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                        <img className="footer_img3" src="https://img.myloview.com/stickers/continuous-one-line-drawing-of-yoga-girl-workout-concept-of-woman-exercise-standing-with-hands-vector-illustration-minimalism-sport-theme-design-700-182433063.jpg"></img>
                        
                        <div className="contact">
                          
                        </div>
                    </div>

                </List>

            </>
        </>

    )
}