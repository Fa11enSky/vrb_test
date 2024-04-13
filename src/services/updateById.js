import axios from "axios";

const updateById = async (updates, id) => {
  const { data } = await axios.put(`/films/${id}`, updates);
  return data;
};
export default updateById;
