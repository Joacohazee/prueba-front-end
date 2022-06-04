import Home from "./components/Home";
import ButtonAppBar from "./components/Navbar";
import SingleMovie from "./commons/SingleMovie";
import "./styles/app.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ButtonAppBar />
      <Home />
    </>
  );
}

export default App;
