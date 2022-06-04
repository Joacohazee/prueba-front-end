import axios from "axios";

const apiDirection = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language='

export const getMoviesServices = async (lang) => {
  console.log('languages===> ',`${apiDirection}${lang}&page=1`)
  const movie1 = await axios.get(`${apiDirection}${lang}&page=1`)
  const movie2 = await axios.get(`${apiDirection}${lang}&page=2`)
  const movie3 = await axios.get(`${apiDirection}${lang}&page=3`)
  const movie4 = await axios.get(`${apiDirection}${lang}&page=4`)
  const movie5 = await axios.get(`${apiDirection}${lang}&page=5`)
  
  const movies = movie1['data']['results'].concat(movie2['data']['results']).concat(movie3['data']['results']).concat(movie4['data']['results']).concat(movie5['data']['results'])

  // console.log("res Axios ===>", movies);
  return movies
};