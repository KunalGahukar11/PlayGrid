import React from 'react'

const PlayButton = ({ title, handleClick, type, disabled, buttonType }) => {
    return (
        <button type={type} className={`w-full max-w-85 h-12.5 rounded-[10px] font-medium text-[20px]
        ${buttonType === 'danger' ? 'bg-red-500' : 'bg-primary'}
         text-tertiary 
         ${disabled ? 'cursor-not-allowed' : ''}`}
            onClick={handleClick}
            disabled={disabled}>
            {title}
        </button>
    )
}

export default PlayButton