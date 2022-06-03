import axios from "axios";

const apiDirection = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page='

export const getMoviesServices = async () => {
  const movie1 = await axios.get(`${apiDirection}1`)
  const movie2 = await axios.get(`${apiDirection}2`)
  const movie3 = await axios.get(`${apiDirection}3`)
  const movie4 = await axios.get(`${apiDirection}4`)
  const movie5 = await axios.get(`${apiDirection}5`)

  const movies = movie1['data']['results'].concat(movie2['data']['results']).concat(movie3['data']['results']).concat(movie4['data']['results']).concat(movie5['data']['results'])

  console.log("res Axios ===>", movies);
  return movies
};

export const getAllMoviesServices = async (page) => {
  const movies = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=${page}`
  );

  console.log("res Axios ===>", movies.data.results);
  return movies.data.results;
};
