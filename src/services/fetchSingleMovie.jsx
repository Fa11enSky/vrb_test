import axios from "axios"

const fetchSingleMovie = async(id) => {
    const { data } = await axios.get(`/films/?id=${id}`)
    // через дивну відповідь mokapi 🤗
    return data[0]
}
export default fetchSingleMovie