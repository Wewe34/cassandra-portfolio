import React from "react";
import { myLinkedInURL } from "../../utils/constants";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="py-20 md:max-w-2xl md:m-auto">
            <div id="resume-container" className="bg-white bg-opacity-70 rounded-lg mx-3 pb-3">
                <p className="text-4xl pb-3 font-bold line-through pt-10">RESUME</p>
                <div id="work-experience" className="mx-3">
                    <p className="pb-3 italic">I'm loving my growth.</p>
                    <p className="pb-3">Visit my 
                        <a href={myLinkedInURL} className="pl-1">
                            <span className="font-bold underline text-blue-500">LinkedIn</span>
                        </a>.
                    </p>
                    <p className="text-2xl font-bold pb-3">Work Experience</p>
                    <div className="text-left mx-2 bg-white rounded-lg bg-opacity-70">
                        <div id="job-1" className="mx-3">
                            <p className="text-lg text-blue-500 font-bold pt-3">Cognizant Technology Solutions</p>
                            <p>Software Engineer Contractor</p>
                            <p className="text-sm pb-3">March 2021 - present</p>
                            <ul>
                                <li>Developed UI components using React.js, Tailwind, TypeScript and CSS.</li>
                                <li>Created GraphQL queries to consume data from backend</li>
                                <li>
                                    Lead the process of releasing new features to the clients by making request of changes to go
                                    into production and deploying application into production through Azure DevOps
                                </li>
                                <li>Fixed bugs and found solutions in timely manner</li>
                                <li>
                                    Integrated Microsoft Azure App Insights into the application to track user action and detect issues.
                                </li>
                                <li>
                                    Collaborated with developers, UX designers, managers and clients to solve problems 
                                    and meet deadlines
                                </li>
                                <li>Engaged in Agile methodologies for team collaboration, planning and product delivery</li>
                                <li>Manipulated data locally using SQL queries in PgAdmin to aid in development</li>
                                <li>Reviewed pull requests by providing comments and approvals to merge to main branch</li>
                            </ul>
                        </div>
                        <div id="job-2" className="mx-3 pb-4">
                            <p className="text-lg text-blue-500 font-bold pt-3">Revature</p>
                            <p>Software Engineer</p>
                            <p className="text-sm pb-3">December 2020 - present</p>
                            <ul>
                                <li>Contracted out to a company to help produce and deliver a web application to their clients</li>
                                <li>
                                    Expanded on my existing skills and acquired new knowledge of technologies by undergoing a 
                                    13-week training in fullstack React and React Native applications
                                </li>
                                <li>Worked with team members to produce fullstack application projects</li>
                                <li>Fixed bugs and found solutions in timely manner</li>
                                <li>Showcased soft skills of public speaking by demoing team project to clients and other teams</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="education" className="mx-3">
                    <p className="text-2xl font-bold py-3">Education</p>
                    <div className="text-left mx-2 px-3 py-3 bg-white rounded-lg bg-opacity-70">
                        <div id="education-1" className="pb-3">
                            <p className="font-bold text-blue-500">FULLSTACK WEB DEVELOPMENT IMMERSIVE</p>
                            <p className="font-bold">Fullstack Academy</p>
                            <p>February 2019 - May 2019</p>
                            <p className="text-gray-500 italic">
                                *Three month intensive coding bootcamp gaining skills in fullstack web development, 
                                data structures, algorithms and Test Driven Development.
                            </p>
                        </div>
                        <div id="education-2">
                            <p className="font-bold text-blue-500">ASSOCIATE OF SCIENCE, ACCOUNTING</p>
                            <p className="font-bold">Ivy Tech Community College</p>
                            <p>August 2017 - December 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;