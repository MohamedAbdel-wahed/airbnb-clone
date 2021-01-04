import React from 'react'
import {withRouter} from 'react-router-dom'

function Header({history}) {
  
  const goHome= ()=> history.push('/')

  return (
    <div className="w-full  h-20 fixed top-0 z-30 bg-white flex items-center border-b border-gray-100 shadow-sm px-3.5 sm:px-8 md:px-10 overflow-x-hidden">
       <img onClick={goHome} src="/images/airbnb.svg" className="w-20 sm:w-28 cursor-pointer" alt="logo"/>
      <div className="flex-1 flex justify-center ml-3.5">
        <div className="w-full md:w-9/12 lg:w-7/12 flex items-center py-1.5 pl-4 pr-2 border rounded-full overflow-hidden">
           <input className="flex-shrink w-full text-sm sm:text-base text-gray-600 focus:outline-none" placeholder="Search" />
           <img src="/images/search.svg" className="w-8 cursor-pointer" alt="search"/>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
