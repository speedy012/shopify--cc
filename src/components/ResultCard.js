import React, { useEffect, useState } from 'react'

function ResultCard({ movies, movie, addToNom, nominatedMovies }) {

  const [appear, setAppear] = useState(false)

  useEffect(() =>{
    if(nominatedMovies.some(nomMovie => nomMovie.Title === movie.Title) && !appear) {
      setAppear(!appear)
    }
  }, [nominatedMovies, appear, movie.Title])

  const alreadyNom = () => {
    setAppear(!appear)
  }

  const handleClick = (movie) => {
    addToNom(movie)
    alreadyNom()
  }

  return (
    <div>
      <h5 >{movie.Title} Release:{movie.Year} </h5>
      <button  disabled={appear} onClick={()=> handleClick(movie)}>Nominate</button>
    </div>
  )
}

export default ResultCard



