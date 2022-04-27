import './App.css';
import FoldableSection from './components/FoldableSection'
import { useState, useEffect } from "react"
import Navigation from './components/Navigation';
import Footer from './components/Footer';



const Home = () => {


    return (
        <div className="w-full h-full bg" id="home">
            <div className="flex flex-row">

                <div className="flex flex-col flex-0 w-60 h-screen p-4 border-r-2" id="side-menu">
                    <h1 className="flex-none text-2xl text-center p-2 border-b-2">
                        Hasuzawa@Home
                    </h1>
                    <Navigation />
                    <Footer />
                </div>




                <main className="flex-1 bg-red-300">
                    {/* introduction */}
                    <FoldableSection
                        title="Introduction"
                        content={<h1 className="text-3xl">Hi! I am developer working in Tokyo, Japan.</h1>}
                        id="introduction"
                    />
                    <FoldableSection
                        title="Work Experience"
                        content={
                            <ul>
                                <li>
                                    <h3>Fullstack Developer</h3>
                                    <ul>
                                        <li><span>Created React app with Java backend</span></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Database &amp; Linux Administrator</h3>
                                </li>
                            </ul>
                        }
                        id="work-experience"
                    />
                    <FoldableSection
                        title="Skill"
                        content={<></>}
                        id="skill"
                    />
                    <FoldableSection
                        title="Project"
                        content={<></>}
                        id="project"
                    />
                    <FoldableSection
                        title="Contact"
                        content={<></>}
                        id="contact"
                    />
                </main>
            </div>
        </div>
    )
}


export default Home