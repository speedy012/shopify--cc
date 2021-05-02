import './App.css';

import React, { useState } from 'react'

import Nominations from './components/Nominations'
import Results from './components/Results'
import Search from './components/Search'

function App() {
  const [movies, setMovies] = useState([])
  const [nominatedMovies, setNominatedMovies]= useState([])
  const [searchWord, setSearchWord] = useState("")


  const getMovieTitle = title => {
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=14e28ea6`)
      .then(res => res.json())
      .then(data=> setMovies(data.Search))
      .catch(error => alert(error.message))
      setSearchWord(title)
  }

  const addToNom = nom => {
    if (nominatedMovies.includes(nom)) {
      alert('already in your list ')
    } else {
      setNominatedMovies([...nominatedMovies, nom])
    }
  }

  const removeNom = (pickedMovie) => {
    const filterArray = nominatedMovies.filter(movie => movie.Title !== pickedMovie.Title)
    setNominatedMovies(filterArray)
  }

  return (
    <div className="App">
      <Search searchWord={searchWord} getMovieTitle={getMovieTitle}/>
      <Results movies={movies} addToNom={addToNom} />
      <Nominations nominatedMovies={nominatedMovies} removeNom={removeNom} />
    </div>
  );
}

export default App;
