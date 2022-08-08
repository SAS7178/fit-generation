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

                <footer className="footer">
                    {/* <div className="about">
                        </div> */}


                    <img className="footer_img1"
                        src="https://img.freepik.com/premium-vector/continuous-line-drawing-man-workout-activities-fitness-concept-isolated-white-background_554735-277.jpg"></img>

                    <section>
                    <img className="footer_img2"
                        src="https://i.pinimg.com/564x/42/e7/ef/42e7ef3b07f289a59476d49f0d92ee57.jpg"></img>
                    <div>
                        <img alt="" className="insta__logo" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-acrylic-splash.jpeg" width="30" height="30"></img>
                        <img alt="" className="insta__logo" src="http://powerpackedventures.in/wp-content/uploads/2022/05/Asset-1@4x.png" width="30" height="30"></img>
                        <img alt="" className="insta__logo" src="https://www.citypng.com/public/uploads/small/11595350772mveylemgcnrwkjd0ywugqctcyp68if0cuswocpqyyq1e7lweiilmzb2l5y9e1bka1hymtrqpquoyf1bcstdbauisv2xlny5tavyy.png" width="30" height="30"></img>
                    </div>
                    </section>
                    <img className="footer_img3"
                        src="https://img.myloview.com/stickers/continuous-one-line-drawing-of-yoga-girl-workout-concept-of-woman-exercise-standing-with-hands-vector-illustration-minimalism-sport-theme-design-700-182433063.jpg"></img>
                    {/* <div className="contact">
                        </div> */}
                </footer>
            </>
        </>

    )
}