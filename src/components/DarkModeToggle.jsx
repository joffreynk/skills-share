'use client'
import { ThemeContext } from "@/Context/ThemeContext";
import  "@/styles/darkModeToggle.css";
import { useContext } from "react";

const DarkModeToggle = () => {
const {mode, toggle} = useContext(ThemeContext)
  return (
    <div className='darkModeContainer' onClick={toggle}>
      <div className='darkModeMoon'>🌙</div>
      <div className='darkModeSun'>☀</div>
      <div className='darkModeBall'  style={mode ==='light' ? {left: '2px'} : {right: '2px'}} />
    </div>
  );
};

export default DarkModeToggle;
