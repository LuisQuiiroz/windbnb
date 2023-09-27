const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://windbnb-q.netlify.app/'
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
