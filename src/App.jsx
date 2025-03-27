import { useState } from 'react'
import movies from './data/movies'


function App() {
  const [movieList, setMovieList] = useState(movies)
  const genres = [...new Set(movieList.map(movie => movie.genre))]
  function eventHandler(e) {
    e.preventdefault()
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
      <form onSubmit={(e) => eventHandler(e)}>
        <label htmlFor="genres">chose a genre</label>
        <select name='movies-genre' id="movies-genre">
          {
            genres.map((genre, i) => {

              return (
                <option key={i} value={genre}>{genre}</option>
              )

            })

          }
        </select>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App
