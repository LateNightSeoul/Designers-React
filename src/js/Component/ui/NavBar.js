import React from 'react';
import './navBar.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from './Button';

function NavBar() {
    return(
        <header>
            <div class='inner'>
                <div class='menu-group'>
                    <BrowserRouter>
                        <div class='logo'>
                            <Link to='/'>Designers</Link>
                        </div>
                        <ul class='main-menu'>
                            <li>
                                <Link to="/mypage">마이페이지</Link>
                            </li>
                            <li>
                                <Link to='/reservation'>예약 내역</Link>
                            </li>
                            <li>
                                <Link to='/like'>좋아요</Link>
                            </li>
                        </ul>
                    </BrowserRouter>
                </div>
                <div class='sign-group'>
                    <div class='btn-group'>
                        <Button>
                            <Link to='/login' class='btn'>로그인</Link>
                        </Button>
                        <Button>
                            <Link to='/register' class='btn'>회원가입</Link>
                        </Button>
                        
                    </div>

                </div>
            </div>
        </header>
    )
    
}

export default NavBar;