/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Avatar, IconButton, Rating } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import './card.scss';
import { DETAIL } from '../../constants/constants';

function Card({ card, openModal, logged, handleUpdate }) {
  const { imageUrl, placeAddress, placeName, comments, rating, id, userName } = card
  return (
    <div className="card1" onClick={() => openModal(card, DETAIL)}>
      <div className="image-container">
        <img className="image" alt="" src={imageUrl} />
      </div>
      <div className="card-content">
        <div className="propertyName">
          <div className="address">
            {placeAddress || '92 ALLIUM PLACE, ORLANDO FL 32827'}
          </div>
        </div>
        <div className="placeName">
          <div className="div">{placeName || 'China greate wall'}</div>
          {logged && (
            <>
              <IconButton onClick={(e) => { e?.stopPropagation(); openModal(card, '') }}>
                <DeleteRoundedIcon style={{ width: 35, height: 35 }} color="error" />
              </IconButton>
              <IconButton disabled={true} onClick={(e) => handleUpdate(e, card)}>
                <BorderColorRoundedIcon style={{ width: 35, height: 35 }} color="info" />
              </IconButton>
            </>
          )}
        </div>
        <div className="client-comments">
          <p>{comments?.repeat(50) || 'Comments'}</p>
        </div>
        <div className="footer-card-container">
          <div className="user">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
              {userName?.charAt(0)?.toUpperCase() || 'M'}
            </Avatar>
            <div className="userName">{userName}</div>
          </div>
          <div className="rating">
            <Rating name="rating" value={rating} precision={0.5}
              readOnly style={{ color: '#FFD700' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
