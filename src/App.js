import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplaySummarizer from './Component/DisplaySummarizer/DisplaySummarizer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<DisplaySummarizer/>} />
          <Route path='/Summarizer' element={<DisplaySummarizer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
