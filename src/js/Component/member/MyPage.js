import React, { useState, useMemo, useCallback } from 'react';
import axios from 'axios';

const PasswordForm = React.memo(function PasswordForm({ handleSubmitPassword, onChangeHandle, myInfo }) {
    return(
        <form onSubmit={handleSubmitPassword}>
                    <span>비밀번호 :</span>
                    <input type="password"
                        onChange={onChangeHandle}
                        name="password"
                        value ={myInfo.password}
                        className='bg-gray-200 rounded-2xl pl-2'/>

                    <button type='submit' className='pl-2 transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-bold text-yellow-600'>수정</button>
        </form>
    )
})

const SpanInfo = React.memo(function SpanInfo({ key_name, value }) {
    return(
        <div>
                <span>{key_name}</span>
                <span>{value}</span>
        </div>
    )
})

function MyPage() {

    const [myInfo, setMyInfo] = useState({
        name: " 이해석",
        id: " dlgotjrdlqslek",
        email_id: " ssfgsrg",
        email_address: " naver.com",
        password: "srtsrtsrtsrt",
        phone_number: " 010-5612-2134",
        question: " 죽을래?",
        question_answer: " 예"
    })

    const onChangeHandle = useCallback((e) => {
        setMyInfo({...myInfo, [e.target.name] : e.target.value})
    }, [myInfo.password, myInfo.question, myInfo.question_answer])

    const getInfos = () => {

        const url = "http://localhost:8080/mypage/info"

        const myInfo_dto = {
            name: myInfo.name,
            email_id: myInfo.email_id,
            email_address: myInfo.email_address,
            password: myInfo.password,
            phone_number: myInfo.phone_number,
            question: myInfo.question,
            question_answer: myInfo.question_answer
        }


        axios.get(url)
        .then((res) => {
            setMyInfo({
                name: res.name,
                email_id: res.email_id,
                email_address: res.email_address,
                password: res.password,
                phone_number: res.phone_number,
                question: res.question,
                question_answer: res.question_answer
            })
        })
        .catch((res) => {console.log(res);})
    }

    useMemo(() => getInfos(), []);

    const handleSubmitPassword = (e) => {
        e.preventDefault();
        if(!myInfo.password) {
            alert("변경하고자 하는 비밀번호를 입력하세요.");
            return;
        } 
        

        const url = "http://localhost:8080/mypage/info/change_pw"

        axios.post(url, {
            password: myInfo.password
        }).then((res) => {console.log(res)})
        .catch((res) => {console.log(res)});
    }

    const handleSubmitQuestion = (e) => {
        e.preventDefault();
        if(!myInfo.question || !myInfo.question_answer) {
            alert("입력하지 않은 항목이 존재합니다.");
            return;
        }

        const url = "http://localhost:8080/mypage/info/change_question"

        axios.post(url, {
            question: myInfo.question,
            question_answer: myInfo.question_answer
        }).then((res) => {console.log(res)})
        .catch((res) => {console.log(res)});
    }

    return (
        <div className='bg-gray-300 flex flex-center justify-center min-h-screen pt-40'>
            <div className='bg-gray-200 rounded-2xl w-auto h-1/2'>
                <div className='text-yellow-400 text-3xl px-10 py-10 font-bold'>
                    My Page
                </div>
                <div className='pl-20'>
                    <div className='pb-5 text-2xl'>
                        <SpanInfo key_name={'이름 :'} value={myInfo.name}/>
                    </div>
                    <div className='pb-5 text-2xl'>
                        <SpanInfo key_name={'ID :'} value={myInfo.id}/>
                    </div>
                </div>
                <div className='flex pl-20'>
                    <div className='pb-5 text-2xl pr-2'>이메일 :</div>
                    <div className='pb-5 text-2xl'>{myInfo.email_id}</div>
                    <div className='pb-5 text-2xl'>@</div>
                    <div className='pb-5 text-2xl'>{myInfo.email_address}</div>
                </div>
                <div className='pb-5 text-2xl pl-20'>
                    <PasswordForm onChangeHandle={onChangeHandle}
                                handleSubmitPassword={handleSubmitPassword}
                                myInfo={myInfo}/>
                </div>
                <div className='pb-5 text-2xl pl-20'>
                    <SpanInfo key_name={'핸드폰 번호 :'} value={myInfo.phone_number}/>
                </div>
                <div className='pb-5 text-2xl pl-20'>
                    <form onSubmit={handleSubmitQuestion}>
                        <div className='pb-5 flex'>비밀번호 찾기 질문 :
                            <input type="text"
                                onChange={onChangeHandle}
                                name="question" 
                                value={myInfo.question}
                                className='bg-gray-200 rounded-2xl'
                                />
                        </div>
                        <div className= 'flex pb-5'>
                            <div>비밀번호 찾기 답 :</div>
                            <input type="text"
                                onChange={onChangeHandle}
                                name="question_answer"
                                value={myInfo.question_answer}
                                className='bg-gray-200 rounded-2xl'
                                />
                        <button type='submit' className='pl-2 transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-bold text-yellow-600'>수정</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MyPage);