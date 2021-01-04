import React from 'react'
import {homeCardInfo} from '../utils/data'
import Banner from '../components/Banner'
import HomeCard from '../components/HomeCard'


function Home() {
  return (
  <div className="home bg-gray-50">
      <Banner />
      <div className="home__cards flex justify-center my-14 mx-2 sm:mx-6 md:mx-7 lg:mx-8">
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-5">
            {homeCardInfo.map(card=> <HomeCard key={card.id} {...card}/>)}
         </div>
      </div>
    </div>
  )
}

export default Home
