import React from 'react'

const PlayButton = ({ title }) => {
    return (
        <button className='w-full max-w-75 h-12.5 rounded-[10px] font-medium text-[20px] bg-primary text-tertiary'>
            {title}
        </button>
    )
}

export default PlayButton