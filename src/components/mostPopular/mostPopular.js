/* eslint-disable import/named */
/* eslint-disable react/self-closing-comp */
import { Rating } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import picture from '../../assets/images/place.jpeg'
import { CustomDivider } from '../component'
import './mostPopular.scss'

const MostPopular = ({ placeName = 'sddsfdsds', comments = 'sdxccnwxcnw', rating = '3.6',
  placeAddress, imageUrl }) => {
  return (
    <div className="b-image-container">
      <img src={imageUrl || picture} width={500} height={500}
        alt="pictur"
      />
      <div className="brightness-mask">
        <div className="footer">
          <Rating className="rating" name="rating" value={rating}
            precision={0.1} readOnly style={{ color: '#FFD700' }}
            emptyIcon={<StarIcon style={{ color: 'white' }} />}
          />
          <h5 className="card-title"> {placeName?.toUpperCase()} </h5>
          <CustomDivider height={2} length="100%" color="#fea05a" />
          <div className="comments">
            <p className="card-description">{comments.repeat(6)}</p>
            <p>{placeAddress || '1 Rue Louis Aragon, 94310 Orly'} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MostPopular
