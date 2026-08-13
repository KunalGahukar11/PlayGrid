import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashScreen from '../pages/SplashScreen'
import LoginScreen from '../pages/LoginScreen'
import SignUpScreen from '../pages/SignUpScreen'

const PlayGridRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<SplashScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/signup' element={<SignUpScreen />} />
        </Routes>
    )
}

export default PlayGridRoutes