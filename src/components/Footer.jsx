import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const isDark = useSelector((state) => state.mode.isDark);

  return (
    <Box sx={{bgcolor: 'secondary.main', padding: '1em', border: '1em'}}>
      <Typography variant="body1" color="primary" align="center" justifyContent='center'>
        This app is a front-end test. By Joaquin Hazelhoff 2022
      </Typography>
    </Box>
  );
};

export default Footer;
