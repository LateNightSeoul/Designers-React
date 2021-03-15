import React from 'react';
import '../../css/schedule.css';

function Schedule({ member_name, treatment_type }) {
    return (
    <div className={'schedule'}>
        <div>
            <div>{treatment_type}</div>
            <div>{member_name}</div>
        </div>
    </div>
    )
}

export default Schedule;