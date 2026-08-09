import React from 'react'
import AuthLayout from '../components/AuthLayout'
import PlayButton from '../components/PlayButton'
import PlayInput from '../components/PlayInput'
import { EyeInvisibleOutlined, KeyOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'

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
        </AuthLayout>
    )
}

export default SignUpScreen