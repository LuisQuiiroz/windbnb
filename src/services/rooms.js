const baseUrl = 'http://localhost:3000'

async function getAllRooms () {
  const res = await fetch(`${baseUrl}/api/rooms`)
  return await res.json()
}

async function getRoom (id) {
  const res = await fetch(`${baseUrl}/api/rooms/${id}`)
  return await res.json()
}
export {
  getAllRooms,
  getRoom
}
