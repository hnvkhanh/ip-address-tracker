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
  const [ip, setIp] = useState('')
  return (
    <div className="font-rubik flex flex-col h-[100vh]">
      <Header setIp={setIp}/>
      <div className="flex justify-center items-center">
        <Result setCoordinate={setCoordinate} ip={ip}/>
      </div>
      <Map coordinate={coordinate} />
    </div>
  )
}