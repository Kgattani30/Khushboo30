import React from 'react';
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='FooterContainer'>
                <div className="Foot-80">
                    <div className='Foot-60'>
                        <div className='Foot-30'>
                            <div className='center'>
                                <ul>
                                    <li>Writing Tools</li>
                                    <li>Paraphrasing Tool</li>
                                    <li>Summarizer</li>
                                    <li>Co-Writer</li>
                                    <li>Plagiarism Checker</li>
                                    <li>Word Counter</li>
                                    <li>Translator</li>
                                </ul>
                                <ul>
                                    <li>Free Grammar Tools</li>
                                    <li>Grammar Checker</li>
                                    <li>Essay Checker</li>
                                    <li>Punctuation Checker</li>
                                    <li>Spell Checker</li>
                                    <li>Proofreader</li>
                                </ul>
                                <ul>
                                    <li>Citation Tools</li>
                                    <li>Citation Generator</li>
                                    <li>MLA Citation Generator</li>
                                    <li>APA Citation Generator</li>
                                </ul>
                                <ul>
                                    <li>Company</li>
                                    <li>Team</li>
                                    <li>Careers</li>
                                    <li>Help Center</li>
                                    <li>Contact Us</li>
                                    <li>Join Us on Discord</li>
                                </ul>
                                <ul>
                                    <li>Extensions</li>
                                    <li>QuillBot for Chrome</li>
                                    <li>QuillBot for Word</li>
                                    <li>QuillBot for macOS</li>
                                </ul>
                                <ul>
                                    <li>Student Resources</li>
                                    <li>Tools & Videos</li>
                                    <li>Educational Courses</li>
                                </ul>
                                <ul>
                                    <li>Knowledge Base</li>
                                    <li>Paraphrasing Guide</li>
                                    <li>AI Writing Assistant</li>
                                    <li>QuillBot Blog</li>
                                </ul>
                                <ul>
                                    <li>Services</li>
                                    <li>Premium</li>
                                    <li>Team Plan</li>
                                    <li>Affiliate</li>
                                    <li>Request a Demo</li>
                                </ul>
                                <ul>
                                    <li>Services</li>
                                    <li>Premium</li>
                                    <li>Team Plan</li>
                                    <li>Affiliate</li>
                                    <li>Request a Demo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='Foot-40'>
                        <h5>Get to Know Us</h5>
                        <div className='Foot-icon'>
                        <FaLinkedinIn />
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className="Foot-20">
                    <div className='Foot-60'>
                        <p>QuillBot, a learneo Inc. businees. Copyright (C) 2023 learneo, Inc.</p>
                        <p>This site is protected by reCAPTHA and the Google Privacy Policy and Terms of Service apply</p>
                    </div>
                    <div className='Foot-40'>
                        <p>Made with at UIUC v14.686.1</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;