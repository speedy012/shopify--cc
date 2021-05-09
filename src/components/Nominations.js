

function Nominations({nominatedMovies, removeNom}) {

  const nomList = () => {
    if (nominatedMovies.length > 0) {
      return  nominatedMovies.map(movie => {
        return (
          <div key={movie.imdbID} >
            <h5>{movie.Title} </h5>
            <button onClick={() => removeNom(movie)}>Remove</button>
          </div>
        )
      })
    }
  }

  return (
    <div className="nominations">
      <h4>Nomination</h4>
      {nomList()}
    </div>
  )
}

export default Nominations
