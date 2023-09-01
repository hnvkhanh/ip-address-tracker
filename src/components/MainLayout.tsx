import { Header } from "./Header.component"
import { Map } from "./Map.component"
import { Result } from "./Result.component"

type Props = {}

export const MainLayout = (props: Props) => {
  return (
    <div className="font-rubik flex flex-col h-[100vh] overflow-scroll">
      <Header />
      <div className="flex justify-center items-center">
        <Result />
      </div>
      <Map />
    </div>
  )
}