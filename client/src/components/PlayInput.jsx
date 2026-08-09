import React from 'react'


const PlayInput = ({ placeholder, prefix = null, suffix = null, type, value, handleChange }) => {
    return (
        <div className='flex items-center border-2 border-primary rounded-lg p-2 gap-3 w-full mb-3'>
            {
                prefix && (
                    <span className='text-primary'>
                        {prefix}
                    </span>
                )
            }

            <input type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className='flex-1 min-w-0 border-none outline-none' />

            {
                suffix && (
                    <span className='cursor-pointer text-primary'>
                        {suffix}
                    </span>
                )
            }
        </div>
    )
}

export default PlayInput