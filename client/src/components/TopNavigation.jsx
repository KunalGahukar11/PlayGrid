import React, { useEffect, useState } from 'react'
import { Avatar, Dropdown } from 'antd';
import { CiLocationOn, CiSearch } from "react-icons/ci";
import PlayInput from '../components/PlayInput';
import { motion } from 'framer-motion'
import { CiUser, CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const TopNavigation = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState('');

    const handleProfile = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const menu = [
        {
            key: '1',
            label: (
                <a onClick={handleProfile}>
                    Profile
                </a>
            ),
            icon: <CiUser />,
        },
        {
            key: '2',
            label: (
                <a onClick={handleLogout}>
                    Logout
                </a>
            ),
            icon: <CiLogout />,
        },
    ];

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('info'));
        if (data) {
            setUserInfo(data?.name?.[0]?.toUpperCase());
        }
    }, []);

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
                <Dropdown menu={{ items: menu }}>
                    <Avatar className='cursor-pointer'>
                        {
                            userInfo !== ''
                                ? userInfo
                                : <CiUser className='text-xl' />
                        }
                    </Avatar>
                </Dropdown>
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