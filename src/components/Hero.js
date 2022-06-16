import { motion, transform } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <motion.div className="hero">
      <motion.h1

        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay:1.4 ,duration:.3,type:"tween"}}
      >
        Hello !
      </motion.h1>
      <motion.h1
        transition={{delay:1.5,duration:.3}}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="highlight"
      >
        I’m <span>Yash Babiya</span>
      </motion.h1>
      <motion.p>
        <span>
          <b>-</b>Full Stack Developer
        </span>
      </motion.p>
    </motion.div>
  );
}
