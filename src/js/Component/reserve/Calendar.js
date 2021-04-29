import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './calendar.css';

function DateComponent({calendar_data, row, column, mockData, today, selectedDate, setSelectedDate, date, selected, setSelected }) {

    const date_today = calendar_data[row * 7 + column];

    const isAvailable = (date_today) => {
        if(date.today.getFullYear() < today.getFullYear()) {
            return false
        } else if(date.today.getMonth() < today.getMonth()) {
            return false
        } else if(date.today.getMonth() === today.getMonth() && date_today < today.getDate()) {
            return false
        }

        for (let i = 0; i < mockData.length; i++) {
            if(mockData[i].date == date_today && mockData[i].available === false) {
                return false
            }
        }
        return true
    }

    const isSelected = () => {
        if(isAvailable(date_today) === false) {
            return false
        }
        if(row == selectedDate.row && column == selectedDate.column){
            return true
        } 
        return false
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(isAvailable(date_today) === false) {
            return
        }
        setSelected({...selected, date: e.target.id});
        setSelectedDate({row : row, column : column});
        console.log(selected);
    }

    return (
        <td className={[(isAvailable(date_today) === true && 'is-active'),
                        (isSelected() === true && 'is-selected')].join(' ')}
            id={date_today}
            onClick={handleClick}>
                {date_today === 0 ? '' : date_today}
        </td>
    )
}

function RowComponent({ calendar_data, row, mockData, today, setSelectedDate, selectedDate, date, selected, setSelected }) {
    const column_numbers = [0,1,2,3,4,5,6];

    return (
        <tr>{column_numbers.map((column, i) => (<DateComponent 
                                                    calendar_data={calendar_data} 
                                                    row={row} 
                                                    column={column} 
                                                    mockData={mockData} 
                                                    today={today} 
                                                    setSelectedDate={setSelectedDate}
                                                    selectedDate={selectedDate}
                                                    date={date}
                                                    selected={selected}
                                                    setSelected={setSelected}/>))}</tr>
    )
}

function MainComponent({ today, date, selected, setSelected, selectedDate, setSelectedDate }) {
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

    const initCalendar = () => {
        let calendar_data = [];
        const last_date_of_full_calendar = 42;
        for (let i = 0; i < last_date_of_full_calendar; i++) {
            if(i >= date.first_date.getDay() && i < (date.last_date.getDate() + date.first_date.getDay())) {
                calendar_data.push(i - date.first_date.getDay() + 1);
            } else {
                calendar_data.push(0);
            }
        }
        return calendar_data;
    }

    const calendar_data = initCalendar();
    const row_numbers = [0,1,2,3,4,5];
    
    return(
        <React.Fragment>
            {row_numbers.map((row) => {
                return <RowComponent 
                            calendar_data={calendar_data} 
                            row={row} mockData={mockData} 
                            today={today}
                            setSelectedDate={setSelectedDate}
                            selectedDate={selectedDate}
                            date={date}
                            selected={selected}
                            setSelected={setSelected}/>
            })}
        </React.Fragment>
    )
}

function Calendar({ selected, setSelected }) {
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
        setSelected({...selected, date: ''});
        setSelectedDate(0);
    }

    const onClickPrev = () => {
        let next_date = new Date(date.today.getFullYear(), date.today.getMonth() - 1);
        setDate({
            today: next_date,
            first_date: new Date(next_date.getFullYear(), next_date.getMonth(), 1),
            last_date: new Date(next_date.getFullYear(), next_date.getMonth() + 1, 0)
        })
        setSelected({...selected, date: ''});
        setSelectedDate(0);
    }
    
    const onChangeDate = () => {
        setSelected({...selected, full_date: date.today});
        console.log(selected);
    }
    
    useEffect(onChangeDate, [date]);

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
                    date={date}
                    today={today} 
                    selected={selected}
                    setSelected={setSelected}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    />
            </table>
            <button onClick={onClickPrev}>이전</button>
            <button onClick={onClickNext}>다음</button>
            
        </div>
    )
}

export default Calendar;