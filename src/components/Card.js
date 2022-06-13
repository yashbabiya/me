import React, { useEffect, useState } from "react";
import useMouse from "../helpers/useMouse";



export default function Card({ key, news, index, length, refer }) {

    const { x, y } = useMouse();
    const [hover, setHover] = useState(false);
    const widthOfScreen = window.screen.availWidth;
    const styleHover={
        display:"block",
        position:"absolute",
        top:y+10,
        left:x+10,
        width:400,
        
    }
    
    useEffect(() => {

      console.log(widthOfScreen);
      
    }, []);
   
  return (
    <div key={index} ref={refer} className="card"
    onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
    >
        <h2>/{index+1}</h2>
      <h2>{news.title}</h2>
      <div className="top" style={hover&&(widthOfScreen>1035) ? styleHover : {}}>
        <div className="img">
          <img src={news.urlToImage} alt=""></img>
        </div>

      </div>
      <div className="card-content">
        {/* <p>{news.description}</p> */}
        <p className='auther'>-- {news.author}</p>
      </div>

      <div>
          <p>{news.content}</p>
          <a href={news.url} target="_blank">Read more <i id='sml' className='im im-paperplane'></i></a>
      </div>
     
    </div>
  );
}
