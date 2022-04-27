import { useState, useEffect } from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"


const icon_size = 40

const Footer = () => {


    return (
        <footer className="flex-none flex flex-col">
            <span className="mx-auto">Created by Hasuzawa</span>
            <span className="m-2 flex flex-row justify-evenly">
                <a href="https://github.com/Hasuzawa/homepage4">
                    <AiFillGithub size={icon_size} />
                </a>
                <a href="">
                    <AiFillLinkedin size={icon_size} />
                </a>
            </span>
        </footer>
    )
}


export default Footer