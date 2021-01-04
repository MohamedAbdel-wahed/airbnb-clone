import React from 'react'
import {withRouter} from 'react-router-dom'
import {banner} from '../utils/data'
import DatePicker from '../components/DatePicker'


function Banner({history}) {
  
    const getSearchResults= ()=> history.push('/search-results') 

  return (
    <div className="banner mt-20 relative w-full select-none overflow-y-hidden" style={{height: '34.6rem'}}>
      <img src={banner}
           className="w-full h-full object-cover object-bottom" alt="banner"/>
      <div className="w-full absolute top-0 z-20">
        <DatePicker />
      </div>
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-60 z-10">
          <h1 className="mx-4 text-2xl sm:text-3xl lg:text-5xl font-bold break-words">Get out and stretch your imagination</h1>
          <p className="mx-4 my-4 text-sm lg:text-base break-words">plan a differnt kind of gateway to uncover the hidden gems near you</p>
          <button onClick={getSearchResults} className="animate-bounce inline-block mt-8 py-2 px-5 font-bold bg-red-500 rounded-md focus:ring-4 ring-red-900 focus:outline-none">Explore Nearby</button>
      </div>
    </div>
  )
}

export default withRouter(Banner)
