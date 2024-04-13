import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";
import { MoviesProvider } from "./components/MoviesContext/MoviesContext";

const Movies = lazy(() => import("./pages/Movies"));
const Favorites = lazy(() => import("./pages/Favorites"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
function App() {
  return (
    <div className="container">
      <MoviesProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="details/:id" element={<DetailsPage />} />
          </Route>
          <Route path="*" element={"<div>not found</div>"} />
        </Routes>
      </MoviesProvider>
    </div>
  );
}

export default App;
