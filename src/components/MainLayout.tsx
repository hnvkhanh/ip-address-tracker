import { Header } from "./Header.component"
import { Coordinate, Map } from "./Map.component"
import { Result } from "./Result.component"
import { useState } from 'react'

type Props = {}

export const MainLayout = (props: Props) => {
  const [coordinate, setCoordinate] = useState<Coordinate>({
    lat: 51.505,
    long: -0.09
  })
  return (
    <div className="font-rubik flex flex-col h-[100vh]">
      <Header />
      <div className="flex justify-center items-center">
        <Result setCoordinate={setCoordinate}/>
      </div>
      <Map coordinate={coordinate} />
    </div>
  )
}