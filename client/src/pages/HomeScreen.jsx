import React from 'react'
import MainLayout from '../layout/MainLayout';
import TurfCard from '../components/TurfCard';
import turfBg from '../assets/images/turfs/IMG_20240220_120950.jpg'
import turfBg1 from '../assets/images/turfs/IMG_20221116_132323.jpg'
import turf1 from '../assets/images/turfs/turf1.webp'
import turf2 from '../assets/images/turfs/turf2.avif'
import SportsSection from '../components/SportsSection';
import PlayHeading from '../components/PlayHeading';

const HomeScreen = () => {
    return (
        <>
            <SportsSection />
            <section className='my-5'>
                <PlayHeading heading={'Available Venues'} />
                <TurfCard url={turf1} location='Wardha' rating='4' turfName={'PlayGrid'} />
                <TurfCard url={turf2} location='Wardha' rating='4' turfName={'PlayGrid'} />
                <TurfCard url={turfBg} location='Wardha' rating='4' turfName={'PlayGrid'} />
                <TurfCard url={turfBg1} location='Wardha' rating='4' turfName={'PlayGrid'} />
            </section>
        </>
    )
}

export default HomeScreen