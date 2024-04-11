import React from "react";
import css from "./styles.module.css";
import { IoHeart } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { useFavoritesContext } from "../FavoritesContext/FavoritesContext";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item }) => {
  const { id, title, image, release_date, rating } = item;
  const { toggleFavorites } = useFavoritesContext();
  const navigate = useNavigate();

  const handleFav = () => {
    toggleFavorites(item);
  };

  const handleNavigate = (ev) => {
    const { target } = ev;

    if (target.nodeName === "BUTTON") {
      return;
    }
    navigate(`/details/${id}`);
  };

  return (
    <li onClick={handleNavigate} className={css.movieItem}>
      <ul className={css.optList}>
        <li>
          <button onClick={handleFav} className={css.optBtn}>
            <IoHeart className={css.optIcon} />
          </button>
        </li>
        <li>
          <button className={css.optBtn}>
            <FaRegTrashAlt className={css.optIcon} />
          </button>
        </li>
        <li>
          <button className={css.optBtn}>
            <FaPen className={css.optIcon} />
          </button>
        </li>
      </ul>
      <h2 className={css.title}>{title}</h2>
      <div className={css.thumb}>
        <img src={image} alt={`${title} poster`} />
      </div>
      <span className={css.date}>
        <MdDateRange />
        <span>{release_date}</span>
      </span>
      <span className={css.rating}>
        <CiStar />
        <span>{rating}</span>
      </span>
    </li>
  );
};

export default ListItem;
