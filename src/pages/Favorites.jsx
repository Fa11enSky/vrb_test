import MoviesList from "../components/MoviesList/MoviesList";
import { useFavoritesContext } from "../components/FavoritesContext/FavoritesContext";

const Favorites = () => {
  const { favorites, permanentDelete } = useFavoritesContext();
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
