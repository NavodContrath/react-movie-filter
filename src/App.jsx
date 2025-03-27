import { useEffect, useState } from 'react'
import movies from './data/movies'


function App() {
  const [movieGenre, setMovieGenre] = useState('')
  const [movieName, setMovieName] = useState('')
  const [newMovie, setNewMovie] = useState('')
  const [addNewMovie, setAddNewMovie] = useState('')
  const [movieList, setMovieList] = useState(movies)
  const genres = [...new Set(movies.map(movie => movie.genre))]

  useEffect(() => {
    setMovieList(movies.filter(movie => movie.genre.toLowerCase().includes(movieGenre.toLowerCase())))
  }, [movieGenre])

  useEffect(() => {
    setMovieList(movies.filter(movie => movie.title.toLowerCase().includes(movieName.toLowerCase())))
  }, [movieName])

  function newMovieHandler(e) {
    e.preventDefault()
    setAddNewMovie({ title: newMovie, genre: genres[Math.floor(Math.random() * genres.length)] })
    setMovieList([...movieList, addNewMovie])
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
          <button type="submit">submit</button>
        </form>

      </div>
    </div>
  )
}

export default App
