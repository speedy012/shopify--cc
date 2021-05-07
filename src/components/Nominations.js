

function Nominations({nominatedMovies, removeNom}) {

  const nomList = () => {
    if (nominatedMovies.length > 0) {
      return  nominatedMovies.map(movie => {
        console.log("in methodd", movie)
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
    <div>
      <h5>Nomination</h5>
      {nomList()}
    </div>
  )
}

export default Nominations
