import React, { useReducer } from 'react'
import PlayInput from '../components/PlayInput'
import { UserOutlined, KeyOutlined, FacebookFilled, GoogleOutlined, AppleFilled, EyeInvisibleOutlined } from '@ant-design/icons'
import PlayButton from '../components/PlayButton'
import AuthLayout from '../layout/AuthLayout'
import { useNavigate } from 'react-router-dom'
import formReducer from '../reducers/formReducer'
import authService from '../services/authService'
import { message } from 'antd';

const LoginScreen = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [state, dispatch] = useReducer(formReducer, {
        values: {
            username: '',
            password: ''
        },
        errors: {
            username: '',
            password: ''
        }
    })

    // console.log(state.errors);
    let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

        const key = "login";

        messageApi.open({
            key,
            type: "loading",
            content: "Logging in...",
            duration: 0,
        });

        try {
            const [res] = await Promise.all([
                authService.login(state.values),
                delay(1500)
            ]);
            if (res.success) {
                await messageApi.open({
                    key,
                    type: "success",
                    content: "All Set!",
                    // duration: 2,
                });
                let token = res.data.token;
                localStorage.setItem('token', JSON.stringify(token));
                navigate('/home');
                console.log(res)
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
            <AuthLayout title="Login" subtitle="Have Fun with Friends!">

                <form action="" onSubmit={handleSubmit} className='w-full max-w-75 p-3'>

                    <div className='w-full mb-5 space-y-3'>
                        <PlayInput
                            placeholder={"Username"}
                            prefix={<UserOutlined />}
                            value={state.values.username}
                            name="username"
                            error={state.errors.username}
                            handleChange={handleChange} />

                        <PlayInput
                            placeholder={"Password"}
                            type={"password"}
                            prefix={<KeyOutlined />}
                            suffix={<EyeInvisibleOutlined />}
                            value={state.values.password}
                            name="password"
                            error={state.errors.password}
                            handleChange={handleChange} />

                        <span className='font-normal text-primary text-[18px]'>Forgot Password?</span>
                    </div>
                    <PlayButton title="Login" type="submit" />
                </form>

                <p className='mb-6 text-[15px] font-medium'>Didn't Have Account?<span className='text-primary cursor-pointer' onClick={() => navigate('/signup')}> Sign Up</span></p>

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

export default LoginScreen