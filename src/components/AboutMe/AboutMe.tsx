import React from "react";

const AboutMe = () => {
    return (
        <div className="pb-20">
            <p className="text-left mx-4 text-5xl mt-12 font-bold text-blue-500">
                Hello!
            </p>
            <p className="text-4xl mt-1 text-center font-bold px-5">
                I'm Cassandra Terry!
            </p>
            <div className="flex justify-center mt-2 ">
                <img src="/profile-photo.JPG" 
                     alt="woman smiling and looking directly at camera" 
                     className="w-48 mr-5 rounded-full border-2"/>
            </div>
            <p className="mt-2 px-2 font-bold text-blue-500">
                FULLSTACK REACT ENGINEER
            </p>
            <p className="mt-2 px-2 pb-7">
            Software Engineer with 3+ years experience producing fullstack React web applications. 
            I have a love for creating and solving problems that led to my discovery of coding!  
            </p>
        </div>
    )
}

export default AboutMe;