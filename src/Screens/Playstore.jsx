import React from 'react'

import app from '../assets/app.png'
import apple from '../assets/apple.png'
import play from '../assets/play.png'

function Playstore() {
    return (
        <section className="">
            <div className="grid max-w-screen-xl px-4 pb-8 mx-auto mt-20 lg:gap-8 xl:gap-0 lg:grid-cols-12 ">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-xl  font-extrabold leading-none tracking-tight md:text-xl xl:text-5xl ">
                        Download Our App To Start New Journey With Us
                    </h1>
                  
                    <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <div className="space-y-4   sm:flex sm:space-y-0 sm:space-x-4">
                        <img src={apple} alt="" className='w-[150px] h-[180px]' />
                       

                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 bg-contain lg:flex">
                    <img
                        src={app}
                        alt="hero image"
                        className='w-[450px] h-[480px]'
                    />
                </div>
            </div>
        </section>
    )
}

export default Playstore