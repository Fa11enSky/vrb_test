import React, { useRef, useState } from "react";
import css from "./styles.module.css";
import { CiCirclePlus } from "react-icons/ci";
import uploadImageToCloudinary from "../../services/uploadImage";
import updateById from "../../services/updateById";
import { useMoviesContext } from "../MoviesContext/MoviesContext";
import { Notify } from "notiflix";
const ModalUpdate = ({ movie, close }) => {
  const [title, setTitle] = useState(movie.title);
  const [director, setDirector] = useState(movie.director);
  const [actors, setActors] = useState(movie.actors.join(","));
  const [imageUrl, setImageUrl] = useState(movie.image);
  const [date, setDate] = useState(movie.release_date);
  const [rating, setRating] = useState(movie.rating.toString());
  const [description, setDescription] = useState(movie.description);
  const { movies, setMovies, favorites, setFavorites } = useMoviesContext();
  const imageInputRef = useRef(null);

  const handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "director":
        setDirector(value);
        break;
      case "actors":
        setActors(value);
        break;
      case "date":
        setDate(value);
        break;
      case "rating":
        setRating(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = {
      title: title.trim(),
      director: director.trim(),
      actors: actors.split(","),
      image: imageUrl,
      release_date: date,
      rating,
      description: description.trim(),
    };
    if (imageUrl !== movie.image) {
      const file = imageInputRef.current.files[0];
      const newUrlImg = await uploadImageToCloudinary(file);
      updateData.image = newUrlImg;
    }
    try {
      const data = await updateById(updateData, movie._id);
      const id = movies.findIndex((el) => el._id === data._id);
      const updatedMovieList = [...movies];
      updatedMovieList.splice(id, 1, data);
      setMovies(updatedMovieList);
      const favId = favorites.findIndex((el) => el._id === data._id);
      if (favId !== -1) {
        const updateFav = [...favorites];
        updateFav.splice(favId, 1, data);
        setFavorites(updateFav);
      }
      Notify.success("Movie updated successfully");
      close();
    } catch (error) {
      Notify.failure(e.message);
    }
  };

  return (
    <form className={css.formEdit} onSubmit={handleSubmit}>
      <p className={css.formTitle}> Edit movie data</p>
      <label className={css.imageLabel} htmlFor="image">
        <img src={imageUrl || movie.image} alt="poster" width={100} />
        <CiCirclePlus className={css.plus} />

        <input
          ref={imageInputRef}
          className={css.imageInput}
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
      <label>
        Title
        <input
          onChange={handleInput}
          type="text"
          name="title"
          id="title"
          value={title}
        />
      </label>
      <label>
        Rating (1.0...10)
        <input
          onChange={handleInput}
          type="string"
          name="rating"
          id="rating"
          value={rating}
          pattern="[0-9]{1,2}(\.[0-9]{1,2})?"
        />
      </label>
      <label>
        Director
        <input
          onChange={handleInput}
          type="text"
          name="director"
          id="director"
          value={director}
        />
      </label>
      <label>
        Actors{" "}
        <input
          onChange={handleInput}
          type="text"
          name="actors"
          id="actors"
          value={actors}
        />
      </label>
      <label>
        Release date (YYYY-MM-DD)
        <input
          onChange={handleInput}
          type="text"
          name="date"
          id="date"
          value={date}
          pattern="\d{4}-\d{2}-\d{2}"
        />
      </label>
      <label>
        Description
        <textarea
          onChange={handleInput}
          type="text"
          name="description"
          id="description"
          value={description}
        />
      </label>
      <button className={css.smbBtn} type="submit">
        Edit
      </button>
    </form>
  );
};

export default ModalUpdate;
