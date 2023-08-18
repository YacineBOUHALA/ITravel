/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
// import { Amplify, API, Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageIndex from '..'
import FloatingActionButton from '../../components/component'
import GridCardContainer from '../../components/gridCard/gridCard'
import { transformdata } from '../../functions/functions'
import { getPlaces } from '../../functions/serverFunctions'
import europ2 from '../../assets/images/europ2.jpeg'

const LogedHome = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false)
  const [dataCards, setDataCards] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoaded(false)
    getPlaces(setDataCards, setIsLoaded)
  }, [])

  // useEffect(() => {
  //   // Fetch authenticated user information
  //   const fetchUser = async () => {
  //     try {
  //       const user = await Auth.currentAuthenticatedUser();
  //       console.log('Authenticated user:', user);
  //     } catch (error) {
  //       console.log('Error fetching user:', error);
  //     }
  //   };
  //   fetchUser()
  // }, [])

  const signOut = () => {
    localStorage?.clear();
    navigate('/')
  }

  const createCard = () => {
    navigate('/create-card')
  }

  return (
    <PageIndex loged signOut={signOut}>
      <GridCardContainer logged={true} data={transformdata(dataCards) || []}
        setDataCards={setDataCards}
      />
      <div style={{ position: 'fixed', right: 20, bottom: 20 }}>
        <FloatingActionButton createCard={createCard} />
      </div>
    </PageIndex>
    // <div>
  )
}

export default LogedHome
