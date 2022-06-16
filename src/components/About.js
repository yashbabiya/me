import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [Y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className="about" id="about">
      <div className="top ">
        <span>/01</span>
        <p className="highlight">
          <span>About</span>
        </p>
      </div>
      {/* <hr /> */}
      <div className="mid">
        <div className="mega">
        <motion.pre
          transition={{ ease: "circOut" }}
          animate={{ x: -Y + 1000 }}
          viewport={{ once: true }}
        >
          I'M PASSIONATE ABOUT WEB
        </motion.pre>
        <motion.pre
          animate={{ x: Y - 1000 }}
          viewport={{ once: true }}
          transition={{ ease: "circOut" }}
        >
          AND I LOVE TO DEVELOP
        </motion.pre>
        <motion.pre
          transition={{ ease: "circOut" }}
          animate={{ x: -Y + 1000 }}
          viewport={{ once: true }}
          className="highlight"
        >
          WEBSITES USING MY <span>SKILLSET</span>.
        </motion.pre>
        </div>
        <div className="mini highlight">
          <h1>
            I'M PASSIONATE ABOUT WEB AND I LOVE TO DEVELOP WEBSITES USING MY{" "}
            <span>SKILLSET</span>.
          </h1>
        </div>
      </div>

      <motion.div
        // transition={{ ease: "circOut", duration: 0.4 }}
        viewport={{ once: true }}
        className="bottom"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="basics">
          <span>Basics</span>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </div>
        <div className="stylings">
          <span>Stylings</span>
          <li>SCSS</li>
          <li>Framer</li>
        </div>
        <div className="frameworks">
          <span>FrameWorks</span>
          <li>TypeScript</li>
          <li>React</li>
        </div>
        <div className="backend">
          <span>Backend</span>
          <li>Node</li>
          <li>Express</li>
        </div>
        <div className="dbs">
          <span>DataBase & Tools</span>
          <li>MongoDB</li>
          <li>PgAdmin</li>
          <li>TypeORM</li>
        </div>
      </motion.div>
    </div>
  );
}
