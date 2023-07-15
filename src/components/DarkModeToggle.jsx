'use client'
import  "@/styles/darkModeToggle.css";
import { useState } from "react";

const DarkModeToggle = () => {

  return (
    <div className='darkModeContainer' onClick={()=>setMode(!mode)}>
      <div className='darkModeMoon'>🌙</div>
      <div className='darkModeSun'>☀</div>
      <div className='darkModeBall'  style={mode ? {left: '2px'} : {right: '2px'}} />
    </div>
  );
};

export default DarkModeToggle;
