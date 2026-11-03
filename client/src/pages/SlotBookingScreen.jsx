import React, { useMemo, useState } from 'react'
import { FaLocationDot, FaStar, FaIndianRupeeSign, FaCircleCheck } from 'react-icons/fa6'
import turfImg from '../assets/images/turfs/IMG_20240220_120950.jpg'
import { motion } from 'framer-motion';
import { WiDaySunny } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";
import PlayHeading from './../components/PlayHeading';
import PlayButton from './../components/PlayButton';

const SlotBookingScreen = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());
    // console.log(selectedDay);

    const getDay = () => {
        const newDays = [];
        const day = new Date();

        for (let i = 0; i <= 7; i++) {
            const formattedDate = day.toLocaleDateString("en-IN", {
                weekday: 'short',
                day: '2-digit',
                month: 'short'
            });

            newDays.push({
                formattedDate,
                value: new Date(day)
            });

            day.setDate(day.getDate() + 1);
        }
        return newDays;
    }

    const days = getDay();
    // console.log(days);

    const getTime = (selectedSlot) => {
        const currentDay = new Date();
        let userSelectedDay = new Date(selectedSlot);

        const isToday = currentDay.toDateString() === userSelectedDay.toDateString();

        if (isToday) {

            if (userSelectedDay.getMinutes() > 0) {
                userSelectedDay.setHours(userSelectedDay.getHours() + 1);
            }
            userSelectedDay.setMinutes(0, 0, 0);
        } else {
            userSelectedDay.setHours(9, 0, 0, 0);
        }

        let slotsForDay = {
            morningSlots: [],
            afternoonSlots: [],
            eveningSlots: []
        };

        const selectedDate = selectedSlot.toDateString();
        // console.log(currentHour);


        for (let hour = 0; hour < 24; hour++) {
            let currentHour = userSelectedDay.getHours();
            let nextHour = currentHour + 1;

            const temp = new Date();
            temp.setHours(nextHour, 0, 0, 0);

            if (currentHour >= 9 && selectedDate === userSelectedDay.toDateString()) {
                const currentFormattedHour = userSelectedDay.toLocaleTimeString('en-IN', {
                    hour: 'numeric',
                    minute: '2-digit'
                });

                const nextFormattedHour = temp.toLocaleTimeString('en-IN', {
                    hour: 'numeric',
                    minute: '2-digit'
                });

                // console.log(currentFormattedHour);
                // console.log(nextFormattedHour);


                const formattedSlotText = `${currentFormattedHour} - ${nextFormattedHour}`;

                if (currentHour < 12) {
                    slotsForDay.morningSlots.push(formattedSlotText);
                } else if (currentHour < 17) {
                    slotsForDay.afternoonSlots.push(formattedSlotText);
                } else {
                    slotsForDay.eveningSlots.push(formattedSlotText);
                }

            }
            userSelectedDay.setHours(userSelectedDay.getHours() + 1);

        }
        // console.log(slotsForDay);

        return slotsForDay;
    };

    const slots = useMemo(() => {
        return getTime(selectedDay);
    }, [selectedDay]);

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectPosition: 'center',
        objectFit: 'cover'
    };

    const containerMotion = {
        hidden: {},
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const childMotion = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 20
            }
        }
    };

    return (
        <main className='p-4 space-y-5'>
            <header className='border border-gray-300 rounded-md p-3 flex justify-between items-center shadow'>
                <div className='w-full md:w-1/3 space-y-3'>
                    <h1 className='text-4xl font-bold text-primary'>PlayGrid</h1>
                    <div className='flex items-center gap-2'>
                        <span className='text-2xl text-primary'><FaLocationDot /></span>
                        <p className='text-xl font-semibold text-gray-500'>Wardha</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-2xl text-primary'><FaStar /></span>
                        <p className='text-xl font-semibold text-gray-500'>4.5</p>
                    </div>
                </div>
                <div className='h-60 hidden md:w-1/2 md:block'>
                    <img src={turfImg} alt="turf_image" style={imgStyle} className='rounded-md' />
                </div>
            </header>

            <section className='border border-gray-300 rounded-md space-y-4'>
                <motion.div key={days.length} variants={containerMotion} initial='hidden'
                    animate='visible'
                    className='p-4 flex md:justify-center gap-3 sm:gap-6 overflow-x-auto overflow-y-hidden'>
                    {
                        days.length > 0 ?
                            days.map((day, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={childMotion}
                                    className="shrink-0"
                                >
                                    <button className={`w-19 h-30 border border-primary rounded-full hover:bg-green-500 hover:text-white transition cursor-pointer ${day.value.getDate() === selectedDay.getDate() ? 'bg-green-500 text-white' : ''}`}
                                        onClick={() => { setSelectedDay(day.value) }}>
                                        {day.formattedDate}
                                    </button>
                                </motion.div>
                            )) :
                            'no day available'
                    }
                </motion.div>

                <hr className='text-gray-300 w-[90%] mx-auto' />

                <div className='w-[90%] mx-auto space-y-4 mb-10'>
                    <PlayHeading heading={'Available Slots'} styleProps={'text-primary'} />

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 space-y-3 sm:space-y-0'>
                        <div>
                            <span className="slot-heading morning-slot">
                                <WiDaySunny className="text-3xl" />
                                <h2 className="text-xl font-semibold">
                                    Morning Slots
                                </h2>
                            </span>
                            <motion.ul key={selectedDay.toDateString()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-3 space-y-2">

                                {slots.morningSlots?.map((slot, idx) => (
                                    <motion.li initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: 'tween',
                                            delay: idx * 0.08
                                        }}
                                        key={slot}>
                                        <button className="w-full border border-blue-300 rounded-md p-2 hover:bg-blue-500 hover:text-white transition cursor-pointer">
                                            {slot}
                                        </button>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                        <div>
                            <span className="slot-heading afternoon-slot">
                                <WiDayCloudy className="text-3xl" />
                                <h2 className="text-xl font-semibold">
                                    Afternoon Slots
                                </h2>
                            </span>

                            <motion.ul key={selectedDay.toDateString()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-3 space-y-2">
                                {slots.afternoonSlots?.map((slot, idx) => (
                                    <motion.li initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: 'tween',
                                            delay: idx * 0.08
                                        }}
                                        key={slot}>
                                        <button className="w-full border border-amber-300 rounded-md p-2 hover:bg-amber-500 hover:text-white transition cursor-pointer">
                                            {slot}
                                        </button>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                        <div>
                            <span className="slot-heading evening-slot">
                                <WiMoonAltWaxingCrescent5 className="text-3xl" />
                                <h2 className="text-xl font-semibold">
                                    Evening Slots
                                </h2>
                            </span>

                            <motion.ul key={selectedDay.toDateString()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-3 space-y-2">
                                {slots.eveningSlots?.map((slot, idx) => (
                                    <motion.li initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: 'tween',
                                            delay: idx * 0.08
                                        }}
                                        key={slot}>
                                        <button className="w-full border border-indigo-300 rounded-md p-2 hover:bg-indigo-500 hover:text-white transition cursor-pointer">
                                            {slot}
                                        </button>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>

                    <hr className='text-gray-300' />

                    <div>
                        <span className='flex items-center gap-2'>
                            <FaIndianRupeeSign className='text-2xl sm:text-2x text-primary' />
                            <p className='text-xl sm:text-2xl font-medium text-gray-700'>ToTal : 1000</p>
                        </span>

                        <span className='flex items-center gap-2'>
                            <FaCircleCheck className='text-2xl sm:text-2x text-primary' />
                            <p className='text-xl sm:text-2xl font-medium text-gray-700'>Slot selected : 10 pm - 11pm</p>
                        </span>
                    </div>

                    <hr className='text-gray-300' />

                    <PlayButton title={'Proceed to Book'} />

                </div>
            </section>
        </main>
    )
}

export default SlotBookingScreen