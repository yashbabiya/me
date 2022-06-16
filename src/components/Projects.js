import React, { useEffect, useState } from "react";
import {motion } from "framer-motion"
import useMouse from "../helpers/useMouse";
export default function Projects() {
  const stories = ["React","Node","TypeScript","Express","SCSS","MongoDB","JWT"]
  return (
    <div className="projects" id='projects'>
      <div className="top">
        <span>/02</span>
        <p className="highlight"><span>Projects</span></p>
      </div>
      {/* <hr /> */}
      <div className="mid">
        <p>Here’s Somethings I build with these.</p>
      </div>

      <div className="bottom">
        <div className="card">
        <motion.div 
          transition={{duration:.5}}
          initial={{ opacity: 0,y:100}}
          whileInView={{ opacity: 1,y:0}}
          
          className="left">
            <h1><b>|</b> STORIES</h1>
            <span>A story sharing website in MERN Stack.</span>
            <div className="btns">
              <a href="https://github.com/yashbabiya/Stories" target="blank">
                View Code
              </a>
              <a href="https://rocky-everglades-60417.herokuapp.com/" target="blank">
                Live Site
              </a>
            </div>
          </motion.div>
          <div className="right">
              <img src="/imgs/stories.png" alt="" />
          </div>
        </div>

        <div className="card rev">
          <motion.div 
          transition={{duration:.5}}
          initial={{ opacity: 0,y:100}}
          whileInView={{ opacity: 1,y:0}}
          
          className="left">
            <h1><b>|</b> Mobishop</h1>
            <span>An Ecommerce Website.</span>
            <div className="btns">
              <a href="https://github.com/yashbabiya/MobiShop" target="blank">
                View Code
              </a>
              
            </div>
          </motion.div>
          <div className="right">
              <img src="/imgs/mobishop.png" alt="" />
          </div>
        </div>

        <div className="card">
          
          <motion.div
          initial={{ opacity: 0,y:100}}
          whileInView={{ opacity: 1,y:0}}
          transition={{duration:.5}}
          
          className="left">
            <h1><b>|</b> NewsToday</h1>
            <span>An Api Based News app.</span>
            <div className="btns">
              <a href="https://github.com/yashbabiya/NewsToday" target="blank">
                View Code
              </a>
              <a href="https://the-news-today.netlify.app/" target="blank">
                Live Site
              </a>
              
            </div>
          </motion.div>
          <motion.div  className="right">
              <img src="/imgs/nt.png" alt="" />
          </motion.div>
        </div>

        <div className="card rev">
        <motion.div 
          transition={{duration:.5}}
          initial={{ opacity: 0,y:100}}
          whileInView={{ opacity: 1,y:0}}
          
          className="left">
            <h1><b>|</b> Web3 DocSaver</h1>
            <span>A Decentralized drive to store your documents.</span>
            <div className="btns">
              <a href="https://github.com/yashbabiya/web3-docSaver" target="blank">
                View Code
              </a>
              
            </div>
          </motion.div>
          <div className="right">
              <img src="/imgs/web3.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="all">
        <a href='https://github.com/yashbabiya' target='blanck'>View All</a>
        </div>

    </div>
  );
}
