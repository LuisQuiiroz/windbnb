'use client'
import Link from 'next/link'
import { useStore } from '../store/useStore'
import { SearchIcon } from './Icons'
import SearchModal from './SearchModal'

export default function Navigation () {
  const location = useStore(state => state.location)
  const guestText = useStore(state => state.guestText)
  const modal = useStore(state => state.modal)
  const changeModal = useStore(state => state.changeModal)
  const toggleModal = () => changeModal(true)

  return (
    <div className='sticky top-0 left-0 right-0 bg-white border-b'>
      <nav className='md:flex justify-between items-center py-4 px-4 container mx-auto'>
        <Link href='/'>
          <img src='/logo.svg' alt='windbnb_logo' />
        </Link>
        <div className='rounded-2xl mt-6 mb-2 md:my-0 md:mx-0 shadow-sm bg-white max-w-sm mx-auto border cursor-pointer'>
          <ul className='flex gap-4 py-4 px-6 justify-around items-center text-sm' onClick={toggleModal}>
            <li>
              <input
                className='text-gray-1 text-sm outline-none placeholder:text-gray-4 w-full text-center'
                type='text'
                value={location}
                placeholder='Add location'
                readOnly
              />
            </li>
            <li>
              <input
                className='text-gray-1 text-sm outline-none placeholder:text-gray-4 w-full text-center'
                type='text'
                value={guestText}
                placeholder='Add guests'
                readOnly
              />
            </li>
            <li className='text-orange-1'><SearchIcon /></li>
          </ul>
        </div>
        {modal && <SearchModal />}
      </nav>
    </div>

  )
}
