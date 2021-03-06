function Search({ getMovieTitle, searchWord} ) {

  return (
    <div className="search">
      <h4>Movie Title</h4>
      <input
        type="text"
        placeholder="Type movie name"
        value={searchWord}
        onChange={e => getMovieTitle(e.target.value)}
      />
    </div>
  )
}

export default Search
