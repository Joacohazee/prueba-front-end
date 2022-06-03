import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/movies";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/private-theming";
import theme from "../styles/themeConfig";

const Home = () => {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  console.log("Data ===>", movies.results);

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        BUTTON
      </Button>
      <Button variant="contained" color="secondary">
        BUTTON
      </Button>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        delectus quaerat, aspernatur officia numquam labore natus illo nulla
        aliquid enim eaque earum hic voluptatem nihil accusantium corporis
        minima voluptatum dignissimos?
      </h1>
    </ThemeProvider>
  );
};

export default Home;
