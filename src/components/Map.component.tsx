import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import markerIcon from '../assets/icon/icon-location.svg'


type Props = {
  coordinate: Coordinate,
}

var customMarkerIcon = new Icon({
  iconUrl: markerIcon,
});

export type Coordinate = {
  lat: number,
  long: number
}

export function ChangeView(props: Props) {
  const map = useMap()
  map.setView([props.coordinate.lat, props.coordinate.long], map.getZoom())
  return null
}

export const Map = (props: Props) => {
  return (
    <div className='h-full z-0'>
      <MapContainer center={[props.coordinate.lat, props.coordinate.long]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <ChangeView coordinate={props.coordinate} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[props.coordinate.lat, props.coordinate.long]} icon={customMarkerIcon}>
        </Marker>
        <button id="change-view" className='hidden'></button>
      </MapContainer>
    </div>

  )
}