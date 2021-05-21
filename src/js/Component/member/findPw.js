import React, { useState } from 'react';
import axios from 'axios';

function FindPw() {

    const [question, setQuestion] = useState("당신의 고향은?")

    const [info, setInfo] = useState({
        name: "",
        id: "",
        question: "",
        question_answer: "",
        password: ""
    })

    const onChangeInfo = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(!info.question) {

            if(!info.name || !info.id) {
                alert("이름과 ID를 입력하세요.")
                return;
            }

            const url = "http://localhost:8080/member/pw_question";
        
            const info_dto = {
                name: info.name,
                id: info.id,
            }
    
            axios.get(url, info_dto)
            .then((res) => { setInfo({...info ,question_answer : res}) })
            .catch((res) => { console.log('Error'); } )

        } else {

            if(!info.name || !info.id || !info.question_answer) {
                alert("모든 공백을 채워주세요.");
                return;
            }

            const url = "http://localhost:8080/member/findpw";

            const info_dto = {
                name: info.name,
                id: info.id,
                question_answer: info.question_answer
            }

            axios.post(url, info_dto)
            .then((res) => {console.log(res);
                            setInfo({...info, password : res})})
            .catch((res) => { console.log('Error'); });
        }

        
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
                        {info.question && 
                            <div>
                                <label>질문</label>
                                <div>
                                    <div>{info.question}</div>
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
                        }

                        {info.password &&
                            <div>
                                <lable>당신의 패스워드는</lable>
                                <div>{info.password} 입니다.</div>
                            </div>
                        }
                        
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