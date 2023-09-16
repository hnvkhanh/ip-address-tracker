import { Dispatch, SetStateAction, useState } from "react"

type Props = {
  setIp: Dispatch<SetStateAction<string>>
}

export const Header = (props: Props) => {
  const [inputValue, setInputValue] = useState('');
  const handleClick = () => {
    props.setIp(inputValue);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }


  return (
    <div className='h-[45%] bg-mobile bg-cover flex flex-col items-center p-8 gap-y-4 z-10'>
      <p className='text-white text-3xl font-medium mb-2'>IP Address Tracker</p>
      <div className='flex w-full'>
        <input className='w-[81%] h-14 rounded-l-2xl p-3 text-input focus:outline-none'
          placeholder='Search for any ID address or domain' value={inputValue} onChange={handleChange}></input>
        <button
          className='w-[19%] bg-veryDarkGray text-white rounded-r-2xl h-14 flex items-center justify-center'
          onClick={handleClick}
        >
          <img
            src={"/icon/icon-arrow.svg"}
            alt="Arrow Icon"
          />
        </button>
      </div>
    </div>
  )
}