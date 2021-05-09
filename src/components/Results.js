import ResultCard from './ResultCard'

function Results({ movies, addToNom, nominatedMovies, searchWord }){

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
    <div className="results">
      <h4>Results for "{searchWord}"</h4>
      {mapMovies()}
    </div>
  )
}

export default Results
