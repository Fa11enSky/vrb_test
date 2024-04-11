import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout/Layout";
import { FavoritesProvider } from "./components/FavoritesContext/FavoritesContext";

function App() {
  return (
    <div className="container">
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
          <Route path="*" element={"<div>not found</div>"} />
        </Routes>
      </FavoritesProvider>
    </div>
  );
}

export default App;
