import './App.css';
import FoldableSection from './components/FoldableSection'
import { useState, useEffect } from "react"

const Home = () => {


    return (
        <div className="w-full h-full bg">
            <div className="flex flex-row">
                <div className="flex-0 w-60 bg-blue-300 h-screen">
                    <h1>this is menu</h1>
                    <li className="list-none">
                        <li>Introduction</li>
                        <li>Work Experience</li>
                        <li>Skill</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </li>
                </div>
                <div className="flex-1 bg-red-300">
                    {/* introduction */}
                    <FoldableSection title="Introduction"/>

                    <div
                        id="work experience"
                    >
                        <h1>Work Experience</h1>
                    </div>
                    <div id="skill">
                        <h1>Skill</h1>
                    </div>
                    <div id="project">
                        <h1>Project</h1>
                    </div>
                    <div id="contact">
                        <h1>Contact</h1>
                    </div>
                    {/* skill */}
                    {/* experience */}

                </div>
            </div>
            <footer className="w-full h-28 bg-gray-300">
                <h1>This is footer</h1>
            </footer>
        </div>
    )
}


export default Home