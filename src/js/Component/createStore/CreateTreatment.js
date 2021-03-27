import React, { useState } from 'react';

function TreatmentTime() {
    const [treatmentTime, setTreatmentTime] = useState(10);

    const onIncrease = () => {
        setTreatmentTime(prevTime => prevTime + 10);
    }

    const onDecrease = () => {
        if (treatmentTime === 10) {
            alert('시술 시간은 10분 이상이어야 합니다.');
            return;
        }
        setTreatmentTime(prevTime => prevTime - 10);
    }

    return (
        <div>
            {treatmentTime}
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

function TreatmentForm() {
    return (
        <div>
        <input type={Text} placeholder={'시술 이름'}/>
        <input type={Text} placeholder={'가격'}/>
        <input type={Text} placeholder={'설명'}/>
        <TreatmentTime/>
    </div>
    )
}

function CreateTreatment() {
    const [treatmentNumber, setTreatmentNumber] = useState(3);

    const onIncrease = () => {
        if (treatmentNumber === 20) {
            alert('최대 시술 개수는 20개 입니다.');
            return;
        }
        setTreatmentNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        if (treatmentNumber === 3) {
            alert('시술은 3개 이상 등록해야 합니다.');
            return;
        }
        setTreatmentNumber(prevNumber => prevNumber - 1);
    }


    return (
        <div className={'createTreatment-container'}>
            {
            [...Array(treatmentNumber).keys()].map((i) => {
                return (<TreatmentForm key={i}/>);
            })
            }
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
            <div>
                <button>완료</button>
            </div>
        </div>
    )
}

export default CreateTreatment;