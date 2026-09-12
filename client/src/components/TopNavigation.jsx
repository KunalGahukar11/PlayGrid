import React from 'react'
import { Avatar } from 'antd';
import { CiLocationOn, CiSearch } from "react-icons/ci";
import PlayInput from '../components/PlayInput';
import { motion } from 'framer-motion'

const TopNavigation = () => {
    return (
        <header className="shrink-0 border-b border-b-slate-300 pb-2 bg-linear-to-b from-[#39d194] via-[#a9ffdd] to-[#f9fffd]">
            <div className="flex justify-between items-center mx-3 p-2 font-semibold">
                <div className="flex gap-1 items-center">
                    <CiLocationOn />
                    <p>Wardha</p>
                </div>

                <nav className='hidden md:block'>
                    <ul className='flex gap-8'>
                        <motion.li whileHover={{ scale: 1.2 }}
                            className='cursor-pointer hover:text-gray-700'>
                            Home
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}
                            className='cursor-pointer hover:text-gray-700'>
                            Turfs
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}
                            className='cursor-pointer hover:text-gray-700'>
                            Bookings
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}
                            className='cursor-pointer hover:text-gray-700'>
                            Favourite
                        </motion.li>
                    </ul>
                </nav>
                <Avatar>
                    R
                </Avatar>
            </div>

            <div className="p-2 mt-2">
                <PlayInput
                    suffix={<CiSearch />}
                    placeholder="Search for sports"
                    name="search"
                />
            </div>
        </header>
    )
}

export default TopNavigation