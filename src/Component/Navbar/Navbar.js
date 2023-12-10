import React, { useState } from 'react';
import logo from '../../Image/logo.png';
import { FaEarthAfrica } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";
import { BsTextareaT } from "react-icons/bs";

import "./Navbar.css";

function Navbar() {
  const [slide, SetSlide] = useState(false);

  const handleDisplay = () =>{
    SetSlide(!slide)
    console.log(slide)
  }

  const handlenavSlide = {
    transition: 'transform 0.3s ease-in-out',
    transform: slide ? 'translateX(0)' : 'translateX(-475px)',
  };

  return (
    <>

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Quill Bot" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button type="button" class="search-button">Search</button>
        </div>
        <div className="profile">
          <FaBarsStaggered className='earth Staggered' onClick={()=>handleDisplay()} />
          <FaEarthAfrica className='earth' />
        </div>
      </nav>
      <div className='sidenav navSlide' style={handlenavSlide}>
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

export default Navbar;




