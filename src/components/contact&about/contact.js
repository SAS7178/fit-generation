import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./ContactAbout.css";

export const Contact = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="">
            <div className=''>
                <button className='cont-btn' onClick={toggle}>Contact</button>
                <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="35em"></img>
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Contact Information</ModalHeader>
                <ModalBody>
                    <>
                        <h1 className='contact'><b>FitGeneration</b></h1>
                        <div className='contact-modal'>
                            <h2>Corporate Headquarters</h2>
                            <div className='contact-address'>
                                Fit Generation
                                136 Bay Street
                                Port St.Joe, Fl 30458
                            </div>
                            <h2>General Contact</h2>
                            <div className='contact-gen'>
                            Toll-Free: 888-968-6822
                            Phone: 706-562-4634
                            Email: contact@fitgeneration.com
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
