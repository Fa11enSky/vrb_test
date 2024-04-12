import MoviesList from "../components/MoviesList/MoviesList";
import { useMoviesContext } from "../components/MoviesContext/MoviesContext";

const Favorites = () => {
  const { favorites, permanentDelete } = useMoviesContext();
  return (
    <section>
      {favorites.length > 0 ? (
        <MoviesList toDelete={permanentDelete} data={favorites} />
      ) : (
        <div>First need add to fav</div>
      )}
    </section>
  );
};

export default Favorites;
