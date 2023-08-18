/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import './modal.scss'
import { IconButton, Rating } from '@mui/material';
import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded';

const Detail = ({ open, setOpenModal, card }) => {
  const [isLoading, setIsLoading] = useState(false)
  const handleSave = () => {
    setIsLoading(true)
    // handleSaveUsecase(id, data, setIsSaved, setOpenModal, setIsLoading)
  }

  return (
    <div onClick={() => setOpenModal(false)}>
      <Modal open={open} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="box" onClick={(e) => e?.stopPropagation()}>
          <IconButton className="close" onClick={() => setOpenModal(false)}>
            <CancelPresentationRoundedIcon />
          </IconButton>
          <div className="content">
            <div className="image-container">
              <img src={card?.imageUrl} alt="card" width={400}
                height={500}
              />
            </div>
            <div className="text-content">
              <div className="header">
                <div className="address">
                  <div id="place">
                    <PlaceRoundedIcon />
                    <a target="_blanck" href={`http://maps.google.com/?q=${card?.placeAddress}`} rel="noreferrer">
                      {card?.placeAddress || '1 Rue Louis Aragon, 94310 Orly '}
                    </a>
                  </div>
                </div>
                <h1>{card?.placeName?.toUpperCase()}</h1>
              </div>
              <div className="body">
                <p>{card?.comments?.repeat(20)} </p>
              </div>
              <div className="footer">
                <div className="rating">
                  <p>NOTE </p>
                  <Rating name="rating" value={card?.rating} precision={0.5}
                    readOnly style={{ color: '#FFD700' }}
                  />

                </div>
                <h2>{card?.userName || 'GUEST USER'}</h2>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Detail
