import React from 'react';
import '../css/App.css';
import CreateTreatment from './Component/createStore/CreateTreatment';
import SchedulerContainer from './Component/scheduler/SchedulerContainer';
import Login from './Component/member/Login';
import SignUp from './Component/member/SignUp';
import CreateDesigner from './Component/createStore/CreateDesigner';
import ReservationList from './Component/member/ReservationList';
import LikeList from './Component/member/LikeList';
import ViewDesigner from './Component/reserve/ViewDesigner';
import Reservating from './Component/reserve/Reservating';
import NavBar from './Component/ui/NavBar';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Main from './Component/reserve/Main';
import "tailwindcss/tailwind.css"
import '../css/style.css';
import FindId from './Component/member/FindId';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar></NavBar>
        <div>
          <Switch>
            <Route exact path='/' component={Main}></Route>
            <Route path='/reservation' component={ReservationList}></Route>
            <Route path='/like' component={LikeList}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={SignUp}></Route>
            <Route path='/main' component={Main}></Route>
            <Route path='/designer/:id' component={ViewDesigner}></Route>
            <Route path='/findid' component={FindId}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
