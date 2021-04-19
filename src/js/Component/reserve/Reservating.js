import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import TimeTable from './TimeTable';
import TreatmentSelector from './TreatmentSelector';


function Reservating() {

    return(
        <div>
            <div>예약하기</div>
            <TreatmentSelector></TreatmentSelector>
            <Calendar></Calendar>
            <TimeTable></TimeTable>
        </div>
    )
}

export default Reservating;