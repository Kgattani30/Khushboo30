import React from 'react';
import "./Table.css";

function Table() {
    return (
        <>
            <div className='table'>
                <div className='tableHeading'>
                    <h1>Summarize any text with a click of a button</h1>
                    <p>QuillBot's Summarizer can condense articles, papers, or documents down to the key points instantly. Our AI uses natural language processing to locate critical information while maintaining the original context.</p>
                </div>
                <div className='tableContainer'>
                    <div className='tablebox'>
                        <div className='tableCard'>
                            <div>
                                <p>AI-powered</p>
                                <p>Summarizes</p>
                                <p>AI modes</p>
                                <p>100% free</p>
                            </div>
                            <div>
                                <p>Quickly extracts key points</p>
                                <p>Essays, papers & documents</p>
                                <p>Key Sentences & Paragraph</p>
                                <p>Unlimited summarization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;