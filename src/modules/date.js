const dateObj = new Date();
const days_of_week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const minutes = ['00분', '10분', '20분', '30분', '40분', '50분'];

function getDays() {
    let days = [];
    let idx = dateObj.getDay();
    for (let i = 0; i < 7; i++) {
        days.push(days_of_week[idx % 7]);
        idx++;
    }
    return days
}

function getDates() {
    let dates = [];
    const dateObj = new Date();
    for(let i = 0; i < 7; i++) {
        dates.push(dateObj.getDate());
        dateObj.setDate(dateObj.getDate() + 1);
    }
    return dates;
}

const days = getDays();
const dates = getDates();
const month = dateObj.getMonth();
const year = dateObj.getFullYear();


const initialState = [
    {
        days: days,
        dates: dates,
        month: month,
        year: year,
        minutes: minutes
    }
];

export default function date(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}