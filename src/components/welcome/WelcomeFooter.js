import { Link } from "react-router-dom"
import { Button, List, Offcanvas, OffcanvasBody, OffcanvasHeader, Progress } from "reactstrap"


export const WelcomeFooter = () => {

    return (
        <>

            {/* <div>
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
            </div> */}


            <footer className="footer">

                <article className="footer-links">

                    <section className="footer-items">
                        <nav className="footer-features">&nbsp;&nbsp;&nbsp;&nbsp; <div className="font"><b>Popular Features</b></div>
                            <Link className="footer__link" to="/profile/:customerId">Generate a Workout </Link>
                            <Link className="footer__link" to="/profile/:customerId">My Profile View</Link>
                            <Link className="footer__link" to="/profile/:customerId">Exercise Search</Link>
                        </nav>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        <nav className="footer-features">&nbsp;&nbsp;&nbsp;&nbsp; <div className="font"><b>Contact us & Info</b></div>
                            {/* <Link className="footer__link" to="/profile/:customerId">About </Link>
                            <Link className="footer__link" to="/profile/:customerId">contact info </Link> */}
                            <div className="contact-about">
                                <button outline onClick={() => { window.open(URL = "https://www.nasm.org/resources/one-rep-max-calculator") }}
                                    className="about-link">
                                    About Us
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button outline onClick={() => { window.open(URL = "https://www.nasm.org/resources/one-rep-max-calculator") }}
                                    className="contact-link">
                                    Contact
                                </button>
                            </div>
                        </nav>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

                        <nav className="footer-resources">&nbsp;&nbsp;&nbsp;&nbsp; <div className="font"><b>Helpful Resources</b></div>
                            <Link className="footer__link" to="/generateWorkout">Generate a Workout </Link>
                            <Link className="footer__link" to="/profile/:customerId">My Profile View</Link>
                            <Link className="footer__link" to="/profile/:customerId">Nutrition and Diet</Link>
                        </nav>
                    </section>

                    <div className="copyright">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-------------------------------------------&nbsp;&nbsp;<a href='https://twitter.com/'><img alt="" className="footer__logo" src="http://powerpackedventures.in/wp-content/uploads/2022/05/Asset-1@4x.png" width="45" height="45"></img></a>--
                        <a href='https://www.snapchat.com/'><img alt="" className="footer__logo" src="https://assets.stickpng.com/thumbs/584c4c131fc21103bb375baa.png" width="45" height="45"></img></a>--
                        <a href='https://www.facebook.com/'><img alt="" className="footer__logo" src="https://i.pinimg.com/originals/79/ff/98/79ff98c829c7f91b891cfc9555ebade2.png" width="45" height="45"></img></a>--
                        <a href='https://www.instagram.com/'><img alt="" className="footer__logo" src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" width="45" height="45"></img></a>
                        &nbsp;--------------------------------------
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------&nbsp;&nbsp;&nbsp;&nbsp;Copyright © 2022 FitGeneration, Inc.&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------
                    </div>


                </article>
            </footer>

        </>

    )
}