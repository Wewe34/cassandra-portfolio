import React, { SyntheticEvent, useState } from "react";
import Modal from 'react-modal';
import { candyURL, caneURL, creameryURL, defendingDoryURL, myGithubURL, pixaliveURL, portfolioURL } from "../../utils/constants";


const Projects = () => {

    const [doryModalStateOpen, setDoryModalStateOpen]= useState(false);
    const [pixaliveModalStateOpen, setPixaliveModalStateOpen]= useState(false);
    const [creameryModalStateOpen, setCreameryModalStateOpen]= useState(false);
    const [candyModalStateOpen, setCandyModalStateOpen]= useState(false);
    const [portfolioModalStateOpen, setPortfolioModalStateOpen]= useState(false);
    const [caneModalStateOpen, setCaneModalStateOpen]= useState(false);

    function openModal(event: any) {
        if (event.target.id === 'defending-dory-details') {
            setDoryModalStateOpen(true);
        }
        if (event.target.id === 'pixalive-details') {
            setPixaliveModalStateOpen(true);
        } 
        if (event.target.id === 'creamery-details') {
            setCreameryModalStateOpen(true);
        } 
        if (event.target.id === 'candy-details') {
            setCandyModalStateOpen(true);
        } 
        if (event.target.id === 'portfolio-details') {
            setPortfolioModalStateOpen(true);
        } 
        if (event.target.id === 'cane-details') {
            setCaneModalStateOpen(true);
        } 
    }

    function closeModal(event:any) {
        if (event.target.id === 'defending-dory-modal-close') {
            setDoryModalStateOpen(false);
        }
        if (event.target.id === 'pixalive-modal-close') {
            setPixaliveModalStateOpen(false);
        } 
        if (event.target.id === 'creamery-modal-close') {
            setCreameryModalStateOpen(false);
        } 
        if (event.target.id === 'candy-modal-close') {
            setCandyModalStateOpen(false);
        } 
        if (event.target.id === 'portfolio-modal-close') {
            setPortfolioModalStateOpen(false);
        } 
        if (event.target.id === 'cane-modal-close') {
            setCaneModalStateOpen(false);
        } 
    }

    return (
        <div id="projects" className="mx-3 pb-3 bg-white bg-opacity-70 rounded-lg md:max-w-2xl md:m-auto">
            <p className="text-4xl pb-3 mb-3 py-10 font-bold">PORTFOLIO</p>
            <p className="pb-5 mx-3 italic">I love creating interactive visual applications.</p>
            <p className="pb-3">Check out some of my projects below.</p>
            <p className="pb-3">Visit my  
                        <a href={myGithubURL} className="pl-1">
                            <span className="font-bold underline text-blue-500">Github</span>
                        </a> to see more projects.
            </p>
            <div id="project-1" className="mb-4 bg-white rounded-lg px-3 mx-3">
                <p className="font-bold text-left text-2xl pl-3 py-4 text-black">Defending Dory</p>
                <img 
                    className="border-2 border-white rounded-lg" 
                    src="/defending-dory.PNG" 
                    alt="three sharks surround a fish underwater" />
                <div className="flex justify-center justify-around">
                    <button id="defending-dory-details" 
                            onClick={openModal} 
                            className="text-xl text-blue-500 p-3 m-4 bg-white border-2 rounded-lg font-bold">
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
                    <div className="md:max-w-2xl md:m-auto">
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
                    </div>
                </Modal>
            </div>
            <div id="project-2" className="mb-7 bg-white rounded-lg px-3 mx-3">
                <p className="font-bold text-left text-2xl pl-3 py-4 text-black">Pixalive</p>
                <img className="border-2 border-white rounded-lg" src="/pixalive.PNG" alt="art canvas with pixel art" />
                <div className="flex justify-center justify-around">
                    <button 
                        id="pixalive-details" 
                        onClick={openModal} 
                        className="text-xl text-blue-500 p-3 m-4 bg-white border-2 rounded-lg font-bold">
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
                    <div className="md:max-w-2xl md:m-auto">
                        <img className="border-2 border-white rounded-lg pb-3" src="/pixalive.PNG" alt="art canvas with pixel art" />
                        <div>
                            <p>Pixalive is a multi user, real-time editor for animated sprites and pixel art.</p>
                            <p>Developed by a team of four developers in 3 weeks.</p>
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
                    </div>
                </Modal>
            </div>
            <div id="project-3" className="mb-7 bg-white rounded-lg px-3 mx-3">
                <p className="font-bold text-left text-2xl pl-3 py-4 text-black">Cane Banking</p>
                <img className="border-2 border-white rounded-lg" src="/canebanking.png" alt="man on piggy bank" />
                <div className="flex justify-center justify-around">
                    <button 
                        id="cane-details" 
                        onClick={openModal} 
                        className="text-xl text-blue-500 p-3 m-4 bg-white border-2 rounded-lg font-bold">
                            View Details
                    </button>
                </div>
                <Modal
                    isOpen={caneModalStateOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}>
                    <div className="flex justify-between">
                        <p className="text-2xl pb-7 font bold">Cane Banking</p>
                        <button id="cane-modal-close" onClick={closeModal} className="pb-7 text-4xl text-blue-500">X</button>
                    </div>
                    <div className="md:max-w-2xl md:m-auto">
                        <img className="border-2 border-white rounded-lg pb-3" src="/canebanking.png" alt="man on piggy bank" />
                        <div>
                            <p>Cane Banking is a full-stack web application that allows users to sign up, perform transactions, 
                                check account balance, transfer funds, and open up accounts such as savings, checking, or credit card accounts. 
                                As a client, the user will have access to common services like checking account balance, 
                                creating a savings, checking, or credit card account, depositing a check, and transferring funds. 
                                As an employee, user will have access to client applications, approve and deny applications for account creation, 
                                and answer inquiries.</p>
                            <p>Developed by a team of four developers in 2 weeks.</p>
                            <div className="flex justify-center p-4">
                                <button onClick={() => window.location.href= caneURL} className="bg-white text-blue-500 text-lg border-2 rounded-lg p-3">Visit Github</button>
                            </div>
                            <p className="py-2">
                            Tech Stack: React Native, TypeScript, AWS API Gateway, AWS Lambda, DynamoDB, SQL
                            </p>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Created AWS Lambda functions to handle queries to database.</li>
                                <li>Integrated AWS Api Gateway to send request to an endpoint and trigger a lambda function.</li>
                                <li>Implemented Redux to manage state in a centralized location where all React components have access to that state.</li>
                                <li>Built React components to allow for a single page application and incorporated React Hooks to take advantage of React's state and lifecycle features in a functional component.</li>
                                <li>Queried PostgresSql Database to handle banking transactions.</li>
                                <li>Queried AWS DynamoDB database by using the aws-sdk Document Client to add Users.</li>
                                <li>Integrated TypeScript to type JavaScript code in order to avoid easily overlooked errors.</li>
                                <li>Styled application using CSS.</li>
                                <li>Configured AWS setup into application and utilized the aws-sdk.</li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
            <div id="project-4" className="mb-7 bg-white rounded-lg px-3 mx-3">
                <p className="font-bold text-left text-2xl pl-3 py-4 text-black">Cassie's Creamery Tuition Reimbursement System</p>
                <img className="border-2 border-white rounded-lg" src="/creamery.png" alt="ice cream cones" />
                <div className="flex justify-center justify-around">
                    <button 
                        id="creamery-details" 
                        onClick={openModal} 
                        className="text-xl text-blue-500 p-3 m-4 bg-white border-2 rounded-lg font-bold">
                            View Details
                    </button>
                </div>
                <Modal
                    isOpen={creameryModalStateOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}>
                    <div className="flex justify-between">
                        <p className="text-2xl pb-7 font bold">Cassie's Creamery Tuition Reimbursement System</p>
                        <button id="creamery-modal-close" onClick={closeModal} className="pb-7 text-4xl text-blue-500">X</button>
                    </div>
                    <div className="md:max-w-2xl md:m-auto">
                        <img className="border-2 border-white rounded-lg pb-3" src="/creamery.png" alt="ice cream cones" />
                        <div>
                            <p>TRMS, or Tuition Reimbursement Management System is a full-stack web application that allows employees
                                to submit requests for reimbursements for courses, events, and certifications. 
                                These requests can then be approved or rejected by the employee's direct supervisor, 
                                epartment head, and a benefits coordinator while the employee is able to track the status of their requests.</p>
                            <p>Sole Developer, developed in 2 weeks.</p>
                            <div className="flex justify-center p-4">
                                <button onClick={() => window.location.href= creameryURL} className="bg-white text-blue-500 text-lg border-2 rounded-lg p-3">Visit Github</button>
                            </div>
                            <p className="py-2">
                            Tech Stack: TypeScript, React, Redux, DynamoDB, Express.js
                            </p>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Built React components to allow for a single page application and incorporated React Hooks to take advantage of React's state and lifecycle features in a functional component.</li>
                                <li>Created DynamboDb tables.</li>
                                <li>Queried AWS DynamoDB database by using the aws-sdk Document Client to perform scans, query, get, delete and update operations.</li>
                                <li>Implemented Redux to manage state in a centralized location where all React components have access to that state.</li>
                                <li>Integrated TypeScript to type JavaScript code in order to avoid easily overlooked errors.</li>
                                <li>Designed a RESTful web server using the Express.js framework.</li>
                                <li>Styled application using CSS.</li>
                                <li>Configured AWS setup into application and utilized the aws-sdk.</li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
            <div id="project-5" className="mb-7 bg-white rounded-lg px-3 mx-3">
                <p className="font-bold text-left text-2xl pl-3 py-4 text-black">International Candy</p>
                <img className="border-2 border-white rounded-lg" src="/icandy.png" alt="candy login screen" />
                <div className="flex justify-center justify-around">
                    <button 
                        id="candy-details" 
                        onClick={openModal} 
                        className="text-xl text-blue-500 p-3 m-4 bg-white border-2 rounded-lg font-bold">
                            View Details
                    </button>
                </div>
                <Modal
                    isOpen={candyModalStateOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}>
                    <div className="flex justify-between">
                        <p className="text-2xl pb-7 font bold">International Candy</p>
                        <button id="candy-modal-close" onClick={closeModal} className="pb-7 text-4xl text-blue-500">X</button>
                    </div>
                    <div className="md:max-w-2xl md:m-auto">
                        <img className="border-2 border-white rounded-lg pb-3" src="/icandy.png" alt="candy login screen" />
                        <div>
                            <p>International candy is an e-commerce website selling candies.</p>
                            <p>Week and a half collaboration with team of 4.</p>
                            <div className="flex justify-center p-4">
                                <button onClick={() => window.location.href= candyURL} className="bg-white text-blue-500 text-lg border-2 rounded-lg p-3">Visit Github</button>
                            </div>
                            <p className="py-2">
                            Tech Stack: React, Redux, Express.js, Node.js, PostgreSql
                            </p>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Controlled state management with Redux reducers and action creators.</li>
                                <li>Created frontend components using React</li>
                                <li>Developed backend routes and endpoints using Express.js</li>
                                <li>Queried PostgresSql Database to retrieve candy data.</li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
            <div id="project-6" className="mb-7 bg-white rounded-lg px-3 mx-3">
                <p className="font-bold text-left text-2xl pl-3 py-4 text-black">Portfolio</p>
                <img className="border-2 border-white rounded-lg" src="/portfolio.png" alt="woman smiling" />
                <div className="flex justify-center justify-around">
                    <button 
                        id="portfolio-details" 
                        onClick={openModal} 
                        className="text-xl text-blue-500 p-3 m-4 bg-white border-2 rounded-lg font-bold">
                            View Details
                    </button>
                </div>
                <Modal
                    isOpen={portfolioModalStateOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}>
                    <div className="flex justify-between">
                        <p className="text-2xl pb-7 font bold">Portfolio</p>
                        <button id="portfolio-modal-close" onClick={closeModal} className="pb-7 text-4xl text-blue-500">X</button>
                    </div>
                    <div className="md:max-w-2xl md:m-auto">
                        <img className="border-2 border-white rounded-lg pb-3" src="/portfolio.png" alt="woman smiling" />
                        <div>
                            <p>Personal Portfolio site demonstrating software engineering skills and work history.</p>
                            <p>Sole Developer</p>
                            <div className="flex justify-center p-4">
                                <button onClick={() => window.location.href= portfolioURL} className="bg-white text-blue-500 text-lg border-2 rounded-lg p-3">Visit Site</button>
                            </div>
                            <p className="py-2">
                            Tech Stack: React, TypeScript, Tailwind CSS
                            </p>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Created React components for about me section, skills, projects and resume.</li>
                                <li>Incorporated TypeScript to rid of unnecessary errors.</li>
                                <li>Utilized Tailwind CSS to style application with pre-defined styles.</li>
                                <li>Deployed site to its own domain using Bluehost</li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Projects;