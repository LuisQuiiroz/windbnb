// error de incongruencia de datos por parte del servidor y del cliente
// es decir, cuando la store se guarda en localstorage, al cargar la página
// el servidor trae unos datos(vacios), y el cliente(navegador) carga y
// muestra los datos que tiene en localstorage, lo cual causa una inconguencia de datos a mostrar
// ej server: location = ''
//    client: location = 'Helsinki, Finland' (estaba guardado en localstorage)

// Solución:

import { useEffect, useState } from 'react'

export default function useZustandHook (store, callback) {
  // ej. result = useStore(state => state.loation)
  const result = store(callback)
  const [state, setstate] = useState()
  useEffect(() => {
    setstate(result)
  }, [result])
  return state
}

// ej. uso en un componente:
// const location = useZustandHook(useStore, (state) => state.location)

// créditos : https://www.youtube.com/watch?v=E0fp2KUWRtQ&ab_channel=Mohaniya
