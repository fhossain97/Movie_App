import { useState } from "react";

export default function Form({liftMovieTitle}) {
  const [title, setTitle] = useState("");

  function handleChange(e){
	setTitle(e.target.value)
  }

  function handleSubmit(e){
	e.preventDefault() // stops our form from making an api call, we want to use our fetch, no page reloads
	liftMovieTitle(title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Movie:</label>
      <input
        type="text"
        name="title"
        placeholder="search movie"
        onChange={handleChange}
        value={title}
      />
      <button type="submit">Get Movie</button>
    </form>
  );
}
