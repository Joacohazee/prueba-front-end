import React, { useEffect } from "react";
import "../styles/home.css";
// import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getMovies } from "../store/movies";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import swal from "sweetalert";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.fact);
  const lang = useSelector((state) => state.languages.lang);
  const errorText = useSelector((state) => state.movies.error);

  if (errorText)
    swal({
      title: "Sorry",
      text: `${errorText}`,
      icon: "error",
      button: true,
    })
      .then(() =>
        swal({
          // title: "Sorry",
          text: "reload?",
          icon: "info",
          buttons: ['No', 'Yes'],
        })
      )
      .then((answ) => {
        if (answ) window.location.reload();
      });

  useEffect(() => {
    dispatch(getMovies(lang));
  }, [lang]);

  console.log("Data error ===>", errorText);

  return (
    <body>
      <Grid
        container
        spacing={2}
        wrap="wrap"
        sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      >
        {movies ? (
          movies.map((movie, i) => (
            <Grid item key={i}>
              <Cards data={movie} language={lang} />
            </Grid>
          ))
        ) : (
          <></>
        )}
      </Grid>
    </body>
  );
};

export default Home;
