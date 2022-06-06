import React from "react";
import "../styles/home.css";
import Cards from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import swal from "sweetalert";

const HomeByLang = ({movies}) => {
    console.log('MOVIES===> ', movies)
  const dispatch = useDispatch();
  const isDark = useSelector(state => state.mode.isDark)
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
          text: "Reload page?",
          icon: "info",
          buttons: ['No', 'Yes'],
        })
      )
      .then((answ) => {
        if (answ) window.location.reload();
      });

  console.log("Data error ===>", errorText);

  return (
    <body className={`${isDark ? 'dark' : 'light'}`}>
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
    </body>
  );
};

export default HomeByLang;