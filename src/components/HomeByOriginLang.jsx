import React from "react";
import Cards from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import swal from "sweetalert";
import LoadPage from "../commons/LoadPage";
import { useNavigate } from "react-router-dom";

const HomeByLang = ({ movies }) => {
  const dispatch = useDispatch();
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
          text: "Reload page?",
          icon: "info",
          buttons: ["No", "Yes"],
        })
      )
      .then((answ) => {
        if (answ) window.location.reload();
      });

  return (
    <Box sx={{bgcolor: 'tertiary.main', paddingTop: '3em', paddingBottom: '1em', minHeight: '85vh'}}>
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

export default HomeByLang;
