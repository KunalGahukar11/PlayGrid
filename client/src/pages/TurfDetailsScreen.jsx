import React from 'react'
import bgImg from '../assets/images/turfs/IMG_20240220_120950.jpg'
import { Carousel } from 'antd'
import { FaLocationDot, FaStar, FaGlassWater } from 'react-icons/fa6'
import { FaRegHeart, FaRegCreditCard, FaQrcode, FaParking, FaToilet } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import { PiCourtBasketball } from "react-icons/pi";
import { motion } from 'framer-motion'
import PlayButton from '../components/PlayButton';
import PlayListItem from '../components/PlayListItem';
import { useNavigate } from 'react-router-dom';

const TurfDetailsScreen = () => {
    const navigate = useNavigate();

    const imgStyle = {
        width: '100%',
        height: '350px',
        objectPosition: 'center',
        objectFit: 'cover'
    };

    const amenitiesList = [
        {
            name: 'UPI Accepted',
            value: 'upi_accepted',
            icon: <FaQrcode />
        },
        {
            name: 'Card Accepted',
            value: 'card_accepted',
            icon: <FaRegCreditCard />
        },
        {
            name: 'Free Parking',
            value: 'free_parking',
            icon: <FaParking />
        },
        {
            name: 'Drinking Water',
            value: 'drinking_water',
            icon: <FaGlassWater />
        },
        {
            name: 'Toilet',
            value: 'toilet',
            icon: <FaToilet />
        },
    ];

    const venueInfo = [
        {
            name: 'Equipment Provided',
            value: 'equipment_provided',
            icon: <MdOutlineSportsCricket />
        },
        {
            name: 'Artificial Turf',
            value: 'artificial_turf',
            icon: <PiCourtBasketball />
        },
    ];

    return (
        <main className='space-y-4'>
            <header className='relative'>
                <Carousel autoplay>
                    <div>
                        <img
                            src={bgImg}
                            alt="cover_img"
                            style={imgStyle}
                        />

                    </div>

                    <div>
                        <img
                            src={bgImg}
                            alt="cover_img"
                            style={imgStyle}
                        />

                    </div>

                    <div>
                        <img
                            src={bgImg}
                            alt="cover_img"
                            style={imgStyle}
                        />

                    </div>
                </Carousel>
                <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
            </header>

            <section className='px-3 space-y-10'>
                <div>
                    <div className='space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-3xl sm:text-5xl font-bold'>
                                PlayGrid
                            </h1>
                            <button>
                                <FaRegHeart className='text-2xl sm:text-3xl hover:text-primary cursor-pointer' />
                            </button>
                        </div>
                        <p className='text-lg sm:text-2xl font-light text-gray-800'>Wardha</p>
                        <span className='flex gap-2 items-center'>
                            <FaStar className='text-2xl self-start sm:self-auto' />
                            <p className='text-xl sm:text-2xl text-gray-800'>4.5</p>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <FaLocationDot className='text-2xl self-start sm:self-auto' />
                            <p className='text-xl sm:text-2xl text-gray-800 flex-1'>
                                Dhuniwale Math, behind Bahubali lawn, Nagpur road, Wardha, 442001
                            </p>
                        </span>
                    </div>
                </div>

                <div>
                    <div className='space-y-1'>
                        <h1 className='text-xl sm:text-2xl font-semibold'>Venue Info</h1>
                        <ul className='space-y-2'>
                            {
                                venueInfo.length > 0 ?
                                    venueInfo.map((info) =>
                                        <PlayListItem key={info.name}
                                            icon={info.icon}
                                            itemName={info.name} />
                                    )
                                    :
                                    <p>
                                        no info avialable
                                    </p>
                            }
                        </ul>
                    </div>

                    <hr className='text-gray-500 my-3' />

                    <div className='space-y-1'>
                        <h1 className='text-xl sm:text-2xl font-semibold'>Amenities</h1>
                        <ul className='space-y-2'>
                            {
                                amenitiesList.length > 0 ?
                                    amenitiesList.map((list) =>
                                        <PlayListItem key={list.name}
                                            icon={list.icon}
                                            itemName={list.name} />
                                    )
                                    :
                                    <p>
                                        no amenities.
                                    </p>
                            }
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 justify-center sm:justify-start'>
                    <PlayButton title={'Book Slot'} onClick={() => { navigate('/booking/1') }} />
                    <PlayButton title={'Report Place'} buttonType={'danger'} />
                </div>
            </section>
        </main>
    )
}

export default TurfDetailsScreen