import React from 'react'
import CricketBro from "../assets/images/Cricket-bro 1.svg"
import PlayButton from '../components/PlayButton'

const SplashScreen = () => {
    return (
        <main className='flex flex-col items-center min-h-screen pt-18.25 pb-10'>
            <div className='mb-4'>
                <div className='text-center mb-6'>
                    <h1 className='font-semibold text-5xl text-primary'>GEAR UP <br /> A BIG GAME</h1>
                    <p className='text-[20px] font-bold'>Have Fun with Friends!</p>
                </div>
                <img className='w-[85vw] max-w-85' src={CricketBro} alt="cricketboy" />
            </div>
            <div className='mt-auto w-full text-center'>
                <PlayButton title="Get Started" />
            </div>
        </main>
    )
}

export default SplashScreen