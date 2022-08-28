import React from "react";

const AboutMe = () => {
    return (
        <div>
            <p className="text-4xl mt-12">
                Hello!
            </p>
            <p className="text-4xl mt-1">
                I'm Cassandra Terry!
            </p>
            <div className="flex justify-center mt-2 ">
                <img src="/profile-photo.JPG" 
                     alt="woman smiling and looking directly at camera" 
                     className="w-48 mr-5 rounded"/>
            </div>
            <p className="mt-2 px-2">
                FULLSTACK REACT ENGINEER
            </p>
            <p className="mt-2 px-2">
            Software Engineer with 3+ years experience producing fullstack React web applications. 
            I have a love for creating and solving problems that led to my discovery of coding!  
            </p>
            {/* <div className="flex flex-col justify-center justify-between">
                    <img src="/linkedin-logo.png" 
                         alt="blue square with white letters"
                         className="w-12 my-3 mx-2" />
                    <img src="/octocat.jpg" 
                         alt="cartoon person in black cat suit"
                         className="w-12 my-3 mx-2" />
                    <img src="/mail.png" 
                         alt="black mail icon"
                         className="w-10 my-3 mx-2" />
            </div> */}
        </div>
    )
}

export default AboutMe;