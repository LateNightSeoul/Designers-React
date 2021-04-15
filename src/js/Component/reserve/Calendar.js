import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function DateComponent({ first_date, last_date }) {
    const getCalendarData = () => {
        let calnedar_data = [];
        const last_date_of_full_calendar = 42;
        for (let i = 0; i < last_date_of_full_calendar; i++) {
            if(i >= first_date.getDay() && i < (last_date.getDate() + first_date.getDay())) {
                calnedar_data.push(<td>{i - first_date.getDay() + 1}</td>);
            } else {
                calnedar_data.push(<td></td>);
            }
        }
        return calnedar_data;
    }

    const calnedar_data = getCalendarData();

    const row_numbers = [0,1,2,3,4,5];
    const column_numbers = [0,1,2,3,4,5,6];

    return(
        <React.Fragment>
            {row_numbers.map((row) => {
                return <tr>{column_numbers.map((column) => (calnedar_data[row*7 + column]))}</tr>
            })}
        </React.Fragment>
    )
}

function Calendar() {
    const days_of_week = useSelector(state => state.date)[0].days_of_week;
    let today = new Date();
    const [date, setDate] = useState({
        today: new Date(),
        first_date: new Date(today.getFullYear(), today.getMonth(), 1),
        last_date: new Date(today.getFullYear(), today.getMonth() + 1, 0)
    })

    const onClickNext = () => {
        let next_date = new Date(date.today.getFullYear(), date.today.getMonth() + 1);
        setDate({
            today: next_date,
            first_date: new Date(next_date.getFullYear(), next_date.getMonth(), 1),
            last_date: new Date(next_date.getFullYear(), next_date.getMonth() + 1, 0)
        })
    }

    const onClickPrev = () => {
        let next_date = new Date(date.today.getFullYear(), date.today.getMonth() - 1);
        setDate({
            today: next_date,
            first_date: new Date(next_date.getFullYear(), next_date.getMonth(), 1),
            last_date: new Date(next_date.getFullYear(), next_date.getMonth() + 1, 0)
        })
    }

    return(
        <div>
            <div>달력</div>
            <div>{date.today.getFullYear()}</div>
            <table>
                <tr>
                    {days_of_week.map((day, i) => (<td>{day}</td>))}
                </tr>
                <DateComponent first_date={date.first_date} last_date={date.last_date}/>
            </table>
            <button onClick={onClickPrev}>이전</button>
            <button onClick={onClickNext}>다음</button>
        </div>
    )
}

export default Calendar;