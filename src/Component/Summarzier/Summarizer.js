import React from 'react';
import "./Summarizer.css";
import Textarea from '../Textarea/Textarea';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';

function Summarizer() {
    return (
        <>
            <div className='SummarizerContainer'>
                <div className='Paraphaser-textarea'>
                    <Textarea/>
                    <Table/>
                </div>
                <div className='Paraphaser-footer'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Summarizer;