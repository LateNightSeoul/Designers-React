import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './calendar.css';

function DateComponent({calendar_data, row, column, mockData, today, selectedDate, setSelectedDate }) {

    const date = calendar_data[row * 7 + column];

    const isAvailable = (date) => {
        if(date >= today.getDate()) {
            for (let i = 0; i < mockData.length; i++) {
                if(mockData[i].date == date && mockData[i].available === false) {
                    return false
                }
            }
            return true
        } else {
            return false
        }
    }

    const isSelected = () => {
        if(isAvailable(date) === false) {
            return false
        }
        if(row == selectedDate.row && column == selectedDate.column){
            return true
        } 
        return false
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(isAvailable(date) === false) {
            return
        }
        setSelectedDate({row : row, column : column});
        console.log(selectedDate);
    }

    return (
        <td className={[(isAvailable(date) === true && 'is-active'),
                        (isSelected() === true && 'is-selected')].join(' ')}
            onClick={handleClick}>
                {date === 0 ? '' : date}
        </td>
    )
}

function RowComponent({ calendar_data, row, mockData, today, setSelectedDate, selectedDate }) {
    const column_numbers = [0,1,2,3,4,5,6];

    console.log(calendar_data);

    return (
        <tr>{column_numbers.map((column, i) => (<DateComponent 
                                                    calendar_data={calendar_data} 
                                                    row={row} 
                                                    column={column} 
                                                    mockData={mockData} 
                                                    today={today} 
                                                    setSelectedDate={setSelectedDate}
                                                    selectedDate={selectedDate}/>))}</tr>
    )
}

function MainComponent({ today, first_date, last_date }) {

    const [selectedDate, setSelectedDate] = useState(0);

    const mockData = [
        {
            date: 22,
            available: false
        },
        {
            date: 28,
            available: false
        }
    ]

    const handleClick = (date) => {
        
    }

    const initCalendar = () => {
        let calendar_data = [];
        const last_date_of_full_calendar = 42;
        for (let i = 0; i < last_date_of_full_calendar; i++) {
            if(i >= first_date.getDay() && i < (last_date.getDate() + first_date.getDay())) {
                calendar_data.push(i - first_date.getDay() + 1);
            } else {
                calendar_data.push(0);
            }
        }
        return calendar_data;
    }

    const calendar_data = initCalendar();

    console.log(calendar_data);

    const row_numbers = [0,1,2,3,4,5];
    
    return(
        <React.Fragment>
            {row_numbers.map((row) => {
                return <RowComponent 
                            calendar_data={calendar_data} 
                            row={row} mockData={mockData} 
                            today={today}
                            setSelectedDate={setSelectedDate}
                            selectedDate={selectedDate}/>
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

    const [selectedDate, setSelectedDate] = useState(0);

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
            <div>
                <span>{date.today.getFullYear()}년</span>
                <span>{date.today.getMonth()+1}월</span>
            </div>
            <table>
                <tr>
                    {days_of_week.map((day, i) => (<td>{day}</td>))}
                </tr>
                <MainComponent 
                    first_date={date.first_date} 
                    last_date={date.last_date} 
                    today={today} 
                    />
            </table>
            <button onClick={onClickPrev}>이전</button>
            <button onClick={onClickNext}>다음</button>
            
        </div>
    )
}

export default Calendar;