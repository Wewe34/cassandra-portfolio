import React from "react";

const Contact = () => {
    return (
        <div className="bg-yellow-400 p-3">
            <div className="flex justify-center justify-around">
                <img src="/linkedin-logo.png" 
                    alt="blue square with white letters"
                    className="w-12 my-3 mx-2" />
                <img src="/octocat.jpg" 
                    alt="cartoon person in black cat suit"
                    className="w-12 my-3 mx-2 rounded-md" />
                <img src="/mail.png" 
                    alt="black mail icon"
                className="w-10 my-3 mx-2" />
            </div>
        </div>
    )
}

export default Contact;