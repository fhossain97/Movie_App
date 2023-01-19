import React from 'react'

function MovieInfo({movieData}){

  return (
    <div className='movie-data'>
      <h1>Title: {movieData.Title}</h1>
      <h2>Year: {movieData.Year}</h2>
      <img src={movieData.Poster} alt="" />
      <h3>Genre: {movieData.Genre}</h3>
      <h4>Plot: {movieData.Plot}</h4>
    </div>
  )
}

export default MovieInfo