import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import TimeTable from './TimeTable';
import TreatmentSelector from './TreatmentSelector';


function Reservating() {

    const [selected, setSelected] = useState({
        treatment: '',
        full_date: '',
        date: '',
        time: '',
    })

    return(
        <div>
            <div>예약하기</div>
            <TreatmentSelector selected={selected} setSelected={setSelected}/>
            <Calendar selected={selected} setSelected={setSelected}/>
            <TimeTable selected={selected} setSelected={setSelected}/>
            <button>예약</button>
        </div>
        
    )
}

export default Reservating;