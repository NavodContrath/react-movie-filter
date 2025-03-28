import { useEffect, useState } from 'react'
import movies from './data/movies'


function App() {
  const [movieGenre, setMovieGenre] = useState('')
  const [movieName, setMovieName] = useState('')
  const [newMovie, setNewMovie] = useState('')
  const [newGenre, setNewGenre] = useState('')
  const [movieList, setMovieList] = useState(movies)

  const genres = ["All", ...new Set(movies.map(movie => movie.genre))]

  useEffect(() => {
    let filteredMovies = movies;
    if (movieGenre !== "All") {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genre.toLowerCase().includes(movieGenre.toLowerCase())
      );
    }
    if (movieName) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(movieName.toLowerCase())
      );
    }
    setMovieList(filteredMovies)
  }, [movieGenre, movieName])

  function newMovieHandler(e) {
    e.preventDefault()
    const newMovieObj = { title: newMovie, genre: newGenre }
    setMovieList([...movieList, newMovieObj])
    console.log("submitted!")
    setNewMovie("");
    setNewGenre("")
    movies.push(newMovieObj)
  }
  return (
    <div className='container'>
      <div className='genre-container'>
        <label htmlFor="genres">chose a genre</label>
        <select name='movies-genre' id="movies-genre" className="text-center" onChange={e => setMovieGenre(e.target.value)}>
          {
            genres.map((genre, i) => {
              return (
                <option key={i} value={genre}>{genre}</option>
              )
            })
          }
        </select>
      </div>
      <div className='tool-container'>
        <input type="text" name="movie-title" id="movie-title" className="p-1 text-center" placeholder='search-bar' onChange={e => setMovieName(e.target.value)} />
        <form onSubmit={e => newMovieHandler(e)} >
          <input type="text" name="movie" id="movie" className="p-1 text-center" placeholder='add a new movie' value={newMovie} onChange={e => setNewMovie(e.target.value)} />
          <select name='movie-genre' id="movie-genre" className="p-1 text-center" value={newGenre} onChange={e => setNewGenre(e.target.value)}>
            {
              genres.map((genre, i) => {
                return (
                  <option key={i} value={genre}>{genre}</option>
                )
              })
            }
          </select>
          <button type="submit" className="p-1 text-center">submit</button>
        </form>
      </div>

      <div className="displayer row">
        {
          movieList.map((movie, i) => {
            return (
              <div className="card col-4" key={`movie-${i}`}>
                <div className="card-head">
                  {movie.title}
                </div>
                <div className="card-body">
                  {movie.genre}
                  <img src={`${movie.img}`} alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
