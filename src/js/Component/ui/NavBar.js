import React from 'react';
import './navBar.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from './Button';
import ReservationList from '../member/ReservationList';

function NavBar() {
    return(
        <header>
            <div class='inner'>
                <div class='menu-group'>
                    
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
                </div>
                <div class='sign-group'>
                    <div class='btn-group'>
                        <Link to='/login'>
                            <Button>로그인</Button>
                        </Link>
                        <Link to='/register'>
                            <Button>회원가입</Button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </header>
    )
    
}

export default NavBar;