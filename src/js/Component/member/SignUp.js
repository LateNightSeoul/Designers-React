import React, { useState } from 'react';
import './css/signup.css';

function SignUp() {
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        sex: "",
        email: "",
        id: "",
        password: "",
        password_confirm: "",
        phoneNumber: "",
    })

    const checkSignupInfo = () => {
        for (const [key, value] of Object.entries(signupInfo)) {
            if (value === "") {
                alert("정보를 모두 입력하세요.");
                return
            }
        }

        if (signupInfo.password != signupInfo.password_confirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return
        }

        
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        const signup_info_dto = {
            name: signupInfo.name,
            sex: signupInfo.sex,
            email: signupInfo.email,
            id: signupInfo.id,
            password: signupInfo.password,
            phoneNumber: signupInfo.phoneNumber,
        }
        
        const signup_info = {
            method: "POST",
            body: JSON.stringify(signup_info_dto),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:8080/login", signup_info)
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }


    return (
        <div className={'signup-container'}>
            <form onSubmit={handleSubmit}>
                <div className={'signup-logo'}>회원가입</div>
                <div>
                    <input type={Text} placeholder={'이름'}/>
                    <input type={Text} placeholder={'성별'}/>
                    <input type={Text} placeholder={'이메일'}/>
                    <span>@</span>
                    <input type={Text}/>
                    <input type={Text} placeholder={'아이디'}/>
                    
                    <button>중복확인</button>
                    <input type={Text} placeholder={'비밀번호'}/>
                    <input type={Text} placeholder={'비밀번호 확인'}/>
                    <input type={Text} placeholder={'휴대폰인증'}/>
                </div>
                <div>
                    <button type='submit'>가입</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp