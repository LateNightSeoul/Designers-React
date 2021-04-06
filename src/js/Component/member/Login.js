import React, { useState } from 'react';
import './css/login.css';

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        id: "",
        password: "",
    })

    const handleId = e => {
        setLoginInfo({
            ...loginInfo,
            id: e.target.value
        })
    }

    const handlePassword = e => {
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

        const login_info = {
            method: "POST",
            body: JSON.stringify(loginInfo),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:8080/login", login_info)
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
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
                onChange={handleId}/>
            <input 
                type={Text} 
                id={'login-password'} 
                placeholder={'PASSWORD'}
                type='password'
                onChange={handlePassword}/>


            <button type='submit'>로그인</button>
            <button>회원가입</button>
        </form>
        </div>
    )
}

export default Login;