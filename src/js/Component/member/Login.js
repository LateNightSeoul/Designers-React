import React from 'react';
import './css/login.css';

function Login() {
    return (
        <div className={'login-container'}>
            <div className={'login-logo'}>
                <div>Login</div>
            </div>

            <div className={'input-container'}>
                <input type={Text} id={'login-id'} placeholder={'ID'}/>
                <input type={Text} id={'login-password'} placeholder={'PASSWORD'}/>
            </div>
            <div className={'button-container'}>
                <div>Button</div>
                <div>Button</div>
            </div>
        </div>
    )
}

export default Login;