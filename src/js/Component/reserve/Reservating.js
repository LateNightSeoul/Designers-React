import React, { useState, useEffect } from 'react';

function TreatmentSelector() {
    const [treatmentType, setTreatmentType] = useState('');
    const [treatmentMenu, setTreatmentMenu] = useState({});
    const mockData = [
        {
            treatment_type: '커트',
            treatments : [
                {
                    treatment_type: '커트',
                    treatment_name: '남성컷',
                    price: 17000
                },        
                {
                    treatment_type: '커트',
                    treatment_name: '여성컷',
                    price: 25000
                },
            ]
        },
        {
            treatment_type: '펌',
            treatments: [
                {
                    treatment_type: '펌',
                    treatment_name: '볼륨펌',
                    price: 37000
                },
                {
                    treatment_type: '펌',
                    treatment_name: '매직',
                    price: 40000
                },
                {
                    treatment_type: '펌',
                    treatment_name: '애즈펌',
                    price: 57000
                },
                {
                    treatment_type: '펌',
                    treatment_name: '암거나해',
                    price: 60000
                }
            ]
        }
    ]

    const onClickTreatmentType = (e) => {
        setTreatmentType(e.target.name);
        console.log(treatmentType);
    }

    const showTreatment = () => {
        const data = mockData.filter((data) => (data.treatment_type === treatmentType));
        if (data.length > 0) {
            const menus = []
            data[0].treatments.map((data) => (
                menus.push({
                    treatment_name: data.treatment_name,
                    price: data.price 
                })
            ))
            setTreatmentMenu(menus)
            return
        }
        return;
    }

    useEffect(showTreatment, [treatmentType]);

    return(
        <div>
            <div>시술선택</div>
            {mockData.map((data, i) => (
                <button onClick={onClickTreatmentType} name={data.treatment_type}>{data.treatment_type}</button>
            ))}
            {treatmentMenu.length > 0 &&
                treatmentMenu.map((data) => (
                    <div>
                        <div>{data.treatment_name}</div>
                        <div>{data.price}</div>
                    </div>
                ))}
        </div>
    )
}

function Reservating() {
    return(
        <div>
            <div>예약하기</div>
            <TreatmentSelector></TreatmentSelector>
        </div>
    )
}

export default Reservating;