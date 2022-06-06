import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "../styles/footer.css";

const Footer = () => {
  const isDark = useSelector((state) => state.mode.isDark);

  return (
    <footer>
      <div className={`container ${isDark ? "dark" : "light"}`}>
        
        <Typography variant="body1" color="primary">
          This app is a front-end test. By Joaquin Hazelhoff 2022
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
