import axios from 'axios';
import { useEffect, useState } from 'react';
import { ChangeView, Coordinate } from './Map.component';

type Props = {
  setCoordinate: React.Dispatch<React.SetStateAction<Coordinate>>
}

const returnedObject = {
  "ip": "8.8.8.8",
  "location": {
    "country": "US",
    "region": "California",
    "city": "Mountain View",
    "lat": 37.40599,
    "lng": -122.078514,
    "postalCode": "94043",
    "timezone": "-07:00",
    "geonameId": 5375481
  },
  "domains": [
    "0d2.net",
    "003725.com",
    "0f6.b0094c.cn",
    "007515.com",
    "0guhi.jocose.cn"
  ],
  "as": {
    "asn": 15169,
    "name": "Google LLC",
    "route": "8.8.8.0/24",
    "domain": "https://about.google/intl/en/",
    "type": "Content"
  },
  "isp": "Google LLC"
}

export const Result = (props: Props) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [geo, setGeo] = useState(returnedObject)
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=192.212.174.101`;
  const handleClick = () => {
    axios.get(apiUrl)
      .then((response) => {
        setGeo(response.data);
        props.setCoordinate({
          lat: response.data.location.lat,
          long: response.data.location.lng
        })       
      })
      .catch((error) => {
        console.error('There was a problem with the GET request:', error);
      });
   
  }

  useEffect(() => {
    const updateScreenHeight = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateScreenHeight);
    return () => {
      window.removeEventListener('resize', updateScreenHeight);
    };
  }, []);

  return (
    <div className={`h-fit w-[85%] mt-[${screenHeight < 800 ? '30vh' : '30%'}] text-center bg-white rounded-2xl absolute z-10 flex flex-col items-center gap-y-4 p-7`}>
      <div className='flex flex-col items-center font-bold'>
        <p onClick={handleClick} className='text-darkGray text-xs'>IP ADDRESS</p>
        <h1 className='text-2xl '>{geo.ip}</h1>
      </div>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-darkGray text-xs'>LOCATION</p>
        <h1 className='text-2xl'>{`${geo.location.city}, ${geo.location.region}, ${geo.location.country} ${geo.location.postalCode}`}</h1>
      </div>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-darkGray text-xs'>TIMEZONE</p>
        <h1 className='text-2xl '>{`UTC ${geo.location.timezone}`}</h1>
      </div>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-darkGray text-xs'>ISP</p>
        <h1 className='text-2xl '>{geo.isp}</h1>
      </div>

    </div>
  )
}