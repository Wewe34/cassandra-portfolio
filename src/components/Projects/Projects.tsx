import React from "react";

const Projects = () => {
    return (
        <div id="projects">
            <p>Projects</p>
            <div id="project-1">
                <img src="/defending-dory.PNG" alt="three sharks surround a fish underwater" />
                <div className="flex justify-center justify-around">
                    <p>Defending Dory</p>
                    <button className="bg-gray-300">View Details</button>
                </div>
            </div>
            <div id="project-2">
                <img src="/pixalive.PNG" alt="art canvas with pixel art" />
                <div className="flex justify-center justify-around">
                    <p>Pixalive</p>
                    <button className="bg-gray-300">View Details</button>
                </div>
            </div>
            <div id="project-3">

            </div>
        </div>
    )
}

export default Projects;