import React, { useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getMovies } from "../store/movies";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.fact);

  useEffect(() => {
    dispatch(getMovies())

  }, []);

  console.log("Data ===>", movies);

  return (
    <div>
      <Button variant="contained" color="primary">
        BUTTON
      </Button>
      <Button variant="contained" color="secondary">
        BUTTON
      </Button>
      <Grid
        container
        spacing={2}
        wrap="wrap"
        sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      >
        { movies? (movies).map((movie, i) => (
          <Grid item key={i}>
            <Cards data={movie} />
          </Grid>
        )) : <></>}
      </Grid>
    </div>
  );
};

export default Home;
