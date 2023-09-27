import roomsDb from '@/mocks/db.json'
export function GET () {
  return new Response(JSON.stringify(roomsDb))
}
