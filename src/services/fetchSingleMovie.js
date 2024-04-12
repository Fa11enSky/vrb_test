import axios from "axios";

const fetchSingleMovie = async (id) => {
  const { data } = await axios.get(`/films/${id}`);
  return data;
};
export default fetchSingleMovie;
