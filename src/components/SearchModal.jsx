'use client'
import { useState } from 'react'
import { ExitIcon, SearchIcon } from './Icons'
import { Mulish } from 'next/font/google'
import LocationItem from './LocationItem'
import GuestsItem from './GuestsItem'
import { useStore } from '../store/useStore'
import { useRouter } from 'next/navigation'

const mulish = Mulish({ subsets: ['latin'] })

export default function SearchModal () {
  const [locationSection, setLocationSection] = useState(true)
  const [guestsSection, setGuestsSection] = useState(false)

  // state
  const location = useStore(state => state.location)
  const guestText = useStore(state => state.guestText)

  // functions
  const addLocation = useStore(state => state.addLocation)
  const changeModal = useStore(state => state.changeModal)

  const router = useRouter()

  const closeModal = (e) => changeModal(false)

  const toggleLocation = () => {
    setLocationSection(true)
    setGuestsSection(false)
  }

  const toggleGuests = () => {
    setLocationSection(false)
    setGuestsSection(true)
  }

  const search = (e) => {
    e.preventDefault()
    closeModal()
    router.push('/')
  }

  return (
    <div className='bg-gray-1 bg-opacity-50  fixed top-0 left-0 right-0 bottom-0' onClick={closeModal}>
      <div
        className={`flex-col fixed top-0 left-0 right-0 bg-white h-auto ${mulish.className}`}
        onClick={e => e.stopPropagation()}
      >
        <div className='flex justify-between items-center m-5'>
          <p className='text-gray-1 text-xs font-bold'>Edit your search</p>
          <button type='button' onClick={closeModal}>
            <ExitIcon />
          </button>
        </div>
        <form onSubmit={search}>
          <div className='mx-5 bg-white rounded-2xl border shadow-md md:grid md:gap-4 md:grid-cols-3'>
            <div
              className={`px-6 py-3  rounded-2xl cursor-pointer ${locationSection ? 'md:border md:border-gray-1' : ''}`}
              onClick={toggleLocation}
            >
              <label className='uppercase text-2xs block font-extrabold mb-1' htmlFor='location'>
                Location
              </label>
              <input
                className='text-gray-1 text-sm outline-none w-full'
                type='text'
                id='location'
                name='inputLocation'
                placeholder='Add place'
                value={location}
                onChange={(e) => addLocation(e.target.value)}
              />
            </div>
            <div
              className={`px-6 py-3  rounded-2xl cursor-pointer ${guestsSection ? 'md:border md:border-gray-1' : ''}`}
              onClick={toggleGuests}
            >
              <label className='uppercase text-2xs block font-extrabold mb-1' htmlFor='guests'>
                Guests
              </label>
              <input
                className='text-gray-1 text-sm outline-none w-full'
                type='text'
                id='guests'
                name='inputGuests'
                placeholder='Add guests'
                value={guestText}
                readOnly
              />
            </div>
            <button
              className=' hidden md:flex mx-auto items-center justify-center m-1 py-4 px-7 gap-3 rounded-2xl bg-orange-1 text-white text-sm font-medium'
              type='submit'
            >
              <SearchIcon />
              Search
            </button>
          </div>
          <div className='md:grid md:grid-cols-3'>
            <div>
              {locationSection && <LocationItem />}
            </div>
            <div>
              {guestsSection && <GuestsItem />}
            </div>
          </div>
          <button
            className='md:hidden flex my-10 mx-auto items-center justify-center py-4 px-7 gap-3 rounded-2xl bg-orange-1 text-white text-sm font-medium'
            type='submit'
          >
            <SearchIcon />
            Search
          </button>
        </form>
      </div>
    </div>
  )
}
