import React, { useState } from 'react';
import axios from 'axios';

function FindPw() {

    const [question, setQuestion] = useState("당신의 고향은?")

    const [info, setInfo] = useState({
        name: "",
        id: "",
        question: "a",
        question_answer: "a",
        password: "a"
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
        <div className='bg-gray-200 flex flex-center justify-center min-h-screen '>
            <div className='pt-20'>
                <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-2xl space-y-3 mt-5 mb-20 flex flex-grow-1'>
                    <div className='block font-bold text-3xl mb-10 text-center'>비밀번호 찾기</div>
                        <div>
                            <label className='font-bold block mb-2'>이름</label>
                            <div>
                                <input 
                                type={Text} 
                                placeholder={'이름'}
                                name='name'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-8
                                '/>
                            </div>
                            <label className='block mb-1 font-bold'>ID</label>
                            <div className='flex mb-2'>
                                <input 
                                    type={Text} 
                                    placeholder={'ID'}
                                    name='id'
                                    onChange={onChangeInfo}
                                    className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-2'/>
                            </div>
                            {info.question && 
                                <div className='mb-8'>
                                    <label className='block mb-1 text-red-400'>질문</label>
                                    <div className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-8'>
                                        <div>{info.question}</div>
                                    </div>
                                    <label className='block mb-1 font-bold'>답</label>
                                    <div>
                                <input 
                                    type={Text} 
                                    placeholder={'답'}
                                    name='question_answer'
                                    onChange={onChangeInfo}
                                    className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-2'/>
                                    </div>
                                </div>
                            }

                            {info.password &&
                                <div className='flex justify-center min-w-full'>
                                    <lable className='font-bold'>당신의 패스워드는 <div className='text-2xl text-blue-400 flex'>{info.password} </div>입니다.</lable>
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