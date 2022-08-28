import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="mt-2 px-2">
            <p className="text-4xl pb-3 font-bold line-through">SKILLS</p>
            <div>
                <div className="pb-3 bg-black rounded-lg">
                    <p className="text-left pl-3 pt-2 text-xl font-bold text-yellow-400">React - 80%</p>
                    <div className="bar bg-white mx-4 my-2">
                        <div className="w-4/5 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 bg-black rounded-lg">
                    <p className="text-left pl-3 pt-2 text-xl font-bold text-yellow-400">JavaScript, TypeScript - 85%</p>
                    <div className="bar bg-white mx-4 my-2">
                        <div className="w-5/6 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 bg-black rounded-lg">
                    <p className="text-left pl-3 pt-2 text-xl font-bold text-yellow-400">HTML, CSS - 90%</p>
                    <div className="bar bg-white mx-4 my-2">
                        <div className="w-11/12 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 bg-black rounded-lg">
                    <p className="text-left pl-3 pt-2 text-xl font-bold text-yellow-400">AWS Cloud Services - 70%</p>
                    <div className="bar bg-white mx-4 my-2">
                        <div className="w-8/12 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 bg-black rounded-lg">
                    <p className="text-left pl-3 pt-2 text-xl font-bold text-yellow-400">SQL, PostgreSQL - 75%</p>
                    <div className="bar bg-white mx-4 my-2">
                        <div className="w-3/4 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 bg-black rounded-lg">
                    <p className="text-left pl-3 pt-2 text-xl font-bold text-yellow-400">C# - 65%</p>
                    <div className="bar bg-white mx-4 my-2">
                        <div className="w-4/6 bg-blue-500"></div>
                    </div>
                </div>

                <div className="pb-3 bg-black rounded-lg">
                    <p className="text-left pl-3 pt-2 text-xl font-bold text-yellow-400">Unity - 60%</p>
                    <div className="bar bg-white mx-4 my-2">
                        <div className="w-3/5 bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;