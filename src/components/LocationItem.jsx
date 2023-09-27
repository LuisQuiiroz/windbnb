import { useEffect, useState } from 'react'
import { useStore } from '../store/useStore'
import { LocationIcon } from './Icons'
import { getAllRooms } from '../services/rooms'

export default function LocationItem () {
  const [locations, setLocations] = useState([])
  const addLocation = useStore(state => state.addLocation)
  useEffect(() => {
    getAllRooms()
      .then((data) => {
        const locationsAvailable = [...new Set(data.map((item) => `${item.city}, ${item.country}`))]
        setLocations(locationsAvailable)
      })
  }, [])
  return (
    <div className='py-6 px-10'>
      {
        locations.map(item => (
          <div
            className='flex items-center gap-2 text-gray-2 text-sm py-4 cursor-pointer'
            key={item}
            onClick={() => addLocation(item)}
          >
            <LocationIcon />
            {item}
          </div>
        ))
      }
    </div>
  )
}
