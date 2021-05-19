import React, { useState, useMemo, useCallback } from 'react';
import axios from 'axios';

const PasswordForm = React.memo(function PasswordForm({ handleSubmitPassword, onChangeHandle, myInfo }) {
    return(
        <form onSubmit={handleSubmitPassword}>
                    <span>비밀번호</span>
                    <input type="password"
                        onChange={onChangeHandle}
                        name="password"
                        value ={myInfo.password}/>

                    <button type='submit'>수정</button>
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
        name: "이해석",
        id: "dlgotjrdlqslek",
        email_id: "ssfgsrg",
        email_address: "naver.com",
        password: "srtsrtsrtsrt",
        phone_number: "01056122134",
        question: "죽을래?",
        question_answer: "예"
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
        <div>
            <SpanInfo key_name={'이름'} value={myInfo.name}/>
            <SpanInfo key_name={'ID'} value={myInfo.id}/>
            <div>
                <span>이메일</span>
                <span>{myInfo.email_id}</span>
                <span>@</span>
                <span>{myInfo.email_address}</span>
            </div>
            <div>
                <PasswordForm onChangeHandle={onChangeHandle}
                            handleSubmitPassword={handleSubmitPassword}
                            myInfo={myInfo}/>
            </div>
            <SpanInfo key_name={'핸드폰 번호'} value={myInfo.phone_number}/>
            <div>
            <form onSubmit={handleSubmitQuestion}>
                    <span>비밀번호 찾기 질문</span>

                    <input type="text"
                        onChange={onChangeHandle}
                        name="question" 
                        value={myInfo.question}
                        />
                    
                    <span>비밀번호 찾기 답</span>

                    <input type="text"
                        onChange={onChangeHandle}
                        name="question_answer"
                        value={myInfo.question_answer}
                        >
                    </input>
                    <button type='submit'>수정</button>
                </form>
            </div>
        </div>
    )
}

export default React.memo(MyPage);