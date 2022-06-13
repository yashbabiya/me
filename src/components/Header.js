import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [keyWord, setKeyWord] = useState("");

  return (
    <div className="header">
      <div className="top">
        <Link to="/">
          <h1>News Today</h1>
        </Link>
      </div>

      <div className="bottom">
        <div className="links">

        <Link to={`/category?q=sports`}>Sports</Link>
        <Link to={`/category?q=entertainment`}>Entertainment</Link>
        <Link to={`/category?q=business`}>Business</Link>
        <Link to={`/category?q=technology`}>Technology</Link>
        <Link to={`/category?q=health`}>Health</Link>
        <Link to={`/category?q=science`}>Science</Link>
        </div>

        
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              setKeyWord(e.target.value);
            }}
          />
          <Link to={`/search?q=${keyWord}`}><i className='im im-magnifier'></i></Link>
        </div>
      </div>

      {/* <Link to='/'>Home</Link> */}
      <br />
    </div>
  );
}
