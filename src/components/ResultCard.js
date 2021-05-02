import React from 'react'

function ResultCard({movie, addToNom}) {

  return (
    <div>
      <h5>{movie.Title} Release:{movie.Year} </h5>
      <button onClick={()=> addToNom(movie)}>Nominate</button>
    </div>
  )
}

export default ResultCard
