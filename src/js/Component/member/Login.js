import React, { useState } from 'react';
import './css/login.css';
import axios from 'axios';

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        id: "",
        password: "",
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

        const url = 'http://localhost:8080/login';

        axios.post(url, loginInfo)  
        .then((res) => { console.log(res.data) })
        .catch((res) => { console.log('id 혹은 비밀번호를 확인하세요.');})
    }

    return (
        <div className={'login-container'}>
            <div className={'login-logo'}>
                <div>Login</div>
            </div>

        <form onSubmit={handleSubmit}>
            <input 
                type={Text} 
                id={'login-id'} 
                placeholder={'ID'}
                onChange={onChangeId}/>
            <input 
                type={Text} 
                id={'login-password'} 
                placeholder={'PASSWORD'}
                type='password'
                onChange={onChangePassword}/>


            <button type='submit'>로그인</button>
            <button>회원가입</button>
        </form>
        </div>
    )
}

export default Login;