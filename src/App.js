import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/search' element={<SearchResults />}></Route>
        <Route exact path='/category' element={<Category />}></Route>
      </Routes>
    </div>
  );
}

export default App;
