import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./Form/Form";
import MovieInfo from "./MovieInfo/MovieInfo";

function App() {
  // search omdb api by a movie title
  const [movieTitle, setMovieTitle] = useState('star wars');
  const [movieInfo, setMovieInfo] = useState({})

  function liftMovieTitle(title){
    // title is the argument to the function when it is called
    // which is inside of the Form component
    setMovieTitle(title)
  }

  // make an api call to omdb api in this component
  // make the api call when the component loads?
  useEffect(() => {
let movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=93d3312`;

const makeApiCall = async () => {
  const res = await fetch(movieUrl)
  const json = await res.json()
  
    setMovieInfo((json))
 
}
makeApiCall()

}, [movieTitle])





  return (
    <div className="App">
      <div>Best Movie App Ever</div>
      <Form liftMovieTitle={liftMovieTitle}/>
<MovieInfo movieData={movieInfo} /> 
      
    </div>
  );
}

export default App;
