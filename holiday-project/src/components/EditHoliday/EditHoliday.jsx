import React from 'react'
import { useEffect, useState } from 'react'

import './EditHoliday.scss'

const EditHoliday = ({match}) => {
    const holidayId = match.params.holidayId
    const [title,setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')


    useEffect(() => {
        // Fetch holiday data based on holidayId from API and populate the form fields
        const URL = ''
        const fetchHolidayData = async () => {
            try {
                const response = await fetch(URL)
                const holiday = await response.json()
                setTitle(holiday.title)
                setLocation(holiday.location)
                setDate(holiday.date)
            } catch (error) {
                console.log('Error fetching holiday data:', error);
            }
        }
        fetchHolidayData()
    }, [holidayId])

    const handleEditHoliday = async () => {
        try {
            const updatedHoliday = {
                title,
                location,
                date
            }
        // Send updated holiday data to the API for editing
        await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updatedHoliday),
        })
        history.push(URL)
        } catch (error) {
            console.log('Error editing holiday:', error)
        }
    
    }

  return (
    <div className='edit-holiday-comp'>
        <h1 className='edit-holiday-title'>Edit Holiday {holidayId}</h1>
        <form className='edit-holiday-form'>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="button" onClick={handleEditHoliday}>Save Changes</button>
        </form>
    </div>
  )
}

export default EditHoliday