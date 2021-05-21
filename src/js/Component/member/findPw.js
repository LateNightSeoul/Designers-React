import React, { useState } from 'react';
import axios from 'axios';

function FindPw() {

    const [question, setQuestion] = useState("당신의 고향은?")

    const [info, setInfo] = useState({
        name: "",
        id: "",
        question_answer: "",
    })

    const onChangeInfo = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        })
    }

    const checkEmpty = () => {
        for (const [key, value] of Object.entries(info)) {
            if (value === "") {
                alert("정보를 모두 입력하세요.");
                return false
            }
        }
        return true
    }

    const handleSubmit = e => {
        e.preventDefault();

        checkEmpty();

        const url = "http://localhost:8080/find/pw";
        
        const info_dto = {
            name: info.name,
            id: info.id,
            question_answer: info.question_answer,
        }
    
        axios.post(url, info_dto)
        .then((res) => { console.log(res.status) })
        .catch((res) => { console.log('Error'); } )
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>비밀번호 찾기</div>
                    <div>
                        <label>이름</label>
                        <div>
                            <input 
                                type={Text} 
                                placeholder={'이름'}
                                name='name'
                                onChange={onChangeInfo}/>
                          
                        </div>
                        <label>ID</label>
                        <div>
                            <input 
                                type={Text} 
                                placeholder={'ID'}
                                name='id'
                                onChange={onChangeInfo}/>
                        </div>
                        <label>질문</label>
                        <div>
                            <div>{question}</div>
                        </div>
                        <label>답</label>
                        <div>
                            <input 
                                type={Text} 
                                placeholder={'답'}
                                name='question_answer'
                                onChange={onChangeInfo}/>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='w-full border bodrer-gray-400 p-3 rounded mb-2'>비밀번호 찾기</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FindPw;