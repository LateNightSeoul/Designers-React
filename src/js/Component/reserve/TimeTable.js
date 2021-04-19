import React, { useEffect, useState } from 'react';

function TimeTable() {
    const [mockData, setMockData] = useState([
        {
            time: '12:00'
        },
        {
            time: '12:30'
        },
        {
            time: '14:00'
        },
        {
            time: '15:30'
        },
    ])

    return(
        <div>
            <div>시간 선택</div>
            {mockData.map((data) => (<div>{data.time}</div>))}
        </div>
    )
}

export default TimeTable;