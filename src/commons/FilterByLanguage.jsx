import '../styles/filterByLang.css'
import {
  Button,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { factFiltered } from "../store/movies";
import codeIdiomsIso from "../utils/codeIdioms";

const FilterByLanguage = () => {
  const dispatch = useDispatch();
  const movieLang = useSelector((state) => state.movies.languages);
  const movies = useSelector((state) => state.movies.fact);
  const [anchorEl, setAnchorEl] = useState(null);
  const [langSelected, setLangSelected] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLangSelected = (idiom, movies) => {
    //  console.log(idiom, movies)
    dispatch(factFiltered([idiom, movies]));
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography variant="body1" color="primary">Original language</Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {movieLang.map((lang, i) => (
          <Link key={i} to="/OriginLanguage" className="links">
            <MenuItem
              onClick={() => {
                handleClose();
                handleLangSelected(lang, movies);
              }}
            >
              <Typography variant="body1" color="initial">
                {codeIdiomsIso[lang]}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
};

export default FilterByLanguage;
