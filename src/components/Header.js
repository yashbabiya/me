import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [style, setS] = useState({});
  const show = (open)=>{
    if(open)
    setS({
      transform:'translateX(0)'
    })
    else
    setS({
      transform:'translateX(1000px)'
    })
  }
  return (
    <div className="header page">
       <div className="left">© Developed by Yash</div> 
       <div className="right">
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
          <a href="/file/Yash's Resume.pdf" target="blanck"><div className="resume">Download Resume</div></a>
          
       </div>
          <div className="burger" onClick={()=>show(true)}><i className="im im-menu"></i></div>
       <div className="menu page" style={style}>
          <p onClick={()=>show(false)}> <i className="im im-x-mark-circle"></i> </p>
          <a href='#about' onClick={()=>show(false)}>About</a>
          <a href='#projects' onClick={()=>show(false)}>Projects</a>
          <a href='#contact' onClick={()=>show(false)}>Contact</a>
          <a href="/file/Yash's Resume.pdf" target="blanck" onClick={()=>show(false)}><div className="resume">Download Resume</div></a>
       </div>
    </div>
  );
}
