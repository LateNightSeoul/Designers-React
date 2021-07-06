import React from 'react';
import '../css/App.css';
import SchedulerContainer from './Component/scheduler/SchedulerContainer';
import Login from './Component/member/Login';
import SignUp from './Component/member/SignUp';
import ReservationList from './Component/member/ReservationList';
import LikeList from './Component/member/LikeList';
import ViewDesigner from './Component/reserve/ViewDesigner';
import Reservating from './Component/reserve/Reservating';
import NavBar from './Component/ui/NavBar';
import Main from './Component/reserve/Main';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "tailwindcss/tailwind.css"
import '../css/style.css';
import { useSelector, useDispatch } from 'react-redux';
import FindId from './Component/member/FindId';
import FindPw from './Component/member/findPw';
import MyPage from './Component/member/MyPage';
import user, { onLoginSuccess } from '../modules/user';
import {useEffect} from 'react';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const localStorageUserInfo = localStorage.getItem('token');

  useEffect(() => {
    if (localStorageUserInfo) {
      const url = 'http://localhost:8080/member/reAuthenticate';

        axios.post(url, {
            token: localStorageUserInfo
        })  
        .then((res) => { 
            dispatch(onLoginSuccess(res.data))
            localStorage.setItem('token', res.data.token);
        })
        .catch((res) => { console.log('Login needed');})
    }
  }, [])

  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar></NavBar>
        <div>
          <Switch>
            <Route exact path='/' component={ViewDesigner}></Route>
            <Route path='/reservation' component={ReservationList}></Route>
            <Route path='/ViewDesigner' component={ViewDesigner}></Route>
            <Route path='/like' component={LikeList}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={SignUp}></Route>
            <Route path='/main' component={Main}></Route>
            <Route path='/designer/:id' component={ViewDesigner}></Route>
            <Route path='/findid' component={FindId}></Route>
            <Route path='/findpw' component={FindPw}></Route>
            <Route path='/mypage' component={MyPage}></Route>
            <Route path='/reservating/:id' component={Reservating}></Route>
            <Route path='/scheduler/:id' component={SchedulerContainer}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
