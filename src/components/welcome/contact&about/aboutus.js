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
                             I've always been very active growing up, with my 6 siblings and numerous cousins we were always 
                             outside expelling energy..I played sports throughout high school as a result of parental prodding.
                             Through sports I was introduced to weight lifting and fitness..the weight room coach was a huge guy 
                             with a lot of character(not to mention a legendary record winning 5A baseball coach)
                             everyone admired him. He was dedicated in teaching us the principals of strength and fitness.
                                That was the beginning of my journey, now.. I went to college and studied exercise science, I've also read and continue to read
                                 mountains of literature on the endless studies and programs for efficiency in the fitness and health world..ad infinitum.
                                But the most import things I've learned were the foundational principals from my old coach that dedicated his life to fitness and 
                                doing whatever he could to give us kids the edge physically and mentally in the arena of sports and life.
     
                                    This application is only a beginning of my efforts to give back some of what was freely given to me.
                                    It's no suprise, if you know me, that I get excited when it comes to health and fitness..which has inevitably   
                                    resulted in giving much advice and many training sessions. I've tried to develop a simple app that can provide people some assistance
                                    in the commencement of a fitness regiment that provides effective and easy to use workouts...now as my old coach would say
                                    "Life's too short to be small Son"-Terry Powell- get to it!



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
