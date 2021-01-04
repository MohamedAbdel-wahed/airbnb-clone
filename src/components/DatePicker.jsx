import React,{useState} from 'react'
import {withRouter} from 'react-router-dom'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import '../styles/DatePicker.css'


function DatePicker({history}) {

  const [datePicker,setDatePicker]= useState(false)
  const [startDate,setStartDate]= useState(new Date())
  const [endDate,setEndDate]= useState(new Date())

  const selectionRange= {
    startDate,
    endDate,
    key: 'selection'
  }

  const handleSelect= (ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className="date__picker w-full flex flex-col items-center">
      <button 
      onClick={()=>setDatePicker(!datePicker)} 
      className="py-3 bg-white text-center text-red-400 font-bold text-sm focus:outline-none uppercase tracking-wide" 
      >{datePicker?'Hide':'Search Dates'}</button>
      
      {datePicker&&(
        <div className="flex flex-col items-center" style={{width: '100vw'}}>
          <DateRangePicker 
          ranges={[selectionRange]} 
          onChange={handleSelect} />
          <div className="py-2 px-4 bg-white" style={{width: '560px'}}>
            <div className="px-1 flex items-center justify-between">
              <h1 className="text-xl font-bold">Number of guests</h1>
              <img src="/images/people.svg" alt="people" className="w-8"/>
            </div>
            <input type="number" min={0} defaultValue={2} className="border rounded-md font-bold text-gray-700 text-sm inline-block mt-2 py-1 px-3 focus:outline-none " />
            <button 
            onClick={()=> history.push('/search-results')}
            className="w-full inline-block my-3.5 px-3 py-2 text-sm font-semibold tracking-wide bg-red-500 border rounded-md text-white uppercase hover:bg-gray-200 hover:text-gray-600 transition-all duration-500 ease-out focus:outline-none focus:border-gray-400"
            >search airbnb</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default withRouter(DatePicker)
