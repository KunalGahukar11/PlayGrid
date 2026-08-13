import React from 'react'

const PlayButton = ({ title, handleClick }) => {
    return (
        <button className='w-full max-w-85 h-12.5 rounded-[10px] font-medium text-[20px] bg-primary text-tertiary' onClick={handleClick}>
            {title}
        </button>
    )
}

export default PlayButton