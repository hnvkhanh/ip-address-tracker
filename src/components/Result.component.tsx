import axios from 'axios';
import React, { useState, useEffect } from 'react'

type Props = {}

let returnedObject = {
  "ip": "8.8.8.8",
  "location": {
    "country": "US",
    "region": "California",
    "timezone": "-07:00",
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
  const apiKey = import.meta.env.VITE_APP_API_KEY;  
  // const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=192.212.174.101`;
  // let returnedObject;
  // axios.get(apiUrl)
  //   .then((response) => {
  //     returnedObject = response.data;
  //     console.log(returnedObject)
  //   })
  //   .catch((error) => {
  //     console.error('There was a problem with the GET request:', error);
  //   });

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
    <div className={`h-[300px] w-[85%] mt-[${screenHeight < 800 ? '28vh' : '20%'}]bg-white rounded-2xl absolute z-10 flex flex-col items-center gap-y-4 p-7`}>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-darkGray text-xs'>IP ADDRESS</p>
        <h1 className='text-2xl '>{returnedObject.ip}</h1>
      </div>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-darkGray text-xs'>LOCATION</p>
        <h1 className='text-2xl '>{`${returnedObject.location.region}, ${returnedObject.location.country}`}</h1>
      </div>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-darkGray text-xs'>TIMEZONE</p>
        <h1 className='text-2xl '>{`UTC ${returnedObject.location.timezone}`}</h1>
      </div>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-darkGray text-xs'>ISP</p>
        <h1 className='text-2xl '>{returnedObject.isp}</h1>
      </div>

    </div>
  )
}