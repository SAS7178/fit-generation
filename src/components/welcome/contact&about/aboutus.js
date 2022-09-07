import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./ContactAbout.css";

export const About = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="">
            <div className=''>
                <button className='abt-btn' onClick={toggle}>About us</button>
                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="35em"></img>
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Learn About Us</ModalHeader>
                <ModalBody>
                    <>
                        <h1 className='contact'><b>FitGeneration</b></h1>
                        <div className='contact-modal'>
                            <h2>Origin Story...</h2>
                            <div className='contact-address'>
                             Please excuse our updates...
                            </div>
                        </div>
                    </>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </div>
    );
}
