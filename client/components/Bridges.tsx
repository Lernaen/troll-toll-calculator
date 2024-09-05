import { Link, useNavigate } from 'react-router-dom'
import Status from './Status.tsx'
import RegPatrol from './RegPatrol.tsx'
import { useBridges } from '../hooks/useBridge.ts'
import { useQueryClient } from '@tanstack/react-query'
import IsAuthenticated from './IsAuthenticated.tsx'
import AddFavourite from './RegAddFavourites.tsx'
import { useCallback, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Bridges() {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const { data, isError, isPending, error, refetch } = useBridges()
  const queryClient = useQueryClient()
  const [token, setToken] = useState('wait')

  const fetchToken = useCallback(async () => {
    try {
      const tokenId = await getAccessTokenSilently()
      setToken(tokenId)
      return tokenId
    } catch {
      setToken('undefined')
      return 'undefined'
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    if (token === 'wait') {
      fetchToken()
    }
  }, [fetchToken, token])

  const handleInvalidate = (id: number) => {
    console.log('Invalidating bridges query and refetching data.')
    queryClient.invalidateQueries({
      queryKey: ['bridges'],
    })
    refetch()

    navigate(`/bridges/${id}`)
  }

  if (!data || isPending) {
    return <p>Fetching bridges from Auckland...</p>
  }
  if (isError) {
    return <p>Your bridges are gone! {error.message}</p>
  }

  return (
    <>
      <h1 className="heading-1 py-10 text-center">Auckland Bridges🧌</h1>
      <div className="container">
        <ul className="grid grid-cols-3 gap-4 border-purple-900">
          {data.map((bridge) => (
            <div key={bridge.id} aria-label={bridge.name}>
              <Link to={`/bridges/${bridge.id}`}>
                <div className="w-50 h-40 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    alt={`${bridge.name} during the daytime`}
                    src={`/bridges/${bridge.imagePath}`}
                  />
                </div>
                <h2 className="heading-3">{bridge.name}</h2>
              </Link>
              <div className="flex flex-row gap-1 py-2">
                <Status id={bridge.id} />
                <IsAuthenticated>
                  <RegPatrol id={bridge.id} onInvalidated={handleInvalidate} />
                </IsAuthenticated>
                <IsAuthenticated>
                  <AddFavourite
                    token={token}
                    id={bridge.id}
                    onInvalidated={() => null}
                  />
                </IsAuthenticated>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}
