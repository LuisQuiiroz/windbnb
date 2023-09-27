'use client'
import { MinusIcon, PlusIcon } from './Icons'
import { useStore } from '../store/useStore'
import { useEffect } from 'react'
import { countText } from '@/app/utils/text'

function CountItem ({ title, subtitle, quantity, changeValue }) {
  const removeOne = () => {
    if (quantity === 0) return
    const prev = quantity >= 1 ? quantity - 1 : quantity
    changeValue(prev)
  }
  const addOne = () => {
    if (quantity === 10) return
    const prev = quantity <= 9 ? quantity + 1 : quantity
    changeValue(prev)
  }
  return (
    <div>
      <p className='text-gray-1 text-sm font-bold'>{title}</p>
      <p className='text-gray-4 text-sm '>{subtitle}</p>
      <div className='flex gap-4 py-3'>
        <button
          className='border border-gray-3 rounded'
          onClick={removeOne}
          type='button'
        >
          <MinusIcon />
        </button>
        <span>{quantity}</span>
        <button
          className='border border-gray-3 rounded'
          onClick={addOne}
          type='button'
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}

export default function GuestsItem () {
  // state
  const adultGuests = useStore(state => state.adultGuests)
  const kidsGuests = useStore(state => state.kidsGuests)

  // functions
  const addGuestText = useStore(state => state.addGuestText)
  const changeGuests = useStore(state => state.changeGuests)
  const changeAdultGuests = useStore(state => state.changeAdultGuests)
  const changeKidsGuests = useStore(state => state.changeKidsGuests)

  const updateGuestsText = () => {
    const numGuest = adultGuests + kidsGuests
    const textGuests = countText('guest', numGuest)
    changeGuests(numGuest)
    addGuestText(textGuests)
  }

  useEffect(updateGuestsText, [adultGuests, kidsGuests])

  return (
    <div className='px-10 py-8'>
      <div className='pb-7'>
        <CountItem title='Adults' subtitle='Ages 13 or above' quantity={adultGuests} changeValue={changeAdultGuests} />
      </div>
      <div className=''>
        <CountItem title='Children' subtitle='Ages 1-12' quantity={kidsGuests} changeValue={changeKidsGuests} />
      </div>
    </div>
  )
}
