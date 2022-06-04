import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../store/languages";

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.languages.lang);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const spanishLanguage = () => {
    dispatch(toggleLanguage("es-ES"));
    handleCloseUserMenu();
  };

  const englishLanguage = () => {
    dispatch(toggleLanguage("en-US"));
    handleCloseUserMenu();
  };

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Box>
          <Typography variant="h6">
            {lang === "en-US" ? "Test front-end" : "Prueba front-end"}
          </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button onClick={handleOpenUserMenu} variant="text" color="inherit">
                {lang === "en-US" ? "Languages" : "Idiomas"}
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={1} onClick={spanishLanguage}>
                <Typography textAlign="center">
                  {lang === "en-US" ? "Spanish" : "Español"}
                </Typography>
              </MenuItem>

              <MenuItem key={2} onClick={englishLanguage}>
                <Typography textAlign="center">
                  {lang === "en-US" ? "English" : "Ingles"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
