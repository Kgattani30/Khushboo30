import React from 'react';
import "./Textarea.css";
import { RiUploadCloud2Line } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";

function Textarea() {
  return (
    <>
      <div className='textareaContainer'>
        <div className='textCenter'>
          <div className='language'>
            <ul>
              <li>English(UK)</li>
              <li>Norwegian</li>
              <li>japanese</li>
              <li>German</li>
              <li>All</li>
            </ul>
          </div>
          <div className='Modes'>
            <ul>
              <li>Modes:</li>
              <li className='standard'>Standard</li>
              <li>Fluency</li>
              <li>Formal</li>
              <li>Academic</li>
              <li>Simple</li>
              <li>Creative</li>
              <li>Expand</li>
              <li>Shorten</li>
              <li>Custom</li>
            </ul>
          </div>
          <div className='textbox'>
            <div className='textleft'>
              <div>
                <textarea placeholder='To rewrite text, enter or paste it here and press"Paraphrase'></textarea>
                <button className='pastetext'>
                  <MdContentPaste className='pasteIcon' />
                  Paste Text
                </button>
              </div>
              <div className='paraContainer'>
                <button>
                  <RiUploadCloud2Line />
                  Upload Doc
                </button>
                <button>Summarizer</button>
              </div>
            </div>
            <div className='textright'>
              <textarea></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Textarea;