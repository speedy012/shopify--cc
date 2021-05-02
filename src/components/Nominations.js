

function Nominations({nominatedMovies, removeNom}) {
  console.log("in nom", nominatedMovies)


  const nomList = () => {
    if (nominatedMovies.length > 0) {
      return  nominatedMovies.map(movie => {
        console.log("in methodd", movie)
        return (
          <>
            <h5 key={movie.imdbID}>{movie.Title} </h5>
            <button onClick={() => removeNom(movie)}>Remove</button>
          </>
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
