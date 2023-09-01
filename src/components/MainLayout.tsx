import { Header } from "./Header.component"
import { Map } from "./Map.component"

type Props = {}

export const MainLayout = (props: Props) => {
  return (
    <div className="font-rubik flex flex-col h-[100vh]">
      <Header />
      <Map />
    </div>
  )
}