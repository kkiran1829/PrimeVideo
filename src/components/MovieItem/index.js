// src/components/MovieItem/index.js

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = ({movieDetails}) => {
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="movie-item">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
        className="popup-content"
      >
        {close => (
          <div className="video-popup-container">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
              aria-label="Close"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
