import React from 'react'
import { useEffect, useState } from 'react'

import './Holiday.scss'

const Holdiay = ({match}) => {
    const holidayId = match.params.holidayId
    const [holiday, setHoliday] = useState(null)

    useEffect(() => {
      //Fetch holiday data based on holidayId from API
      const fetchHoliday = async () => {
        try {
          const response = await fetch(URL)
          const data = await response.json()
          setHoliday(data)
        } catch (error) {
          console.log('Error fetching holiday:', error);
        }
      }
      fetchHoliday 
    }, [holidayId])
    
    const renderHolidayEvents = () => {
      if (!holiday || !holiday.events || holiday.events.length === 0){
        return <p>No events found for this holiday</p>
      }

      return holiday.events.map((event) => (
        <div key = {event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          {/* Render event photos and other details */}
          <div>
            <h4>Photos: </h4>
            <ul>
              {event.photos.map((photo) => (
                <li key={photo.id}>
                  <img src = {photo.url} alt='Event Photo'/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))
    }

  return (
    <div className='holiday-comp'>
        <h1>Holiday {holidayId}</h1>
        {renderHolidayEvents()}
    </div>
  )
}

export default Holdiay