import { useParams } from 'react-router-dom'
import { useBridgesById } from '../hooks/useBridge.ts'
import Status from './Status.tsx'
import RegPatrol from './RegPatrol.tsx'
<<<<<<< HEAD
import Map from './Map.tsx'
=======
import { useQueryClient } from '@tanstack/react-query'

>>>>>>> cc36abb1d9846bf088c6c2ffe3f471885bf812f0
export default function ViewBridge() {
  const queryClient = useQueryClient()
  const params = useParams()
  const id = Number(params.id)
  const { data: bridge, error, isPending, refetch } = useBridgesById(id)

  const handleInvalidate = (id: number) => {
    console.log('Invalidating bridges query and refetching data.')
    queryClient.invalidateQueries({
      queryKey: ['bridge', id],
    })
    refetch()
  }

  if (isNaN(id)) {
    throw new Error(`Route param "id" is missing orinvalid`)
  }

  if (isPending) {
    return <p>Is Loading...</p>
  }

  if (error) {
    return <p> Bridge lost on the way </p>
  }

  return (
    <>
      <div className="custom_flex container mx-auto mt-8">
        <div className="w-1/3 px-8">
          <img
            className="h-auto w-full"
            alt={`${bridge.name} during the daytime`}
            src={`/bridges/${bridge.imagePath}`}
          />
        </div>

        <div className="flex w-1/3 flex-col">
          <div>
            <h2 className="heading-2 pb-6">{`${bridge.name}`}</h2>
          </div>

          <div className="flex items-center pb-6">
            <div className="flex flex-row gap-1 py-2">
              <button className="primary_button mr-6">Fav Button</button>
              <Status id={bridge.id} />
              <RegPatrol id={bridge.id} onInvalidated={handleInvalidate} />
            </div>
          </div>

          <div>
            <p>
              <span className="font-bold">Bridge Type:</span>
              {` ${bridge.type}`}
            </p>
            <p>
              <span className="font-bold">Year Built:</span>
              {` ${bridge.yearBuilt}`}
            </p>
            <p>
              <span className="font-bold">Length:</span>
              {` ${bridge.lengthMeters}M`}
            </p>
            <p>
              <span className="font-bold">Car Lanes:</span>
              {` ${bridge.lanes}`}
            </p>
          </div>
        </div>
      </div>
      <Map />
    </>
  )
}
