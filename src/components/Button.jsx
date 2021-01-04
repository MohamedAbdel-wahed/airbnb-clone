import React from 'react'

function Button({text}) {
  return (
    <button className="mt-2 mx-2 px-4 py-1 text-sm md:text-base text-gray-700 bg-white hover:bg-gray-100 focus:bg-gray-100 border-2 border-gray-300 rounded-full focus:outline-none focus:shadow-md">
      {text}
    </button>
  )
}

export default Button
