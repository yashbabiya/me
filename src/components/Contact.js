import React from "react";

export default function Contact() {
  
  return (
    <div className="contact page" id='contact'>
      <div className="top">
        <span>/03</span>
        <p className="highlight"><span>Contact</span></p>
      </div>

      {/* <hr /> */}
      <div className="bottom">
        <span>It would be my pleasure talking to you</span>
        <h1>yashbabiya18@gmail.com | +919712396547 </h1>
        <div className="social">
          <a href="https://twitter.com/BabiyaYash">
            <i className="im im-twitter"></i>
          </a>
          <a href="https://github.com/yashbabiya">
            <i className="im im-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/babiya-yash-a79a461b8/">
            <i className="im im-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/babiya.217/">
            <i className="im im-instagram"></i>
          </a>
          
        </div>
      </div>
    </div>
  );
}
