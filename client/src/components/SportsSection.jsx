import React from 'react'
import PlayHeading from './PlayHeading'
import sport1 from '../assets/sports/Mask group1.svg'
import sport2 from '../assets/sports/Mask group2.svg'
import sport3 from '../assets/sports/Mask group3.svg'
import { motion } from 'framer-motion'

const SportsSection = () => {
    const availableSports = [
        {
            name: 'Cricket',
            value: 'cricket',
            bgImg: sport1
        },
        {
            name: 'Cricket',
            value: 'cricket',
            bgImg: sport2
        },
        {
            name: 'Cricket',
            value: 'cricket',
            bgImg: sport3
        },
    ];

    return (
        <section className='space-y-4'>
            <PlayHeading heading={'Sports'} />

            <div className='border border-slate-400 rounded-md p-4 overflow-x-auto scrollbar-hide'>
                <ul className='flex w-max h-35'>
                    {
                        availableSports.length > 0 && (
                            availableSports.map((sport) => {
                                return (
                                    <motion.li whileHover={{ y: -4 }}
                                        key={sport.name}
                                        className='shrink-0'>
                                        <a href="#">
                                            <img
                                                src={sport.bgImg}
                                                alt={sport.name}
                                                className='h-full' />
                                        </a>
                                    </motion.li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default SportsSection