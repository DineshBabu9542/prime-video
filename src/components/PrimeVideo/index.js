// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovies = 'ACTION'
const comedyMovies = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovies,
  )
  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovies,
  )

  return (
    <div className="app-container">
      <img
        className="video-img"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="container-movies">
        <h1 className="action-heading">Action Movies</h1>
        <MoviesSlider MoviesList={actionMoviesList} />
        <h1 className="action-heading">Comedy Movies</h1>
        <MoviesSlider MoviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
