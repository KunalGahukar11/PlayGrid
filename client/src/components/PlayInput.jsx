import React, { useState } from 'react'


const PlayInput = ({ placeholder,
    prefix = null,
    suffix = null,
    altSuffix = null,
    type,
    value,
    error,
    name,
    handleChange,
}) => {
    const [isPassVisible, setIsPassVisible] = useState(false);

    const handleAction = () => {
        setIsPassVisible(prev => !prev);
    };

    return (
        <>
            <div className='border-2 border-primary rounded-lg bg-white/80 backdrop-blur-sm mb-2'>
                <div className='flex items-center p-2 gap-3 w-full'>
                    {
                        prefix && (
                            <span className='text-primary'>
                                {prefix}
                            </span>
                        )
                    }

                    <input type={type === 'password' && isPassVisible ? 'text' : type}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        onChange={handleChange}
                        // required={required}
                        className='flex-1 min-w-0 border-none outline-none' />

                    {
                        suffix && type === "password" && (
                            <span className='cursor-pointer text-primary' onClick={handleAction}>
                                {isPassVisible ? altSuffix : suffix}
                            </span>
                        )
                    }
                </div>
            </div>
            {error && (
                <p className="text-red-500 text-sm ml-2 mb-2">
                    {error}
                </p>
            )}
        </>

    )
}

export default PlayInput