import "./styles/app.css";
import Home from "./components/Home";
import ButtonAppBar from "./components/Navbar";
import { ThemeProvider } from "@mui/material";
import * as themeConfig from './styles/themeConfig'
import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomeByLang from "./components/HomeByOriginLang";
import Footer from "./components/Footer";

function App() {

  const isDark = useSelector(state => state.mode.isDark)
  const filtered = useSelector(state => state.movies.factFiltered)

  return (
    <ThemeProvider theme={themeConfig[`${isDark ? 'darkTheme' : 'theme'}`]}>
      <ButtonAppBar />
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="/OriginLanguage" element={<HomeByLang movies={filtered} />}/>
      </Routes>
      <Footer/>
      
    </ThemeProvider>
  );
}

export default App;
