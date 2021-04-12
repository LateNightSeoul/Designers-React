import React, {useState} from 'react';

function ListComponent({ id, img_url, year, month, date, day, treatment_name, designer_name, price, point}) {
    return(
        <div>
            <div>
                <img width='120' height='160' src={require('./designer-photo.jpg')}></img>
                <div>{designer_name}</div>
            </div>
            <div>{year}년 {month}월 {date}일 ({day})</div>
            <div>{treatment_name}</div>
            <div>{price}</div>
            <div>{point}</div>
        </div>
    )
}

function ReservationList() {
    const [mockData, setMockData] = useState([
        {   
            id: 1,
            img_url: './designer-photo.jpg',
            year: 2021,
            month: 4,
            date: 12,
            day: '화',
            treatment_name: '애즈펌',
            designer_name: '수란',
            price: 50000,
            point: 1340,
        },
        {
            id: 2,
            img_url: './designer-photo.jpg',
            year: 2021,
            month: 4,
            date: 11,
            day: '월',
            treatment_name: '커트',
            designer_name: '수란',
            price: 15000,
            point: 1340,
        }
    ])


    return (
        <div className='list-container'>
            {mockData.map((data) => (
                <ListComponent id={data.id} 
                    img_url={data.img_url} 
                    year={data.year} 
                    month={data.month}
                    date={data.date}
                    day={data.day}
                    treatment_name={data.treatment_name}
                    designer_name={data.designer_name}
                    price={data.price}
                    point={data.point}/>))}
        </div>
    )
}

export default ReservationList;