import * as React from "react";
import "../styles/navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/themeMode";
import FilterByLanguage from "../commons/FilterByLanguage";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.mode.isDark);

  const toggleTheme = () => {
    dispatch(toggleMode(isDark));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Box>
            <Button>
              <Link to="" className="homeButton">
                <Typography variant="body1" color="primary">
                  Home
                </Typography>
              </Link>
            </Button>
          </Box>
          <Box flexGrow={1}>
            <FilterByLanguage />
          </Box>
          <Box>
            <Switch onClick={toggleTheme} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar