import React from 'react'
import SearchCard from '../components/SearchCard'
import Button from '../components/Button'
import {searchCardInfo} from '../utils/data'


function Search() {
  return (
    <div className="search my-20 bg-gray-50">
      <div className="py-8 px-8 sm:px-16 ">
        <p className="text-sm text-gray-700">62 stays - 26 august to 30 august - 2 guests</p>
        <h1 className="my-4 text-4xl font-bold text-gray-700">Stay nearby</h1>
        <div className="mt-6 flex flex-wrap items-center">
          <Button text="cancellation flexibility" />
          <Button text="Type of place" />
          <Button text="Price" />
          <Button text="Rooms and beds" />
          <Button text="More filters" />
        </div>
      </div>
      {searchCardInfo.map(card=>
         <SearchCard key={card.id} {...card} length={searchCardInfo.length} />
      )}

    </div>
  )
}

export default Search
