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
    setMovieList(movies.filter(movie =>
      movie.genre.toLowerCase().includes(movieGenre.toLowerCase()) &&
      movie.title.toLowerCase().includes(movieName.toLowerCase())))
  }, [movieGenre, movieName])

  function newMovieHandler(e) {
    e.preventDefault()
    const newMovieObj = { title: newMovie, genre: newGenre }
    setMovieList([...movieList, newMovieObj])
    console.log("submitted!")
    movies.push(newMovieObj)
  }
  return (
    <div className='container'>
      {
        movieList.map((movie, i) => {
          return (
            <div key={`movie-${i}`}>
              <div>
                {movie.title}
              </div>
              <div>
                {movie.genre}
              </div>
            </div>
          )
        })
      }
      <label htmlFor="genres">chose a genre</label>
      <select name='movies-genre' id="movies-genre" onChange={e => setMovieGenre(e.target.value)}>
        {
          genres.map((genre, i) => {
            return (
              <option key={i} value={genre}>{genre}</option>
            )
          })
        }
      </select>
      <div>
        <input type="text" name="movie-title" id="movie-title" placeholder='search-bar' onChange={e => setMovieName(e.target.value)} />
        <form onSubmit={e => newMovieHandler(e)} >
          <input type="text" name="movie" id="movie" placeholder='add a new movie' onChange={e => setNewMovie(e.target.value)} />
          <select name='movie-genre' id="movie-genre" onChange={e => setNewGenre(e.target.value)}>
            {
              genres.map((genre, i) => {
                return (
                  <option key={i} value={genre}>{genre}</option>
                )
              })
            }
          </select>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
