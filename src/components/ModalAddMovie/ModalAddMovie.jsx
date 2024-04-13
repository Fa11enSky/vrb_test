import React, { useRef, useState } from "react";
import css from "./styles.module.css";
import { useMoviesContext } from "../../providers/MoviesContext/MoviesContext";
import { CiCirclePlus } from "react-icons/ci";
import uploadImageToCloudinary from "../../services/uploadImage";
import postNewMovie from "../../services/postNewMovie";
import { Notify } from "notiflix";
const ModalAddMovie = ({ close }) => {
  const { movies, setMovies } = useMoviesContext();
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

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
    if (
      !title ||
      !director ||
      !actors.trim() ||
      !date ||
      !rating ||
      !description
    ) {
      Notify.failure("All fields is required");
      return;
    }
    const movieObj = {
      title: title.trim(),
      director: director.trim(),
      actors: actors.split(","),
      image: imageUrl,
      release_date: date,
      rating,
      description: description.trim(),
    };
    if (imageUrl) {
      const file = imageInputRef.current.files[0];
      const newUrlImg = await uploadImageToCloudinary(file);
      movieObj.image = newUrlImg;
    }
    try {
      const data = await postNewMovie(movieObj);
      const updatedMovieList = [...movies, data];
      setMovies(updatedMovieList);
      close();
      Notify.success("Movie added successfully");
    } catch (e) {
      Notify.failure(e.message);
    }
  };
  return (
    <form className={css.formAdd} onSubmit={handleSubmit}>
      <p className={css.formTitle}> Add movie</p>
      <label className={css.imageLabel} htmlFor="image">
        {imageUrl ? (
          <img src={imageUrl} alt="poster" width={100} />
        ) : (
          <div>POSTER</div>
        )}
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
        Add
      </button>
    </form>
  );
};

export default ModalAddMovie;
