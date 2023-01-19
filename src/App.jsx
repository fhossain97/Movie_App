import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./Form/Form";
import MovieInfo from "./MovieInfo/MovieInfo";

function App() {

  return (
    <div className="App">
      <div>Best Movie App Ever</div>
      <Form />
      <MovieInfo/>
    </div>
  );
}

export default App;
