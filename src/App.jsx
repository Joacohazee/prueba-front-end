import "./styles/app.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import HomeByLang from "./components/HomeByOriginLang";
import Footer from "./components/Footer";
import * as themeConfig from "./styles/themeConfig";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

function App() {
  const isDark = useSelector((state) => state.mode.isDark);
  const filtered = useSelector((state) => state.movies.factFiltered);

  return (
    <ThemeProvider theme={themeConfig[`${isDark ? "darkTheme" : "theme"}`]}>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/OriginLanguage"
          element={<HomeByLang movies={filtered} />}
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
