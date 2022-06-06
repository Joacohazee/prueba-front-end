import axios from "axios";

let apiDirection;

const failedProbability = () => {
  let randomNum = Math.floor(Math.random() * 100);
  randomNum < 15
    ? (apiDirection = "otherDirection")
    : (apiDirection =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=");
  console.log("RANDOMnUM===> ", randomNum);
};

failedProbability();

export const getMoviesServices = async (lang) => {
  console.log("languages===> ", `${apiDirection}${lang}&page=1`);
  const movie1 = await axios.get(`${apiDirection}${lang}&page=1`);
  const movie2 = await axios.get(`${apiDirection}${lang}&page=2`);
  const movie3 = await axios.get(`${apiDirection}${lang}&page=3`);
  const movie4 = await axios.get(`${apiDirection}${lang}&page=4`);
  const movie5 = await axios.get(`${apiDirection}${lang}&page=5`);

  const movies = movie1["data"]["results"]
    .concat(movie2["data"]["results"])
    .concat(movie3["data"]["results"])
    .concat(movie4["data"]["results"])
    .concat(movie5["data"]["results"]);

  return movies;
};

export const factFilteredServices = (data) => {
  const [ idiom, movies ] = data
  const factFiltered = movies.filter( movie => movie['original_language'] === idiom)
  // console.log('filterrrrrrr',factFiltered)
  return factFiltered
}