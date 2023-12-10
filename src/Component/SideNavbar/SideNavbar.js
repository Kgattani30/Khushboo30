import React from 'react';
import "./SideNavbar.css";
import { Link } from 'react-router-dom';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";
import { BsTextareaT } from "react-icons/bs";


function SideNavbar() {
    return (
        <>
            <div className='sidenav'>
                <div className='sidenav_buttons'>
                    <Link className='link' to="#">
                        <button className="sidenav_button">
                            <BsTextareaT />
                            <span>Paraphraser</span>
                        </button>
                    </Link>
                    <Link className='link' to="/Summarizer">
                        <button className="sidenav_button">
                            <HiMiniBars3BottomLeft />
                            <span>Summarizer</span>
                        </button>
                    </Link>
                    <Link className='link' to="#">
                        <button className="sidenav_button">
                            <LuLanguages />
                            <span>Translator</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SideNavbar;