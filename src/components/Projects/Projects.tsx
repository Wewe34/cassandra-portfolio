import React, { SyntheticEvent, useState } from "react";
import Modal from 'react-modal';
import { defendingDoryURL, pixaliveURL } from "../../utils/constants";

interface IHandleModalEvents {
    event: HTMLInputElement;
}

const Projects = () => {

    const [doryModalStateOpen, setDoryModalStateOpen]= useState(false);
    const [pixaliveModalStateOpen, setPixaliveModalStateOpen]= useState(false);

    function openModal(event: any) {
        if (event.target.id === 'defending-dory-details') {
            setDoryModalStateOpen(true);
        }
        if (event.target.id === 'pixalive-details') {
            setPixaliveModalStateOpen(true);
        } 
    }

    function closeModal(event:any) {
        if (event.target.id === 'defending-dory-modal-close') {
            setDoryModalStateOpen(false);
        }
        if (event.target.id === 'pixalive-modal-close') {
            setPixaliveModalStateOpen(false);
        } 
    }

    return (
        <div id="projects">
            <p>Projects</p>
            <div id="project-1">
                <img src="/defending-dory.PNG" alt="three sharks surround a fish underwater" />
                <div className="flex justify-center justify-around">
                    <p>Defending Dory</p>
                    <button id="defending-dory-details" onClick={openModal} className="bg-gray-300">View Details</button>
                </div>
                <Modal
                    isOpen={doryModalStateOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}
                    >
                    <div className="flex justify-between">
                        <p className="text-xl pb-7">Defending Dory</p>
                        <button id="defending-dory-modal-close" onClick={closeModal} className="pb-7">X</button>
                    </div>
                    <p>Defending Dory is a single player dodge game made for desktop.</p>
                    <button onClick={() => window.location.href= defendingDoryURL} className="bg-gray-300">View Game</button>
                </Modal>
            </div>
            <div id="project-2">
                <img src="/pixalive.PNG" alt="art canvas with pixel art" />
                <div className="flex justify-center justify-around">
                    <p>Pixalive</p>
                    <button id="pixalive-details" onClick={openModal} className="bg-gray-300">View Details</button>
                </div>
                <Modal
                    isOpen={pixaliveModalStateOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}>
                    <div className="flex justify-between">
                        <p className="text-xl pb-7">Pixalive</p>
                        <button id="pixalive-modal-close" onClick={closeModal} className="pb-7">X</button>
                    </div>
                    <p>A free, multi-user, real-time editor for animated sprites and pixel art</p>
                    <button onClick={() => window.location.href= pixaliveURL} className="bg-gray-300">View Editor</button>
                </Modal>
            </div>
            <div id="project-3">

            </div>
        </div>
    )
}

export default Projects;