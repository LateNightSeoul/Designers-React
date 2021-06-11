import React, { useState } from 'react';
import axios from 'axios';

function FindId() {

    const [info, setInfo] = useState({
        name: "",
        email_id: "",
        email_address: "",
        id: "",
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

        const url = "http://localhost:8080/find/id";
        
        const info_dto = {
            name: info.name,
            email_id: info.email_id,
            email_address: info.email_address
        }
    
        axios.post(url, info_dto)
        .then((res) => { 
            console.log(res.status);
            setInfo({...setInfo, id: res});
        })
        .catch((res) => { console.log('Error'); } )
    }


    return(
        <div className='bg-gray-200 flex flex-center justify-center min-h-screen'>
            <div className='pt-20'>
                <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-2xl space-y-3 mt-5 mb-20'>
                    <div className='font-bold text-3xl mb-5 text-center'>아이디찾기</div>
                    <div>
                        <label className='font-bold block mb-2'>이름</label>
                        <div>
                            <input 
                            type={Text} 
                            placeholder={'이름'}
                            name='name'
                            onChange={onChangeInfo}
                            className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-8'/>
                        </div>
                        <label className='block mb-1 font-bold'>이메일</label>
                        <div className='flex mb-20'>
                            <input 
                                type={Text} 
                                placeholder={'ID'}
                                name='email_id'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-2'/>
                            <div>@</div>
                            <input 
                                type={Text}
                                placeholder={'예) naver.com'}
                                name='email_address'
                                onChange={onChangeInfo}
                                className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-2'/>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='w-full border bodrer-gray-400 p-3 rounded-2xl mb-2'>ID 찾기</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default FindId;