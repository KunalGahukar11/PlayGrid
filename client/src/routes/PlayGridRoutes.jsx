import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashScreen from '../pages/SplashScreen'
import LoginScreen from '../pages/LoginScreen'
import SignUpScreen from '../pages/SignUpScreen'
import ProtectedRoutes from './ProtectedRoutes'
import HomeScreen from '../pages/HomeScreen'
import MainLayout from '../layout/MainLayout'
import BookingScreen from '../pages/BookingScreen'

const PlayGridRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<SplashScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/signup' element={<SignUpScreen />} />

            <Route element={<ProtectedRoutes />}>
                <Route element={<MainLayout />}>
                    <Route path='/home' element={<HomeScreen />} />
                    <Route path='/booking' element={<BookingScreen />} />
                </Route>
            </Route>

        </Routes>
    )
}

export default PlayGridRoutes