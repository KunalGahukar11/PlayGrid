import React from 'react'
import { CiStar, CiUser, CiHome } from "react-icons/ci";
import { PiCourtBasketball, PiNotebook } from "react-icons/pi";

const BottomNavigation = () => {
    return (
        <nav className="shrink-0 border-t border-t-slate-300 w-full md:hidden shadow-lg">
            <ul className="flex gap-2 py-3 justify-around">
                <li className="flex flex-col items-center">
                    <CiHome className="text-3xl" />
                    <p className="text-[12px] font-light">Home</p>
                </li>

                <li className="flex flex-col items-center">
                    <PiCourtBasketball className="text-3xl" />
                    <p className="text-[12px] font-light">Turf</p>
                </li>

                <li className="flex flex-col items-center">
                    <PiNotebook className="text-3xl" />
                    <p className="text-[12px] font-light">Bookings</p>
                </li>

                <li className="flex flex-col items-center">
                    <CiStar className="text-3xl" />
                    <p className="text-[12px] font-light">Favourite</p>
                </li>

                <li className="flex flex-col items-center">
                    <CiUser className="text-3xl" />
                    <p className="text-[12px] font-light">Profile</p>
                </li>
            </ul>
        </nav>
    )
}

export default BottomNavigation