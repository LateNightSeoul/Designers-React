import React from 'react';
import '../../css/signup.css'

function SignUp() {
    return (
        <div className={'signup-container'}>
            <div className={'signup-logo'}>회원가입</div>
            <div>
                <input type={Text} placeholder={'이름'}/>
                <input type={Text} placeholder={'성별'}/>
                <input type={Text} placeholder={'이메일'}/>
                <input type={Text} placeholder={'비밀번호'}/>
                <input type={Text} placeholder={'휴대폰인증'}/>
            </div>
            <div>
                <div>가입하기</div>
            </div>
        </div>
    )
}

export default SignUp