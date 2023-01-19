import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./Form/Form";
import MovieInfo from "./MovieInfo/MovieInfo";

function App() {
  // search omdb api by a movie title
  const [movieTitle, setMovieTitle] = useState('star wars');
  const [movieInfo, setMovieInfo] = useState({})


  // make an api call to omdb api in this component
  // make the api call when the component loads?
  useEffect(() => {
    console.log('use Effect firing')
    // update your api key
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=8919e0eb`;

    async function makeApiCall(){
      // fetch(movieUrl)
      try {
        // the response is JSON, we have to parse it
        const responseJson = await fetch(movieUrl);
        console.log(responseJson)
        // changes the response from json into a javascript object called data
        const data = await responseJson.json()
        console.log(data)
        // i'm just passing data because I want the whole object
        // You have to look at the data object every single you time work with an 
        // api, they are all different, maybe data.data, data.body, data.somethingElse
        setMovieInfo(data)
      } catch(err){
        console.log(err)
      }
  
    }

    // make the function call
    makeApiCall()

  }, [])


  return (
    <div className="App">
      <div>Best Movie App Ever</div>
      <Form />
      <MovieInfo movieData={movieInfo}/>
    </div>
  );
}

export default App;
