import React from 'react'
import { FaStar, FaLocationDot, FaHeart } from 'react-icons/fa6'
import { motion } from 'framer-motion'


const TurfCard = ({ url, turfName, location = 'India', rating = '-' }) => {

    const cardContainer = {
        normal: {},
        hover: {}
    };

    const imgAnimation = {
        normal: { scale: 1 },
        hover: { scale: 1.1 }
    }

    const itemAnimation = {
        normal: { y: 0 },
        hover: { y: -4 }
    };

    return (
        <>
            <motion.div variants={cardContainer} initial='normal' whileHover='hover'
                className='mx-auto my-10 h-48 sm:h-60 rounded-md relative overflow-hidden cursor-pointer'>
                <motion.img variants={imgAnimation}
                    transition={{
                        type: "tween",
                    }}
                    src={url}
                    alt="cover_photo"
                    className='w-full h-full absolute inset-0 object-cover' />

                {/* overlay */}
                <div className='bg-linear-to-b
                 from-black/20 via-black/50 to-black/90 
                 absolute h-full w-full rounded-md z-10'></div>

                {/* turf details */}
                <motion.div variants={itemAnimation}
                    transition={{ type: 'tween' }}
                    className='z-20 absolute bottom-4 left-4 right-4 text-amber-200 flex items-center gap-4 w-full'>

                    <h1 className='text-xl sm:text-4xl font-bold max-w-32 sm:max-w-100'>
                        {turfName}
                    </h1>

                    <div className='h-8 w-px bg-amber-100'></div>

                    <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                        <span className='flex gap-1 items-center sm:text-xl whitespace-nowrap'>
                            <FaLocationDot />
                            {location}
                        </span>

                        <div className='h-8 w-px hidden sm:block bg-amber-100'></div>

                        <span className='flex gap-1 items-center whitespace-nowrap'>
                            <FaStar />
                            {rating}
                        </span>
                    </div>
                </motion.div>

                {/* favourite button */}
                <button className='absolute h-8 w-8 sm:h-10 sm:w-10 rounded-full flex justify-center items-center top-3 right-3 bg-amber-100 border border-amber-100 hover:text-pink-600 transition-colors z-20 cursor-pointer'>
                    <FaHeart />
                </button>
            </motion.div>
        </>
    )
}

export default TurfCard