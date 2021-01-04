import React from 'react'


function Card({src,title,description,price}) {
  return (
    <div className="home__card relative mt-2 w-72 sm:w-56 md:w-64 lg:w-72 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden cursor-pointer select-none transform translate-y-0 hover:-translate-y-4 transition-all duration-500 ease-out hover:z-10">
      <button className="w-full h-full absolute inset-0 bg-black opacity-0 hover:opacity-20 cursor-pointer z-20 transition-all duration-300 ease-out"></button>
      <img src={src} className="w-full h-48 object-cover" alt="home_card"/>
       <div className={`px-5 pt-4 ${price?'pb-12':'pb-4'} break-words`}>
           <h1 className="text-lg font-bold">{title}</h1>
           <p className="my-2 text-sm text-gary-700">{description}</p>
         {price && (<div className="absolute bottom-0 mb-4 text-indigo-600	 text-lg font-bold">{price}</div>)}
      </div>
    </div>
  )
}

export default Card
