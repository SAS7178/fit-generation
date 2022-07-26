import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ExerciseEdit = ({ exerciseObject, getAllExercises }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="searchBarDrop">
            <div className='johns'>
                <strong>{exerciseObject.name}</strong>
                <Button id="dropDown" color="danger" onClick={toggle}>
                    View Exercise
                </Button>
                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="35em"></img>
            </div>

            <Modal isOpen={modal} toggle={toggle} {...exerciseObject}>
                <ModalHeader toggle={toggle}>Quick View</ModalHeader>
                <ModalBody>
                    <>
                        <section>{getAllExercises}</section>
                        <section className='quickView'>
                            <strong>{exerciseObject.name}</strong>
                            <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="50em"></img>
                            <br />
                            sets:&nbsp;{exerciseObject.sets}&nbsp;&nbsp;
                            reps:&nbsp;{exerciseObject.reps}&nbsp;&nbsp;
                            rest time:&nbsp;{exerciseObject.rest}<br />
                            <a target="_blank" href={exerciseObject.exampleVid}>
                                <Button className="exercise__link">Watch tutorial</Button>

                            </a>
                        </section>
                    </>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
