import React, { useState } from 'react';
import './css/signup.css';
import axios from 'axios';
import { Redirect } from 'react-router';

function SignUp() {
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        sex: "",
        email_id: "",
        email_address: "",
        id: "",
        id_verify: true,
        password: "",
        password_confirm: "",
        phone_number: "",
        question: "",
        question_answer: "",
        signup_complete : false,    
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
        if (signupInfo.password !== signupInfo.password_confirm) {
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

        if(signupInfo.id_verify == false) {
            alert("ID 중복체크를 해주세요.");
        }
    }

    const handleIdVerify = e => {
        e.preventDefault();

        if(!signupInfo.id) {
            alert("ID를 입력하세요");
            return
        }
        
        const url = "http://localhost:8080/signup/idverify";

        axios.post(url, signupInfo.id)
        .then((res) => { 
            alert("사용 가능한 ID입니다.");
            setSignupInfo({...signupInfo, id_verify : true
            }) })
        .catch((res) => { 
            alert("이미 존재하는 id입니다.");
            console.log('이미 존재하는 id입니다.'); 
        } )
        
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
        .then((res) => { console.log(res.status);
                        alert("회원가입에 성공하였습니다.");
                        setSignupInfo({...signupInfo, signup_complete: true})})
        .catch((res) => {
            console.log("hi");
            })
    }

    if (signupInfo.signup_complete) {
        return <Redirect to='/login'/>
    }

    return (
        <div className='bg-gray-200 min-h-screen flex flex-center justify-center'>
            <div>
                <div className={'signup-logo'}></div>
                <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-2xl space-y-3 mt-5'>
                    <div>
                        <div className='font-bold text-3xl mb-5 text-center'>회원가입</div>
                        <div>
                            <label className='font-bold block mb-2'>아이디</label>
                            <div className='flex'>
                                <input 
                                    type={Text} 
                                    placeholder={'아이디'}
                                    name='id'
                                    onChange={onChangeInfo}
                                    className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                                <button type='button' onClick={handleIdVerify} className='w-20 transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>중복확인</button>
                            </div>
                        </div>
                        <div>
                            <label className='block mb-1 font-bold'>비밀번호</label>
                            <div className=''>
                                <input 
                                    type={Text} 
                                    placeholder={'비밀번호'}
                                    name='password'
                                    onChange={onChangeInfo}
                                    className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg> */}
                            </div>
                        </div>
                        <div>
                            <label className='block mb-1 font-bold'>비밀번호 확인</label>
                            <input 
                                type={Text} 
                                placeholder={'비밀번호 확인'}
                                name='password_confirm'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                        </div>
                        <div>
                            <label className='block mb-1 font-bold'>이름</label>
                            <input 
                                    type={Text} 
                                    placeholder={'이름'}
                                    name='name'
                                    onChange={onChangeInfo}
                                    className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                        </div>
                        <div>
                            <label className='block mb-1 font-bold'>성별</label>
                            <select
                                type={Text} 
                                placeholder={'성별'}
                                name='sex'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded mb-2'>
                                    <option value='' disabled selected hidden>성별</option>
                                    <option value="male">남자</option>
                                    <option value="female">여자</option>
                            </select>
                        </div>
                        <div>
                            <label className='block mb-1 font-bold'>생년월일</label>
                            <div className='flex'>
                                <input 
                                type={Text}
                                placeholder={'년(4자리)'}
                                name='year'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded mb-2'
                                />
                                <select
                                type={Text} 
                                placeholder={'월'}
                                name='month'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded mb-2'>
                                    <option value='' disabled selected hidden>월</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                    <input 
                                    type={Text}
                                    placeholder={'일'}
                                    name='day'
                                    onChange={onChangeInfo}
                                    className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                            </div>
                        </div>
                        <label className='block mb-1 font-bold'>본인확인 이메일(선택)</label>
                        <div className='flex'>
                            <input 
                                type={Text} 
                                placeholder={'선택입력'}
                                name='email_id'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                            <div>@</div>
                            <input 
                                type={Text}
                                name='email_address'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                        </div>
                        <div>
                            <label className='block mb-1 font-bold'>휴대전화</label>
                            <input 
                            type={Text} 
                            placeholder={'전화번호 입력'}
                            name='phone_number'
                            onChange={onChangeInfo}
                            className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                        </div>
                        <div>
                            <label className='block mb-1 font-bold'>ID/PW 찾기 질문</label>
                            <input 
                            type={Text} 
                            placeholder={'질문 입력'}
                            name='question'
                            onChange={onChangeInfo}
                            className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                        </div>
                        <div>
                            <label className='block mb-1 font-bold'>질문 답</label>
                            <input 
                            type={Text} 
                            placeholder={'질문의 답 입력'}
                            name='question_answer'
                            onChange={onChangeInfo}
                            className='w-full border bodrer-gray-400 p-3 rounded mb-2'/>
                        </div>
                    </div>
                    <div>
                        <input type='checkbox' id='agree '/>
                        <label for='agree' className='font-bold'>동의</label>
                    </div>
                    <div>
                        <button type='submit' className='w-full border bodrer-gray-400 p-3 rounded mb-2'>가입하기</button>
                    </div>
                </form>
            </div>    
        </div>    
    )
}

export default SignUp
