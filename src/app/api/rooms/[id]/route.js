import roomsDb from '@/mocks/db.json'

export function GET (request, { params }) {
  const room = roomsDb.find(room => room.id === Number(params.id))
  return new Response(JSON.stringify(room))
}
