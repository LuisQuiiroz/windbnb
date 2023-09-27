import Link from 'next/link'
import { StarIcon } from './Icons'
import { countText } from '@/app/utils/text'

export default function ItemCard ({ item }) {
  const { id, superHost, title, rating, type, beds, photo } = item
  const countBeds = countText('bed', beds)
  const details = beds ? `${type}, ${countBeds}` : `${type}`

  return (
    <Link
      href={`/rooms/${id}`}
      className='cursor-pointer'
      target='_blank' rel='noreferrer'
    >
      <img className='rounded-3xl w-full h-60 object-cover' src={photo} alt={title} />
      <div className='flex justify-between pt-3 pb-1 px-1 gap-3'>
        <div className='flex items-center gap-3'>
          {superHost && (
            <p className='text-gray-2 text-2xs font-bold uppercase rounded-full py-1 md:py-2 px-2  border border-gray-2 text-center'>Super host</p>
          )}
          <p className='text-gray-3 text-xs md:text-sm font-medium'>{details}</p>
        </div>
        <div className='flex items-center'>
          <span className='text-orange-1'><StarIcon /></span>
          <p className='text-gray-2 text-xs md:text-sm font-medium'>{rating}</p>
        </div>
      </div>
      <h3 className='text-gray-1 text-sm md:text-base font-semibold px-1'>{title}</h3>
    </Link>
  )
}
