import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import {motion } from 'framer-motion'

function App() {
  return (
    <div className="App">
      <div className="app">
      <motion.div className="landing"

      transition={{delay:1,duration:10,type:"spring"}}
      animate={{y:-10000}}
      >Good to see you !!</motion.div>
      <Header/>
      
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        
      </Routes>
      </div>
    </div>
  );
}

export default App;
