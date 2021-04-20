import React, { useState, useEffect } from 'react';

function TreatmentSelector({ selected, setSelected}) {
    const [treatmentInfo, setTreatmentInfo] = useState({
        type: '',
        menus: []
    });

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
        setTreatmentInfo({type: e.target.id, menus: showTreatment(e)});
    }

    const onClickTreatment = (e) => {
        setSelected({treatment: e.target.id});
        console.log(selected);
    }

    const showTreatment = (e) => {
        const data = mockData.filter((data) => (data.treatment_type === e.target.id));
        if (data.length === 0) {
            return []
        }
        let menus = []
        data[0].treatments.map((data) => (
            menus.push({
                treatment_name: data.treatment_name,
                price: data.price 
            })
        ))
        return menus
    }

    return(
        <div>
            <div>시술선택</div>
            {mockData.map((data, i) => (
                <button onClick={onClickTreatmentType} id={data.treatment_type}>{data.treatment_type}</button>
            ))}
            {treatmentInfo.menus.length > 0 &&
                treatmentInfo.menus.map((data) => (
                    <div onClick={onClickTreatment}>
                        <div id={data.treatment_name}>{data.treatment_name}</div>
                        <div id={data.treatment_name}>{data.price}</div>
                    </div>
                ))}
        </div>
    )
}

export default TreatmentSelector;