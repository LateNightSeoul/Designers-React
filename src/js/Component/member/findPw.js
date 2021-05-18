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
        <div className='bg-gray-200 flex flex-center justify-center min-h-screen'>
            <div className='pt-20 min-w-1/2'>
                <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-2xl space-y-3 mt-5 mb-20'>
                    <div className='font-bold text-3xl mb-5 text-center'>비밀번호 찾기</div>
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
                        <div className='flex mb-2'>
                            <div className='flex'>
                                <label className='block mb-1 font-bold pr-2'>질문 : </label>
                                <div>{question}</div>
                            </div>
                        </div>
                        <div>
                            <input 
                                type={Text} 
                                placeholder={'답'}
                                name='question_answer'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-2'/>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-2'>비밀번호 찾기</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FindPw;