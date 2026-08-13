import React from 'react'
import ChangePasswordLayout from '../components/ChangePasswordLayout'
import PlayInput from '../components/PlayInput'
import PlayButton from '../components/PlayButton'
import { EyeInvisibleOutlined, KeyOutlined } from '@ant-design/icons'

const SavePasswordScreen = () => {
    return (
        <ChangePasswordLayout title={"Save Password"}>
            <form action="" className='flex flex-col w-full max-w-85 items-center'>
                <PlayInput
                    type={"password"}
                    placeholder={"New Password"}
                    prefix={<KeyOutlined />}
                    suffix={<EyeInvisibleOutlined />} />

                <PlayInput
                    type={"password"}
                    placeholder={"Confirm Password"}
                    prefix={<KeyOutlined />}
                    suffix={<EyeInvisibleOutlined />} />

                <PlayButton title={"Save Password"} />
            </form>
        </ChangePasswordLayout>
    )
}

export default SavePasswordScreen