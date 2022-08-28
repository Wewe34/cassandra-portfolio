import React, { SyntheticEvent, useState } from "react";
import Modal from 'react-modal';
import { defendingDoryURL, pixaliveURL } from "../../utils/constants";


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
        <div id="projects" className="mx-3 pb-3 bg-white bg-opacity-70 rounded-lg">
            <p className="text-4xl pb-3 mb-3 py-10 font-bold line-through">PORTFOLIO</p>
            <p className="pb-3 mx-3 italic">I love creating interactive visual applications.</p>
            <p className="pb-3">Check out some of my projects below.</p>
            <p className="pb-3">Visit my <span className="font-bold underline text-blue-500">Github</span> to see more projects.</p>
            <div id="project-1" className="mb-4 bg-black rounded-lg px-3 mx-3">
                <p className="font-bold text-left text-2xl pl-3 py-4 text-yellow-400">Defending Dory</p>
                <img 
                    className="border-2 border-white rounded-lg" 
                    src="/defending-dory.PNG" 
                    alt="three sharks surround a fish underwater" />
                <div className="flex justify-center justify-around">
                    <button id="defending-dory-details" 
                            onClick={openModal} 
                            className="text-xl text-blue-500 p-3 m-4 bg-white rounded-lg font-bold">
                                View Details
                    </button>
                </div>
                <Modal
                    isOpen={doryModalStateOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}
                    >
                    <div className="flex justify-between">
                        <p className="text-2xl pb-7 font bold">Defending Dory</p>
                        <button id="defending-dory-modal-close" onClick={closeModal} className="pb-7 text-4xl text-blue-500">X</button>
                    </div>
                    <img 
                        className="border-2 border-white rounded-lg pb-3" 
                        src="/defending-dory.PNG" 
                        alt="three sharks surround a fish underwater" />
                    <p>Defending Dory is a single player dodge game made for desktop.</p>
                    <div className="flex justify-center">
                        <button 
                            onClick={() => window.location.href= defendingDoryURL} 
                            className="bg-white text-blue-500 text-lg border-2 rounded-lg p-3 m-4">
                                Visit Site
                        </button>
                    </div>
                    <div>
                        <p className="py-2">
                            Tech Stack: JavaScript, Phaser 3 (HTML5 game framework), Express.js
                        </p>
                        <p className="py-2">Role: Sole Developer</p>
                        <p>Responsibilities:</p>
                        <ul>
                            <li>Utilized Phaser.js framework in order to configure gaming objects, sprites and scenes</li>
                            <li>Created customized methods to allow for functionality for game object</li>
                            <li>Incorporated physics on colliding sprite objects</li>
                            <li>Served up static files with Express.js</li>
                            <li>Customized and edited assets with Affinity Photo (Professional Photo Editing Software)</li>
                        </ul>
                    </div>
                </Modal>
            </div>
            <div id="project-2" className="mb-7 bg-black rounded-lg px-3 mx-3">
                <p className="font-bold text-left text-2xl pl-3 py-4 text-yellow-400">Pixalive</p>
                <img className="border-2 border-white rounded-lg" src="/pixalive.PNG" alt="art canvas with pixel art" />
                <div className="flex justify-center justify-around">
                    <button 
                        id="pixalive-details" 
                        onClick={openModal} 
                        className="text-xl text-blue-500 p-3 m-4 bg-white rounded-lg font-bold">
                            View Details
                    </button>
                </div>
                <Modal
                    isOpen={pixaliveModalStateOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}>
                    <div className="flex justify-between">
                        <p className="text-2xl pb-7 font bold">Pixalive</p>
                        <button id="pixalive-modal-close" onClick={closeModal} className="pb-7 text-4xl text-blue-500">X</button>
                    </div>
                    <img className="border-2 border-white rounded-lg pb-3" src="/pixalive.PNG" alt="art canvas with pixel art" />
                    <div>
                        <p>Pixalive is a multi user, real-time editor for animated sprites and pixel art developed by a team 
                            of four developers in 3 weeks.
                        </p>
                        <div className="flex justify-center p-4">
                            <button onClick={() => window.location.href= pixaliveURL} className="bg-white text-blue-500 text-lg border-2 rounded-lg p-3">Visit Site</button>
                        </div>
                        <p className="py-2">
                            Tech Stack: React, Socket.io, HTML Canvas, Express.js
                        </p>
                        <p>Responsibilities:</p>
                        <ul>
                            <li>Implemented socket.io to allow for remote real-time collaboration with multiple users</li>
                            <li>Incorporated drawing graphics using HTML canvas</li>
                            <li>Developed front-end components using React and React Hooks</li>
                        </ul>
                    </div>
                </Modal>
            </div>
            <div id="project-3">

            </div>
        </div>
    )
}

export default Projects;