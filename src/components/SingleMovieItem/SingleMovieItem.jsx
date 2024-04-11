import React from "react";
import css from "./styles.module.css";
import { CiStar } from "react-icons/ci";
const SingleMovieItem = ({ item }) => {
  const { title, image, director, actors, genre, description, rating } = item;
  return (
    <section>
      <aside className={css.about}>
        <div className={css.thumb}>
          <img src={image} alt={`${title}_poster`} />
        </div>
        <div className={css.infoWrapper}>
          <h1 className={css.title}>{title}</h1>
          <p className={css.description}>{description}</p>
          <span className={css.rating}>
            <CiStar />
            {rating}
          </span>
          <span className={css.director}>Director: {director}</span>
          <div className={css.genresWrapper}>
            <span className={css.genresTitle}>Genres:</span>
            <ul>
              {genre.map((el) => (
                <li className={css.genreList} key={el}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div className={css.actorsWrapper}>
            <span className={css.actorsTitle}>Actors:</span>
            <ul>
              {actors.map((el) => (
                <li className={css.actorsList} key={el}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default SingleMovieItem;
