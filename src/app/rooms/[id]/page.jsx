import { countText } from '@/app/utils/text'
import { StarIcon } from '@/components/Icons'
import { getRoom } from '@/services/rooms'

export default async function Page ({ params }) {
  const { id } = params
  const room = await getRoom(id)
  const { city, country, superHost, title, rating, maxGuests, beds, photo } = room
  const displayLocation = `${city}, ${country}`
  const countGuests = `max ${countText('guest', maxGuests)}`
  const countBeds = countText('bed', beds)
  const details = `${countGuests} · ${countBeds}`
  return (
    <div className='mt-6 p-4'>
      <h2 className='text-gray-1 text-xl md:text-2xl font-semibold mb-4'>{displayLocation}</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 rounded-xl overflow-hidden gap-2'>
        <img className='w-full h-full object-cover col-span-2 row-span-2' src={photo} alt={title} />
        <img className='w-full object-cover' src={photo} alt={title} />
        <img className='w-full object-cover' src={photo} alt={title} />
        <img className='w-full object-cover' src={photo} alt={title} />
        <img className='w-full object-cover' src={photo} alt={title} />
      </div>
      <h3 className='text-gray-1 text-xl md:text-2xl font-semibold mt-6 mb-2'>{title}</h3>
      <div className='flex items-center gap-3'>
        {superHost && (
          <p className='text-gray-2 text-2xs font-bold uppercase rounded-full py-1 md:py-2 px-2  border border-gray-2 text-center'>Super host</p>
        )}
        <p className='text-gray-3 text-sm md:text-base font-medium'>{details}</p>
      </div>
      <div className='flex items-center gap-2 pt-2'>
        <span className='text-orange-1'><StarIcon /></span>
        <p className='text-gray-2 text-xs md:text-sm font-medium'>{rating}</p>
      </div>
    </div>
  )
}
