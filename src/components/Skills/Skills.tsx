import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="mt-2 px-2">
            <p className="text-2xl pb-3">SKILLS</p>
            <div>
                <div className="pb-3">
                    <p className="text-left pl-3 text-xl">React - 80%</p>
                    <div className="bar bg-blue-500">
                        <div className="w-4/5 bg-white"></div>
                    </div>
                </div>

                <div className="pb-3">
                    <p className="text-left pl-3 text-xl">JavaScript, TypeScript - 85%</p>
                    <div className="bar bg-blue-500">
                        <div className="w-5/6 bg-white"></div>
                    </div>
                </div>

                <div className="pb-3">
                    <p className="text-left pl-3 text-xl">HTML, CSS - 90%</p>
                    <div className="bar bg-blue-500">
                        <div className="w-11/12 bg-white"></div>
                    </div>
                </div>

                <div className="pb-3">
                    <p className="text-left pl-3 text-xl">AWS Cloud Services - 70%</p>
                    <div className="bar bg-blue-500">
                        <div className="w-8/12 bg-white"></div>
                    </div>
                </div>

                <div className="pb-3">
                    <p className="text-left pl-3 text-xl">SQL, PostgreSQL - 75%</p>
                    <div className="bar bg-blue-500">
                        <div className="w-3/4 bg-white"></div>
                    </div>
                </div>

                <div className="pb-3">
                    <p className="text-left pl-3 text-xl">C# - 65%</p>
                    <div className="bar bg-blue-500">
                        <div className="w-4/6 bg-white"></div>
                    </div>
                </div>

                <div className="pb-3 pb-3">
                    <p className="text-left pl-3 text-xl">Unity - 60%</p>
                    <div className="bar bg-blue-500">
                        <div className="w-3/5 bg-white"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;