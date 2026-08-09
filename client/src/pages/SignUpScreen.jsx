import React from 'react'
import AuthLayout from '../components/AuthLayout'
import PlayButton from '../components/PlayButton'
import PlayInput from '../components/PlayInput'
import { EyeInvisibleOutlined, KeyOutlined, MailOutlined, PhoneOutlined, UserOutlined, FacebookFilled, GoogleOutlined, AppleFilled } from '@ant-design/icons'

const SignUpScreen = () => {
    return (
        <AuthLayout title="Sign Up">
            <form action="" className='w-full max-w-75 p-3'>

                <div className='w-full mb-5 space-y-3'>
                    <PlayInput placeholder="Username"
                        prefix={<UserOutlined />}
                        type={"text"} />

                    <PlayInput placeholder={"EmalId"}
                        prefix={<MailOutlined />}
                        type={"email"} />

                    <PlayInput placeholder={"Contact No"}
                        prefix={<PhoneOutlined />}
                        type={"number"} />

                    <PlayInput placeholder={"Password"}
                        prefix={<KeyOutlined />}
                        suffix={<EyeInvisibleOutlined />}
                        type={'password'} />

                    <PlayInput placeholder={"Password"}
                        prefix={<KeyOutlined />}
                        suffix={<EyeInvisibleOutlined />}
                        type={'password'} />

                </div>
                <PlayButton title={"Sign-Up"} />
            </form>

            <p className='mb-3 text-[15px] font-medium'>Already Have Account?<span className='text-primary'> Login</span></p>

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

export default SignUpScreen