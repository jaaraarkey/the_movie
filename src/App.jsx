import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Studio from "./components/Studio";
// import GenreMovieList from "./components/GenreMovieList";

function App() {
  return (
    <div className="">
      <Header />

      <Slider />

      <Studio />

      {/* <GenreMovieList /> */}
    </div>
  );
}

export default App;
