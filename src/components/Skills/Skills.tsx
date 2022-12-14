import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="mt-2 px-2 bg-white bg-opacity-70 mx-3 pt-3 rounded-lg md:max-w-2xl md:m-auto">
            <p className="text-4xl py-7 font-bold">SKILLS</p>
            <div className="pb-3 mx-3">
                <p className="pb-5 italic">I'm not scared to say "I don't know."</p>
                <p className="pb-5">I'm personable, logical, hardworking, a lover of solving problems 
                                and a lifelong curious learner. 
                </p>
                <div className="pb-3 mb-2 bg-white rounded-lg">
                    <p className="text-left pl-3 pt-2 text-lg font-bold text-black">React... 90%</p>
                    <div className="bar bg-white border-2 mx-4 my-2">
                        <div className="w-11/12 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 mb-2 bg-white rounded-lg">
                    <p className="text-left pl-3 pt-2 text-lg font-bold text-black">JavaScript, TypeScript... 90%</p>
                    <div className="bar bg-white border-2 mx-4 my-2">
                        <div className="w-11/12 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 mb-2 bg-white rounded-lg">
                    <p className="text-left pl-3 pt-2 text-lg font-bold text-black">HTML, CSS... 90%</p>
                    <div className="bar bg-white border-2 mx-4 my-2">
                        <div className="w-11/12 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 mb-2 bg-white rounded-lg">
                    <p className="text-left pl-3 pt-2 text-lg font-bold text-black">AWS Cloud Services... 70%</p>
                    <div className="bar bg-white border-2 mx-4 my-2">
                        <div className="w-8/12 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 mb-2 bg-white rounded-lg">
                    <p className="text-left pl-3 pt-2 text-lg font-bold text-black">SQL, PostgreSQL... 75%</p>
                    <div className="bar bg-white border-2 mx-4 my-2">
                        <div className="w-3/4 bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;