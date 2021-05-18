import React from 'react';
import './navBar.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from './Button';
import ReservationList from '../member/ReservationList';

// function NavBar() {
//     return(
//         <header>
//             <div class='inner'>
//                 <div class='menu-group'>
                    
//                         <div class='logo'>
//                             <Link to='/'>Designers</Link>
//                         </div>
//                         <ul class='main-menu'>
//                             <li>
//                                 <Link to="/mypage">마이페이지</Link>
//                             </li>
//                             <li>
//                                 <Link to='/reservation'>예약 내역</Link>
//                             </li>
//                             <li>
//                                 <Link to='/like'>좋아요</Link>
//                             </li>
//                         </ul>
//                 </div>
//                 <div class='sign-group'>
//                     <div class='btn-group'>
//                         <Link to='/login'>
//                             <Button>로그인</Button>
//                         </Link>
//                         <Link to='/register'>
//                             <Button>회원가입</Button>
//                         </Link>
                        
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
    
// }

function NavBar() {
    return(
        <nav className='bg-gray-900 text-white'>
            <div className='max-w-6xl mx-auto border border-black'>
                <div className='flex justify-between'>
                    <div className='flex space-x-4'>
                        <div className='flex items-center'>
                            <Link to='/' className='flex items-center py-5 px-4'>
                                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                                <path d="M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z" />
                                </svg>
                            </Link>
                        <div  className='transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>    
                            <Link to='/ViewDesigner'>Desingers</Link>
                        </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div className='transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                <Link to='/mypage'>My page</Link>
                            </div>
                            <div className='transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                <Link to='/reservation'>Reservation</Link>
                            </div>
                            <div className='transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                <Link to='/like'>Like</Link>
                            </div>
                        </div>                    
                    </div>
                    <div className='flex items-center space-x-4 px-4'>
                        <Link to='/Login' >
                            <button className='transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Login</button>
                        </Link>
                        <Link to='/register'>
                            <button className='transition-duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;