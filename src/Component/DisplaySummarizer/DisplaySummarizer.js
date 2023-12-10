import React from 'react';
import "../Display/Display.css";
import SideNavbar from '../SideNavbar/SideNavbar';
import Summarizer from '../Summarzier/Summarizer';

function DisplaySummarizer() {
    return (
        <>
            <div className='DisplayContainer'>
                <div className='div1'>
                <SideNavbar/>
                </div>
                <div className='div2'>
                <Summarizer/>
                </div>
            </div>
        </>
    )
}

export default DisplaySummarizer;