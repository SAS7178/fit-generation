import { List, Offcanvas, OffcanvasBody, OffcanvasHeader, Progress } from "reactstrap"

export const WelcomeFooter = () => {

    return (
        <>
            <div><div>
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
            </div></div>
            <div>

                <Progress
                    animated
                    className="my-3"
                    color="info"
                    value={50}
                />

                <Progress
                    className="my-3"
                    multi
                >
                    <Progress
                        animated
                        bar
                        value="10"
                    />
                    <Progress
                        animated
                        bar
                        color="success"
                        value="30"
                    />
                    <Progress
                        animated
                        bar
                        color="warning"
                        value="20"
                    />
                    <Progress
                        animated
                        bar
                        color="danger"
                        value="20"
                    />
                </Progress>
            </div>
            <>
                <List className="footer">

                    <li>
                        Phasellus iaculis
                    </li>
                    <li>
                        Nulla volutpat
                    </li>
                    <img className="footer_img" src="https://i.pinimg.com/564x/42/e7/ef/42e7ef3b07f289a59476d49f0d92ee57.jpg"></img>

                </List>
            </>
        </>

    )
}