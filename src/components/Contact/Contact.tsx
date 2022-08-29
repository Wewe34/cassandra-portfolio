import React from "react";
import { myGithubURL, myLinkedInURL, myEmail } from "../../utils/constants";

const Contact = () => {
    return (
        <div className="bg-yellow-400 p-3 mt-10">
            <div className="flex justify-center justify-evenly">
                <img 
                    src="/LI-Logo.png" 
                    alt="blue square with white letters"
                    className="w-22 h-6 my-4 mx-2"
                    onClick={() => window.location.href = myLinkedInURL} />
                <img 
                    src="/GitHub_Logo.png" 
                    alt="cartoon person in black cat suit"
                    className="w-20 h-8 my-3 mx-2 rounded-md"
                    onClick={() => window.location.href = myGithubURL} />

                <a 
                    href={myEmail}
                    className="text-blue-600 font-bold text-xl my-4 mx-2">Email Me</a>
            </div>
        </div>
    )
}

export default Contact;