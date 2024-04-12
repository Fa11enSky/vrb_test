import axios from "axios";

const deleteMovie = async (id) => {
  const { data } = await axios.delete(`/films/${id}`);
  return data;
};
export default deleteMovie;
