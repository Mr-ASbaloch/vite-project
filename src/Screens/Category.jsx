import React from 'react'
import Card from '../components/CategoryCard'
import img1 from '../assets/img1.png';

function Category() {
  return (

    <div className='lg:px-16'>
        <div className=' text-center lg: text-3xl  font-semibold mt-20 mb-10'>Product Categories</div>
        <div className=' flex flex-row justify-between w-1/3 mt-6 gap-4  mx-auto'>
            <div className='bg-[#E74040] rounded-tl-lg rounded-br-lg text-center text-xl w-full py-2'>All </div>
            <div className=' bg-gray-200 rounded-tl-lg  rounded-br-lg text-xl text-center w-full  py-2'>Beef</div>
            <div className='bg-gray-200 rounded-tl-lg  rounded-br-lg text-xl text-center w-full   py-2'>Mutton</div>
            <div className='bg-gray-200 rounded-tl-lg  rounded-br-lg text-xl text-center w-full  py-2'>Chicken</div>
        </div>
        <div className='flex flex-row flex-wrap'>
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />
            <Card src={img1} name={'Chuck-7 Bone Pot '} price={'130'} time={'30'} />

        </div>
    </div>
  )
}

export default Category