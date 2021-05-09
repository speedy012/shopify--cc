import './App.css';

import React, { useState } from 'react'

import Banner from './components/Banner'
import Nominations from './components/Nominations'
import Results from './components/Results'
import Search from './components/Search'
import Title from './components/TItle'

const KEY = process.env.REACT_APP_OMDB_KEY

function App() {

  const [movies, setMovies] = useState([])
  const [nominatedMovies, setNominatedMovies]= useState([])
  const [searchWord, setSearchWord] = useState("")


  const getMovieTitle = title => {
    // console.log("in", process.env.OMDB_KEY)
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=${KEY}`)
      .then(res => res.json())
      .then(data=> setMovies(data.Search))
      .catch(error => alert(error.message))
      setSearchWord(title)
  }

  const addToNom = nom => {
    setNominatedMovies([...nominatedMovies, nom])
  }

  const removeNom = (pickedMovie) => {
    const filterArray = nominatedMovies.filter(movie => movie.Title !== pickedMovie.Title)
    setNominatedMovies(filterArray)
  }

  return (
    <div className="App">
      <Title/>
      <Search searchWord={searchWord} getMovieTitle={getMovieTitle}/>
      {nominatedMovies.length >= 5? <Banner/> : null}
      <Results searchWord={searchWord} movies={movies} addToNom={addToNom} nominatedMovies={nominatedMovies} />
      <Nominations nominatedMovies={nominatedMovies} removeNom={removeNom} />
    </div>
  );
}

export default App;
