import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";


export default function Home() {

  

  return (
    <>
    <div className="page">
      
      <Hero />
      <About />
      <Projects/>
   
    </div>
      <Contact/>
    </>
  );
}
