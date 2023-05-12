import React from 'react'
import { useEffect, useState } from 'react'

import './Dashboard.scss'

const Dashboard = () => {
  const [holidays, setHolidays] = useState([])
  
  useEffect(() => {
    //Fetch holidays from API
    const fetchHolidays = async () => {
      try{
        const response = await fetch(URL)
        const data = await response.json();
        setHolidays(data)
      }catch (error){

      }
    }
    fetchHolidays()
  }, [])

  const renderHolidays = () => {
    return holidays.map((holiday) => (
      <div key={holiday.id}>
        <h3>{holiday.title}</h3>
        <p>{holiday.location}</p>
        <p>{holiday.date}</p>
      </div>
    ))
  }
  

  return (
    <div className='dashboard-comp'>
        <h1 className='dashboard-title'>Dashboard</h1>
        {renderHolidays()}
    </div>
  )
}

export default Dashboard