import React from 'react'

const PlayHeading = ({ heading, styleProps }) => {
    return (
        <h1 className={`text-2xl sm:text-3xl font-bold ${styleProps}`}>{heading}</h1>
    )
}

export default PlayHeading