'use client'
import ItemCard from './ItemCard'
import { useStore } from '@/store/useStore'
import { useEffect } from 'react'

export default function RoomList () {
  const rooms = useStore(state => state.rooms)
  const location = useStore(state => state.location)
  const guests = useStore(state => state.guests)
  const getRoomsFromStore = useStore(state => state.getRoomsFromStore)

  const matchFilters = (rooms, location, guests) => rooms.filter(room => {
    const matchLocation = location === '' || location === `${room.city}, ${room.country}`
    const matchGuests = guests === 0 || guests <= room.maxGuests
    return matchLocation && matchGuests
  })

  const filteredRooms = matchFilters(rooms, location, guests)
  useEffect(() => {
    getRoomsFromStore()
  }, [])

  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {
        filteredRooms.map(item => (
          <ItemCard item={item} key={item.id} />
        ))
      }
    </div>
  )
}
