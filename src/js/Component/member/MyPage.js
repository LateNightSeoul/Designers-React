import React, { useState } from 'react';
import axios from 'axios';

function MyPageModify() {

}

function MyPage() {

    const [myInfo, setMyInfo] = useState({
        name: "",
        email_id: "",
        email_address: "",
        password: "",
        phone_number: "",
        question: "",
        question_answer: ""
    })

    const onChangeHandle = (e) => {
        setMyInfo({
            ...myInfo,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmitPassword = () => {
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

    const handleSubmitQuestion = () => {
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

    getInfos();

    return (
        <div>
            <div>
                <span>이름</span>
                <span>{myInfo.name}</span>
            </div>
            <div>
                <span>이메일</span>
                <span>{myInfo.email_id}</span>
                <span>@</span>
                <span>{myInfo.email_address}</span>
            </div>
            <div>
                <form onSubmit={handleSubmitPassword}>
                    <span>비밀번호</span>
                    <input type="password"
                        onChange={onChangeHandle}
                        name="password"
                        value ={myInfo.password}/>

                    <button type='submit'>수정</button>
                </form>
            </div>
            <div>
                <span>핸드폰 번호</span>
                <span>{myInfo.phone_number}</span>
            </div>
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

export default MyPage;