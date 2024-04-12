import React, { useEffect, useState } from "react";
import fetchSingleMovie from "../services/fetchSingleMovie";
import { useParams } from "react-router-dom";
import SingleMovieItem from "../components/SingleMovieItem/SingleMovieItem";

const DetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchSingleMovie(id)
      .then((data) => setMovie(data))
  }, [id]);
  return <>{movie && <SingleMovieItem item={movie} />} </>;
};

export default DetailsPage;
