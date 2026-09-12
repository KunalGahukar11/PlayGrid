import React, { useReducer, useState } from 'react'
import AuthLayout from '../layout/AuthLayout'
import PlayButton from '../components/PlayButton'
import PlayInput from '../components/PlayInput'
import { EyeInvisibleOutlined, KeyOutlined, MailOutlined, PhoneOutlined, UserOutlined, FacebookFilled, GoogleOutlined, AppleFilled, EyeOutlined, EyeFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import formReducer from '../reducers/formReducer'
import authService from '../services/authService'
import { message } from 'antd';

const SignUpScreen = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [state, dispatch] = useReducer(formReducer, {
        values: {
            username: "",
            email: "",
            contactNo: "",
            password: "",
            confirmPassword: ""
        },
        errors: {
            username: "",
            email: "",
            contactNo: "",
            password: "",
            confirmPassword: ""
        }
    });
    // console.log(state.values);

    const handleChange = (e) => {
        const { name, value } = e.target;

        dispatch({
            type: "SET_FIELD",
            field: name,
            value
        })

        if (!value.trim()) {
            dispatch({
                type: "SET_ERROR",
                field: name,
                error: `${name} is required!`
            })
        } else {
            dispatch({
                type: "SET_ERROR",
                field: name,
                error: ""
            })
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hasEmptyField = Object.values(state.values).some(
            (value) => !value.trim()
        );

        if (hasEmptyField) {
            Object.entries(state.values).forEach(([field, value]) => {
                if (!value.trim()) {
                    dispatch({
                        type: "SET_ERROR",
                        field,
                        error: `${field} is required!`,
                    });
                }
            });

            return;
        }
        try {
            const res = await authService.signUp(state.values);
            console.log(res.success);
            if (res.success) {
                await messageApi.open({
                    type: 'success',
                    content: `${res.message} Login to your account`
                });
                navigate('/login')
            } else {
                messageApi.open({
                    type: 'error',
                    content: res.message
                });
            }
        } catch (error) {
            console.log(error)
            messageApi.open({
                type: 'error',
                content: 'Something went wrong'
            });
        }
    };

    return (
        <>
            {contextHolder}
            <AuthLayout title="Sign Up">
                <form action="" onSubmit={handleSubmit} className='w-full max-w-75 p-3'>

                    <div className='w-full mb-5 space-y-3'>
                        <PlayInput placeholder="Username"
                            prefix={<UserOutlined />}
                            type={"text"}
                            name="username"
                            value={state.values.username}
                            error={state.errors.username}
                            handleChange={handleChange} />

                        <PlayInput placeholder={"Email Id"}
                            prefix={<MailOutlined />}
                            type={"email"}
                            name="email"
                            value={state.values.email}
                            error={state.errors.email}
                            handleChange={handleChange} />

                        <PlayInput placeholder={"Contact No"}
                            prefix={<PhoneOutlined />}
                            type={"number"}
                            name="contactNo"
                            value={state.values.contactNo}
                            error={state.errors.contactNo}
                            handleChange={handleChange} />

                        <PlayInput placeholder={"Password"}
                            prefix={<KeyOutlined />}
                            suffix={<EyeInvisibleOutlined />}
                            altSuffix={<EyeFilled />}
                            type={'password'}
                            name="password"
                            value={state.values.password}
                            error={state.errors.password}
                            handleChange={handleChange} />

                        <PlayInput placeholder={"Confirm Password"}
                            prefix={<KeyOutlined />}
                            suffix={<EyeInvisibleOutlined />}
                            altSuffix={<EyeFilled />}
                            type={'password'}
                            name="confirmPassword"
                            value={state.values.confirmPassword}
                            error={state.errors.confirmPassword}
                            handleChange={handleChange} />

                    </div>
                    <PlayButton title={"Sign-Up"} disabled={Object.values(state.values).some(value => value === "")} />
                </form>

                <p className='mb-3 text-[15px] font-medium'>Already Have Account?<span className='text-primary cursor-pointer' onClick={() => navigate('/login')}> Login</span></p>

                <div className='flex flex-col items-center gap-5'>
                    <p className='text-[15px] font-medium'>Other way you sign-in</p>
                    <div className='flex justify-center gap-3'>
                        <FacebookFilled className='text-5xl' />
                        <GoogleOutlined className='text-5xl' />
                        <AppleFilled className='text-5xl' />
                    </div>
                </div>
            </AuthLayout>
        </>
    )
}

export default SignUpScreen