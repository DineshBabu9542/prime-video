// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {MoviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    sliderToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {MoviesList.map(eachItem => (
        <MovieItem key={eachItem.id} movieDetails={eachItem} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
