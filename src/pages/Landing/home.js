/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import PageIndex from '..'
// import Carousel from '../../components/Carousel/carousel'
import GridCardContainer from '../../components/gridCard/gridCard'
import { dataCarosel } from '../../components/gridCard/mokeData'
import InfinitSlider from '../../components/InfinitSlider/infinitSlider'
import MostPopular from '../../components/mostPopular/mostPopular'

const Home = () => {
  // const [isLoaded, setIsLoaded] = useState(false)
  // const [dataCards, setDataCards] = useState(null)
  // useEffect(() => {
  //   setIsLoaded(false)
  //   API.get()
  //   .then((res) => {
  //     console.log(res)
  //     setDataCards(res)
  //     setIsLoaded(true)
  //   })
  //   .catch((err) => console.log(err))
  // }, [])
  // const carousel = Array?.from({ length: 10 }, (_, index) => index)
  const list = dataCarosel
    ?.map((card, index) => (
      <MostPopular imageUrl={card?.imageUrl} key={index}
        placeAddress={card?.placeAddress}
        placeName={card?.placeName} rating={card?.rating} comments={card?.comments}
      />
    ))
  return (
    <PageIndex>
      <div>
        <div id="most-popular">
          <InfinitSlider list={list} />
          {/* <Carousel list={list} /> */}
        </div>
        <GridCardContainer logged={false} />
      </div>
    </PageIndex>
  )
}

export default Home
