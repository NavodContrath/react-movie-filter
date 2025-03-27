import { useState } from 'react'
import movies from './data/movies'


function App() {
  const [movieList, setMovieList] = useState(movies)



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
      <form>
        <label htmlFor="genres">chose a genre</label>
        <select name='movies-genre' id="movies-genre">
          {
            movieList.map((movie, i) => {
              return (
                <option key={i} value={movie.genre}>{movie.genre}</option>
              )
            })

          }
        </select>
        <input type="submit" value="Submit" />


      </form>

    </div>
  )
}

export default App
