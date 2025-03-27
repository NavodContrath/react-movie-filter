import { useEffect, useState } from 'react'
import movies from './data/movies'


function App() {
  const [movieGenre, setMovieGenre] = useState('')
  const [movieList, setMovieList] = useState(movies)
  const genres = [...new Set(movies.map(movie => movie.genre))]

  useEffect(() => {
    setMovieList(movies.filter(movie => movie.genre.toLowerCase().includes(movieGenre.toLowerCase())))
  }, [movieGenre])



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
    </div>
  )
}

export default App
