import React from 'react'

const PlayListItem = ({ icon, itemName }) => {
    return (
        <li className='flex gap-2 items-center ml-2'>
            <span className='text-2xl'>{icon}</span>
            <p className='font-medium text-xl'>{itemName}</p>
        </li>
    )
}

export default PlayListItem