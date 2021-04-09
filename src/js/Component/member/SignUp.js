import React, { useState } from 'react';
import './css/signup.css';
import axios from 'axios';

function SignUp() {
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        sex: "",
        email_id: "",
        email_address: "",
        id: "",
        id_verify: false,
        password: "",
        password_confirm: "",
        phone_number: "",
    })

    const onChangeInfo = e => {
        setSignupInfo({
            ...signupInfo,
            [e.target.name]: e.target.value,
        })
    }

    const checkEmpty = () => {
        for (const [key, value] of Object.entries(signupInfo)) {
            if (value === "") {
                alert("정보를 모두 입력하세요.");
                return false
            }
        }
        return true
    }

    const checkPassword = () => {
        if (signupInfo.password != signupInfo.password_confirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return false
        }
        return true
    }

    const checkSignupInfo = () => {
        if(checkEmpty() === false) {
            return
        }
        
        if(checkPassword() === false) {
            return
        }
    }

    const handleIdVerify = e => {
        e.preventDefault();
        
        const url = "http://localhost:8080/signup/idverify";

        axios.post(url, signupInfo.id)
        .then((res) => { console.log(res.status) })
        .catch((res) => { console.log('이미 존재하는 id입니다.'); } )
        
    }

    const handleSubmit = e => {
        e.preventDefault();

        checkSignupInfo();

        const url = "http://localhost:8080/signup";
        
        const signup_info_dto = {
            name: signupInfo.name,
            sex: signupInfo.sex,
            email: signupInfo.email,
            id: signupInfo.id,
            password: signupInfo.password,
            phoneNumber: signupInfo.phoneNumber,
        }
    
        axios.post(url, signup_info_dto)
        .then((res) => { console.log(res.status) })
        .catch((res) => { console.log('Error'); } )
    }

    return (
        <div className={'signup-container'}>
            <form onSubmit={handleSubmit}>
                <div className={'signup-logo'}>회원가입</div>
                <div>
                    <input 
                        type={Text} 
                        placeholder={'이름'}
                        name='name'
                        onChange={onChangeInfo}/>
                    <select
                        type={Text} 
                        placeholder={'성별'}
                        name='sex'
                        onChange={onChangeInfo}>
                            <option></option>
                            <option value="male">남자</option>
                            <option value="female">여자</option>
                    </select>
                    <input 
                        type={Text} 
                        placeholder={'이메일'}
                        name='email_id'
                        onChange={onChangeInfo}/>
                    <span>@</span>
                    <input 
                        type={Text}
                        name='email_address'
                        onChange={onChangeInfo}/>
                    <input 
                        type={Text} 
                        placeholder={'아이디'}
                        name='id'
                        onChange={onChangeInfo}/>
                    
                    <button type='button' onClick={handleIdVerify}>중복확인</button>

                    <input 
                        type={Text} 
                        placeholder={'비밀번호'}
                        name='password'
                        onChange={onChangeInfo}/>
                    <input 
                        type={Text} 
                        placeholder={'비밀번호 확인'}
                        name='password_confirm'
                        onChange={onChangeInfo}/>
                    <input 
                        type={Text} 
                        placeholder={'휴대폰인증'}
                        name='phone_number'
                        onChange={onChangeInfo}/>
                </div>
                <div>
                    <button type='submit'>가입</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp