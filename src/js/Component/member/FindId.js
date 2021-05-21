import React, { useState } from 'react';
import axios from 'axios';

function FindId() {

    const [info, setInfo] = useState({
        name: "",
        email_id: "",
        email_address: "",
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
        .then((res) => { console.log(res.status) })
        .catch((res) => { console.log('Error'); } )
    }


    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                  <div>ID 찾기</div>
                  <div>
                      <label>이름</label>
                      <div>
                          <input 
                            type={Text} 
                            placeholder={'이름'}
                            name='name'
                            onChange={onChangeInfo}/>
                          
                      </div>
                      <label>이메일</label>
                      <div>
                      <input 
                            type={Text} 
                            placeholder={'ID'}
                            name='email_id'
                            onChange={onChangeInfo}/>
                        <div>@</div>
                        <input 
                            type={Text}
                            placeholder={'예) naver.com'}
                            name='email_address'
                            onChange={onChangeInfo}/>
                      </div>
                  </div>
                    <div>
                        <button type='submit' className='w-full border bodrer-gray-400 p-3 rounded mb-2'>ID 찾기</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FindId;