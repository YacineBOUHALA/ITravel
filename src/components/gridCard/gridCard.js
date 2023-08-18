/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/named */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-tag-spacing */
// import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePlace } from '../../functions/serverFunctions';
import { cards } from './mokeData';
import { DETAIL } from '../../constants/constants';
import Card from '../card/card';
import ModalConfirmationComponent from '../modalConfirmation/modalConfirmation';
import Detail from '../modalComponent/modalcomponent';
import './gridCard.scss';

const GridCardContainer = ({ data, setDataCards, logged }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false)
  const [currentCard, setCurrentCard] = useState(null)
  const navigate = useNavigate()

  const handleOpenModal = (card, type) => {
    type === DETAIL ? setIsModalDetailOpen(true) : setIsModalOpen(true)
    setCurrentCard(card)
    // console.log(card)
  }

  const handleDeleteConfirmation = () => {
    deletePlace(currentCard, setIsModalOpen, setDataCards)
  }

  const handleUpdate = (e, card) => {
    e?.stopPropagation()
    navigate(`/create-card?id=${card?.id}`, { state: { card } })
  }

  // const items = logged ? data?.map((card) => {
  //   return (
  //     <Card key={`card-key-${card?.id}`} card={card} openModal={handleOpenModal}
  //       id={card?.id} logged={logged} handleUpdate={handleUpdate}
  //     />
  //   )
  // })
  //   : cards?.map((card) => {
  //     return (
  //       <Card key={`card-key-${card?.id}`} logged={logged}
  //         card={card} openModal={handleOpenModal} handleUpdate={handleUpdate}
  //       />
  //     )
  //   })

  const prepareCards = (index, step) => {
    // (index * step), (index * step) + (step - 1)
    return cards?.slice((index * step), (index * step) + (step))
      ?.map((card) => {
        return (
          <Card key={`card-key-${card?.id}`} logged={logged}
            card={card} openModal={handleOpenModal} handleUpdate={handleUpdate}
          />
        )
      })
  }

  const sections = () => {
    return !logged ? (["Asia", "Africa", "America", "Europe", "Australia (Oceania)"]
      ?.map((continent, index) => (
        <div className="sections" style={{ backgroundColor: (index % 2 !== 0) ? "#23272A" : "white" }}>
          <div>
            {continent}
            <div className="cardwrapper">
              <div className="cards">
                {prepareCards(index, 4)}
              </div>
            </div>
          </div>
        </div>
      ))) 
      : (data?.map((place, index) => (
        <div className="sections" style={{ backgroundColor: (index % 2 !== 0) ? "#23272A" : "white" }}>
          <div>
            {place?.continent}
            <div className="cardwrapper">
              <div className="cards">
                {place?.itemss?.map((card) => {
                  return (
                    <Card key={`card-key-${card?.id}`} logged={logged}
                      card={card} openModal={handleOpenModal} handleUpdate={handleUpdate}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )))
  }

  return (
    <div>
      {sections()}
      <ModalConfirmationComponent open={isModalOpen}
        handleConfirm={handleDeleteConfirmation}
        text="Are you sure you want to delete this item? This action cannot be undone."
        title="Delete Place" handleCancel={() => setIsModalOpen(false)}
      />
      {isModalDetailOpen && (
        <Detail open={isModalDetailOpen} card={currentCard}
          setOpenModal={setIsModalDetailOpen} />
      )}
    </div>
  );
};

export default GridCardContainer;
