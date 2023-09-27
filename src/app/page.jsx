import RoomList from '@/components/RoomList'

export default async function Home () {
  return (
    <main className='mx-4'>
      <div className='flex justify-between items-center  mt-10 mb-8'>
        <h2 className='text-gray-1 text-xl md:text-2xl font-bold '>Stays in Finland</h2>
        <p className='text-gray-2 text-sm'>12+ stays</p>
      </div>
      <RoomList />
    </main>
  )
}
