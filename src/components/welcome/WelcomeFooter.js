import { List, Progress } from "reactstrap"

export const WelcomeFooter = () => {

    return (
        <>
            <div>
                <Progress
                    animated
                    className="my-3"
                    value={10}
                />
                <Progress
                    animated
                    className="my-3"
                    color="success"
                    value="25"
                />
                <Progress
                    animated
                    className="my-3"
                    color="info"
                    value={50}
                />
                <Progress
                    animated
                    className="my-3"
                    color="warning"
                    value={75}
                />
                <Progress
                    animated
                    className="my-3"
                    color="danger"
                    value="100"
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
                    <div className="footer_img" ></div>
                </List>
            </>
        </>

    )
}