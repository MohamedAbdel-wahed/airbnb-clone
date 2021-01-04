import React from 'react'


function SearchCard({length,id,src,title,description,features,rating,price}) {
  return (
    <div className={`search__card sm:px-1 lg:px-8 py-6 flex flex-col sm:flex-row items-center bg-white ${id===length-1 ? '' : 'border-b-2 border-gray-300'} cursor-pointer`}>
        <div className="w-10/12 sm:w-6/12 flex justify-end">
           <img src={src} className="w-full h-64 sm:h-72 md:h-80 sm:w-11/12 lg:10/12 mr-2 rounded-lg object-cover" alt="search_card"/>
        </div>
        <div className="relative mt-3 sm:mt-0 mr-auto ml-4 sm:ml-7 w-10/12 sm:w-6/12 h-72 md:h-80 px-4 sm:px-5 py-3 text-sm text-gray-400">
             <p className="break-words">{description}</p>
             <h1 className="my-3 text-gray-800 text-xl sm:text-2xl tracking-wide break-words">{title}</h1>
             <p className="my-4">____</p>
             <p className="my-4 w-10/12 lg:w-7/12 break-words tracking-wide">{features}</p>
             <div className="w-full sm:pr-10 md:pr-16 mt-11 md:mt-16 lg:mt-24 text-gray-600 font-bold flex justify-between items-center">
                <div className="text-base sm:text-lg md:text-xl">⭐ {rating}</div>
                <div className="text-lg sm:text-xl md:text-2xl">{price}</div>
             </div>
        </div>

    </div>
  )
}

export default SearchCard
