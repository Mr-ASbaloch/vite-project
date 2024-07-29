import React from 'react';


// import { AiFillHeart } from 'react-icons/ai';
// import { AiOutlineClockCircle } from 'react-icons/ai';



const Card = ({ src, name, price, time }) => {
  return (
    <div className='bg-white rounded-lg  p-4 m-2'>
      <img
        src={src}
      className='w-full h-40 rounded-lg border border-gray-200 shadow-md overflow-hidden '
      />
      <p className='text-lg font-bold mt-2'>{name}</p>
      <div className=' flex  flex-row justify-between'>
      <p className='text-lg font-bold mt-2 text-[#E62F39]'>{`$${price}/Kg`}</p>
      <div className='flex-row items-center mt-1'>
        {/* <AiOutlineClockCircle size={20} color="orange" /> */}
        <p className='ml-1 text-gray-600'>{time} min</p>
      </div>
      </div>
     <button className='bg-white text-black border-black border  w-full rounded-lg py-2 mt-4'> order now</button>
      <div className='absolute top-2 right-2'>
        {/* <AiFillHeart size={24} color="gray" /> */}
      </div>
    </div>
  );
};

export default Card;
