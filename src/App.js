import './App.css'
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className='container'>
      
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Movies/>}/>
            <Route path="favorites" element={<Favorites/>}/>
          </Route>
          <Route path="*" element={"<div>not found</div>"}/>
       </Routes>
    </div>
    
  );
}

export default App;
