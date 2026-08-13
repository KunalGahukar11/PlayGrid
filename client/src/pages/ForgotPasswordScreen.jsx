import React from 'react'
import PlayButton from '../components/PlayButton'
import ChangePasswordLayout from '../components/ChangePasswordLayout'

const ForgotPasswordScreen = () => {
    return (
        <ChangePasswordLayout title={"Forgot Password"}>
            <form action="" className='flex flex-col w-full max-w-75 gap-4'>
                <div className='flex justify-center gap-4'>
                    <input type="number" className="border border-gray-300 rounded-lg w-10 h-10 text-center text-lg font-semibold" />
                    <input type="number" className="border border-gray-300 rounded-lg w-10 h-10 text-center text-lg font-semibold" />
                    <input type="number" className="border border-gray-300 rounded-lg w-10 h-10 text-center text-lg font-semibold" />
                    <input type="number" className="border border-gray-300 rounded-lg w-10 h-10 text-center text-lg font-semibold" />
                </div>
                <PlayButton title={"Submit"} />
                <p className='font-normal text-[16px] text-gray-400'>Didn't receive it?
                    <span className='text-black'> Retry in 00:60</span>
                </p>
            </form>
        </ChangePasswordLayout>
    )
}

export default ForgotPasswordScreen