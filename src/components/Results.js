import ResultCard from './ResultCard'

function Results({movies, addToNom}){

  const mapMovies = () => {
    if (movies) {
      return movies.map(movie => {
        return (
          <ResultCard movie={movie} key={movie.imdbID} addToNom={addToNom}/>
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
