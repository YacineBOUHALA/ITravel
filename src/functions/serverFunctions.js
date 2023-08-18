/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import { Amplify, API, Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { cards } from '../components/gridCard/mokeData';
import { API_NAME, END_POINT_PLACES } from '../constants/constants';

Amplify.configure({
  ...awsconfig,
  API: {
    endpoints: [
      {
        name: API_NAME,
        endpoint: 'https://n37fiayty5.execute-api.us-east-2.amazonaws.com/dev',
        region: 'us-east-2',
      },
    ],
  },
});

//! get all places for a logged user
export const getPlaces = (setDataCards, setIsLoaded) => {
  API.get(API_NAME, END_POINT_PLACES)
    .then((res) => {
      setDataCards(res?.data)
      console.log(res?.data)
      setIsLoaded(true)
    })
    .catch((err) => console.log(err))
  setDataCards(cards)
}

//! create a place
export const creatPlace = async (formData, navigate) => {
  console.log('data ', formData)
  try {
    const res = await API.post(API_NAME, END_POINT_PLACES, { body: formData })
    alert(res)
    navigate('/loged')
  } catch (err) {
    console.log("error ", err)
  }
}
//! update a place
export const updatePlace = async (formData, navigate) => {
  console.log('data ', formData)
  try {
    const res = await API.put(API_NAME, END_POINT_PLACES, { body: formData })
    navigate('/loged')
  } catch (err) {
    console.log("error ", err)
  }
}

//! get url of a buket from S3 & put it in the local state object
//! to save it in dynamoDB
const getFileUrl = async (file, setFormData) => {
  try {
    const url = await Storage.get(file, { level: 'private' });
    console.log(url)
    setFormData((state) => ({ ...state, imageUrl: url }))
  } catch (error) {
    console.error('Error getting file URL :::::', error);
  }
};

//! upload file to S3
export const addBuketToS3 = (file, setFormData) => {
  Storage?.put(file?.name, file, {
    level: 'private',
  })
    .then((res) => {
      setFormData((prev) => ({ ...prev, buket: res?.key }))
      getFileUrl(res?.key, setFormData)
    })
    .catch((err) => console.log(err))
}

//! delete buket from S3
export const deleteBuket = async (buket) => {
  try {
    const res = await Storage.remove(buket, { level: 'private' });
    console.log(`buket ${buket} has been deleted successfully`, res)
    // setIsOpen(false)
    return res
  } catch (error) {
    console.log(`error `, error)
  }
}

//! delete place from dataBase
export const deletePlace = async (place, setIsOpenModal, setDataCards) => {
  try {
    const res = await API.del(API_NAME, END_POINT_PLACES, {
      body: {
        id: place?.id, placeName: place?.placeName,
      },
    })
    console.log('delete from database ', res)
    const buket = await deleteBuket(place?.buket)
    console.log('delete from buket ', buket)
    setIsOpenModal(false)
    setDataCards((prev) => (prev?.filter((item, _) => item?.id !== place?.id)))
    // navigate('/loged')
  } catch (err) {
    console.log("error ", err)
  }
  // setDataCards((prev) => (prev?.filter((item) => item?.id !== place?.id)))
  // setIsOpenModal(false)
}
