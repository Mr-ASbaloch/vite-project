import React from 'react'
import meat from '../assets/meat.png'

function About() {
  return (
    <div>
      <>
  {/* source https://github.com/themesberg/landwind */}
  <section className="bg-[#232020]">
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
      <div className="mr-auto place-self-center lg:col-span-5">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
        Meat Distribution 
        </h1>
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
        For Restaurants
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Order the finest meat from trusted suppliers easily and efficiently.
         
        </p>
        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href=""
            target="_blank"
            className="inline-flex items-center w-[180px]  rounded-lg py-5 justify-center px-5  text-sm font-medium  bg-[#E74040] text-white text-center"
          >
          
          Browse Products   
          </a>
        
          
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-7 bg-contain lg:flex">
        <img
          src={meat}
          alt="hero image"
        />
      </div>
    </div>
  </section>
</>

        </div>
  )
}

export default About