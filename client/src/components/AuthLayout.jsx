import React from 'react'

const AuthLayout = ({ title, subtitle = null, children }) => {
    return (
        <main className='flex flex-col min-h-screen items-center px-6 pt-18'>

            <div className='text-center mb-10'>
                <h1 className='font-semibold text-[32px] text-primary'>
                    {title}
                </h1>
                {
                    subtitle && (
                        <p className='text-[20px] font-bold'>
                            {subtitle}
                        </p>
                    )
                }
            </div>

            {children}
        </main>
    )
}

export default AuthLayout