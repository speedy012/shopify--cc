import ResultCard from './ResultCard'

function Results({ movies, addToNom, nominatedMovies }){

  const mapMovies = () => {
    if (movies) {
      return movies.map(movie => {
        return (

          <ResultCard movies={movies} movie={movie} key={movie.imdbID} addToNom={addToNom} nominatedMovies={nominatedMovies} />

        )
      })
    }
  }

  return (
    <div>
      <h4>Results</h4>
      {mapMovies()}
    </div>
  )
}

export default Results
