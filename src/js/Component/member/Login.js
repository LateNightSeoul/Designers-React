import React, { useState } from 'react';
import './css/login.css';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

function Login() {
    
    const [loginInfo, setLoginInfo] = useState({
        id: "",
        password: "",
        login_complete: false,
    })

    const onChangeId = e => {
        setLoginInfo({
            ...loginInfo,
            id: e.target.value
        })
    }

    const onChangePassword = e => {
        setLoginInfo({
            ...loginInfo,
            password: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(!loginInfo.id || !loginInfo.password) {
            alert("ID 또는 비밀번호를 입력하세요.");
            return
        } 

        const url = 'http://localhost:8080/member/authenticate';

        axios.post(url, {
            id: loginInfo.id,
            password: loginInfo.password
        })  
        .then((res) => { 
            const { accessToken } = res.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            setLoginInfo({...loginInfo, login_complete: true})
        })
        .catch((res) => { console.log('id 혹은 비밀번호를 확인하세요.');})
    }

    if(loginInfo.login_complete) {
        <Redirect to='/'/>
    }

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
            <div className={'login-logo'}>
                <div className='max-w-md w-full mx-auto'>
                    <div className='text-center font-medium text-xl'>최준혁</div>
                    <div className='text-3xl font-bold text-gray-900 mt-2 text-center'>특 : 방구 뀌고 웃음</div>
                </div>
                <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
                    <form action='' className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='' className='text-sm font-bold text-gray-600 block'></label>
                            <input 
                                type={Text} 
                                id={'login-id'} 
                                placeholder={'ID'}
                                onChange={onChangeId}
                                className='w-full p-2 border border-gray-300 rounded mt-1'/>
                        </div>
                        <div>
                            <label htmlFor='' className='text-sm font-bold text-gray-600 block'></label>
                            <input 
                                type={Text} 
                                id={'login-password'} 
                                placeholder={'PASSWORD'}
                                type='password'
                                onChange={onChangePassword}
                                className='w-full p-2 border border-gray-300 rounded mt-1'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input type='checkbox' className='h-4 w-4 text-blue-300 rounded'/>
                                <label htmlFor='' className='ml-2 text-sm text-gray-600'>
                                    로그인 상태 유지
                                </label>
                            </div>
                            <div className='flex'>
                                    <Link to='/findid'>
                                        <div className='font-medium text-sm text-blue-500 pr-5'>
                                            아이디 찾기
                                        </div>
                                    </Link>
                                    <Link to='findpw'>
                                        <div className='font-medium text-sm text-blue-500'>
                                            비밀번호 찾기
                                        </div>
                                    </Link>    
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm'>로그인</button>
                            <Link to='/register'>
                                <button className='pt-4'>회원가입</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;
