import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const LoadPage = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress sx={{ color: "primary"}}/>
    </Backdrop>
  );
};

export default LoadPage;
