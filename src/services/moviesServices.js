import axios from "axios";

export const getMoviesServices = async () => {
  const movies = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=1"
  );
  return movies.data;
};
