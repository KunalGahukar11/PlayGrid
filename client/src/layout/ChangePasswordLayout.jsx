import React from 'react'

const ChangePasswordLayout = ({ title, children }) => {
    return (
        <main className='flex flex-col p-5'>
            <h1 className='font-semibold text-[20px] text-primary mb-6'>{title}</h1>
            <p className='font-semibold text-[16px] mb-4'>Verify with OTP to change Password sent to 9458712347</p>
            {children}
        </main>
    )
}

export default ChangePasswordLayout