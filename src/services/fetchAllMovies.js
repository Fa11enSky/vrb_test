import axios from "axios";

axios.defaults.baseURL = "https://65fa44ea3909a9a65b1a17dd.mockapi.io/api/v1/";

const fetchAllMovies = async () => {
  try {
    const { data } = await axios.get("films");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default fetchAllMovies;
