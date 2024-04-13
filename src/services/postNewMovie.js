import axios from "axios";

const postNewMovie = async (movie) => {
  const { data } = await axios.post("/films", movie);
  return data;
};
export default postNewMovie;
