import React from 'react'
import { useState } from 'react'

import './AddHoliday.scss'

const AddHoliday = () => {
    const [title,setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')

    const handleAddHoliday = async () => {
        //Implement add-holiday logic
        try {
            const newHoliday = {
                title,
                location,
                date
            }
             // Send new holiday data to the API for addition
             await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(newHoliday)
             })
             // Redirect to the dashboard page after adding the holiday
             history.push(URL)
        } catch (error) {
            console.log('Error adding holiday:', error);
        }
    }

  return (
    <div className='add-holiday-comp'>
        <h1 className='add-holiday-title'>Add Holiday</h1>
        <form className='add-holiday-form'>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="button" onClick={handleAddHoliday}>Add Holiday</button>
        </form>
    </div>
  )
}

export default AddHoliday