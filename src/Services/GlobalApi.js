import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "=db260266683027beb8397e85bd281cc2";

// https://api.themoviedb.org/3/trending/all/day?api_key=db260266683027beb8397e85bd281cc2
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key" + api_key
);

export default { getTrendingVideos };
