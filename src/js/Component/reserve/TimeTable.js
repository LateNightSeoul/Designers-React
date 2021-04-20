import React, { useEffect, useState } from 'react';

function TimeTable({ selected, setSelected }) {
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

    const onClickTime = (e) => {
        setSelected({...selected, time: e.target.id});
        console.log(selected);
    }

    return(
        <div>
            <div>시간 선택</div>
            {mockData.map((data) => (<div onClick={onClickTime} id={data.time}>{data.time}</div>))}
        </div>
    )
}

export default TimeTable;