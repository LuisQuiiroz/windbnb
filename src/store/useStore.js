import { getAllRooms } from '@/services/rooms'
import { create } from 'zustand'
export const useStore = create((set, get) => ({
  rooms: [],
  location: '',
  guestText: '',
  guests: 0,
  adultGuests: 0,
  kidsGuests: 0,
  modal: false,
  getRoomsFromStore: async () => set({ rooms: await getAllRooms() }),
  addLocation: location => set({ location }),
  addGuestText: guestText => set({ guestText }),
  changeGuests: guests => set({ guests }),
  changeAdultGuests: qty => set({ adultGuests: qty }),
  changeKidsGuests: qty => set({ kidsGuests: qty }),
  changeModal: type => set({ modal: type })
}))
