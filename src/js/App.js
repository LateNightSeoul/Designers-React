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


function App() {
  return (
    <ViewDesigner></ViewDesigner>
  );
}

export default App;
