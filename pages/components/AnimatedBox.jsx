import { useState, useEffect } from 'react';
import {RiRfidLine} from 'react-icons/ri';

export const AnimatedBox = () => {
    const [currWidth, setcurrWidth] = useState(0);
    useEffect(() => {
        var curr = (window.innerWidth/2);
        setcurrWidth(curr);

    })
    // className={`bg-text animate-comein min-[320px]:w-[15rem] md:w-[20rem] h-[20rem] rounded-2xl absolute -top-[30rem] flex justify-between place-content-between flex-col items-center`}
  return (
    <div className='relative flex w-full h-full justify-center'>
      <div
        className={`bg-text animate-comein min-[320px]:w-[15rem] md:w-[20rem] h-[20rem] rounded-2xl absolute -top-[30rem] flex justify-between place-content-between flex-col items-center`}
    >
      <div className='translate-y-20 rotate-90'>
      <p className='text-sm font-bold  text-background'>{`AKSHAY'S PORTFOLIO`}</p>
      <p className='text-sm font-medium '>Key accepted</p>
      </div>
      <RiRfidLine className='z-50 text-[5rem] text-ascent animate-ping'/>
    </div>
    </div>
    
  );
};
