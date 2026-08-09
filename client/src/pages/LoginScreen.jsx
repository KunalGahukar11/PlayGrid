import React from 'react'
import PlayInput from '../components/PlayInput'
import { UserOutlined, KeyOutlined, FacebookFilled, GoogleOutlined, AppleFilled, EyeInvisibleOutlined } from '@ant-design/icons'
import PlayButton from '../components/PlayButton'
import AuthLayout from '../components/AuthLayout'

const LoginScreen = () => {
    return (
        <AuthLayout title="Login" subtitle="Have Fun with Friends!">

            <form action="" className='w-full max-w-75 p-3'>

                <div className='w-full mb-5 space-y-3'>
                    <PlayInput
                        placeholder={"Username"}
                        prefix={<UserOutlined />} />

                    <PlayInput
                        placeholder={"Password"}
                        prefix={<KeyOutlined />}
                        suffix={<EyeInvisibleOutlined />} />

                    <span className='font-normal text-primary text-[18px]'>Forgot Password?</span>
                </div>
                <PlayButton title="Login" />
            </form>

            <p className='mb-6 text-[15px] font-medium'>Didn't Have Account?<span className='text-primary'> Sign Up</span></p>

            <div className='flex flex-col items-center gap-5'>
                <p className='text-[15px] font-medium'>Other way you sign-in</p>
                <div className='flex justify-center gap-3'>
                    <FacebookFilled className='text-5xl' />
                    <GoogleOutlined className='text-5xl' />
                    <AppleFilled className='text-5xl' />
                </div>
            </div>
        </AuthLayout>
    )
}

export default LoginScreen