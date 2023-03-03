// Write your code here

import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  console.log(videoUrl)

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="content-popup" />
        }
        className="popup-content"
      >
        {close => (
          <div className="close-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-btn"
              onClick={() => close()}
            >
              <IoMdClose size={18} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
