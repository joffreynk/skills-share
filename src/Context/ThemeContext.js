"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');
  useEffect(() => {
    setMode((localStorage.getItem('skills-share-mode') && JSON.parse(localStorage.getItem('skills-share-mode'))) || 'dark')
  }, [])
  const toggle = () =>{
    setMode((prev)=>{
      const newMode  = prev ==='light' ? 'dark' : 'light';
      localStorage.setItem('skills-share-mode', JSON.stringify(newMode));
      return newMode;
    });
  }

  return (<ThemeContext.Provider value={{mode, toggle}}>
    <div className={`theme ${mode}`}>{children}</div>
  </ThemeContext.Provider>)
};
