import React, { useEffect } from "react";
import Cards from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/movies";
import { Box, Grid } from "@mui/material";
import swal from "sweetalert";
import LoadPage from "../commons/LoadPage";

const Home = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.mode.isDark);
  const movies = useSelector((state) => state.movies.fact);
  const errorText = useSelector((state) => state.movies.error);
  const isLoad = useSelector((state) => state.movies.loading);

  if (errorText)
    swal({
      title: "Sorry",
      text: `${errorText}`,
      icon: "error",
      button: true,
    })
      .then(() =>
        swal({
          text: "reload?",
          icon: "info",
          buttons: ["No", "Yes"],
        })
      )
      .then((answ) => {
        if (answ) window.location.reload();
      });

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (

    <Box sx={{bgcolor: 'tertiary.main', paddingTop: '3em', paddingBottom: '1em',}}>
      {isLoad ? (
        <LoadPage />
      ) : (
        <Grid
          container
          spacing={2}
          wrap="wrap"
          sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
        >
          {movies ? (
            movies.map((movie, i) => (
              <Grid item key={i}>
                <Cards data={movie} />
              </Grid>
            ))
          ) : (
            <></>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Home;
