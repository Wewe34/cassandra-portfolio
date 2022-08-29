import React from "react";
import { myGithubURL, myLinkedInURL, myEmail } from "../../utils/constants";

const Contact = () => {
    return (
        <div className="bg-yellow-400 p-3 mt-10">
            <div className="flex justify-center justify-evenly">
                <img 
                    src="/linkedin-logo.png" 
                    alt="blue square with white letters"
                    className="w-12 my-3 mx-2"
                    onClick={() => window.location.href = myLinkedInURL} />
                <img 
                    src="/octocat.jpg" 
                    alt="cartoon person in black cat suit"
                    className="w-12 my-3 mx-2 rounded-md"
                    onClick={() => window.location.href = myGithubURL} />
                <img 
                    src="/mail.png" 
                    alt="black mail icon"
                    className="w-10 my-3 mx-2" 
                    onClick={() => window.location.href = myEmail}/>
            </div>
        </div>
    )
}

export default Contact;