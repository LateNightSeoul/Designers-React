import React, { useState } from 'react';

function TreatmentTime({ treatmentInfos, treatmentInfo, setTreatmentInfos }) {
    const onIncrease = () => {
        setTreatmentInfos(treatmentInfos.map(
            ti => (ti.id === treatmentInfo.id) ? {...ti, required_time: ti.required_time + 30} : ti));
    }

    const onDecrease = () => {
        if (treatmentInfo.required_time === 30) {
            alert('시술 시간은 30분 이상이어야 합니다.');
            return;
        }
        setTreatmentInfos(treatmentInfos.map(
            ti => (ti.id === treatmentInfo.id) ? {...ti, required_time: ti.required_time - 30} : ti));
    }

    return (
        <div>
            {treatmentInfo.required_time}
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

function BlankTime({ treatmentInfos, treatmentInfo, setTreatmentInfos }) {

    console.log(treatmentInfo.blanktime_higher);

    const onIncreaseLower = () => {
        if (treatmentInfo.blanktime_lower + 30 > treatmentInfo.blanktime_higher) {
            alert('왼쪽의 시간을 더 작게 설정해야 합니다.');
            return
        }
        setTreatmentInfos(treatmentInfos.map(
            ti => (ti.id === treatmentInfo.id) ? {...ti, blanktime_lower: ti.blanktime_lower + 30} : ti));
    }

    const onDecreaseLower = () => {
        if (treatmentInfo.blanktime_lower - 30 < 0) {
            alert('시간은 0분 이상으로 설정해야 합니다.');
            return
        }
        setTreatmentInfos(treatmentInfos.map(
            ti => (ti.id === treatmentInfo.id) ? {...ti, blanktime_lower: ti.blanktime_lower - 30} : ti));
    }

    const onIncreaseHigher = () => {
        console.log(treatmentInfo.id);
        if (treatmentInfo.blanktime_higher + 30 > treatmentInfo.required_time) {
            alert('공백 시간은 시술 시간을 초과할 수 없습니다.');
            return
        }
        setTreatmentInfos(treatmentInfos.map(
            ti => (ti.id === treatmentInfo.id) ? {...ti, blanktime_higher: ti.blanktime_higher + 30} : ti));
    }

    const onDecreaseHigher = () => {
        if (treatmentInfo.blankTime_higher - 30 < treatmentInfo.blankTime_lower || treatmentInfo.blankTime_higher < 0) {
            alert('시간 입력이 올바르지 않습니다.');
            return
        }
        setTreatmentInfos(treatmentInfos.map(
            ti => (ti.id === treatmentInfo.id) ? {...ti, blanktime_higher: ti.blanktime_higher - 30} : ti));
    }

    return(
        <div>
            {treatmentInfo.blanktime_lower}
            <button onClick={onIncreaseLower}>+</button>
            <button onClick={onDecreaseLower}>-</button>
            <span>~</span>
            {treatmentInfo.blanktime_higher}
            <button onClick={onIncreaseHigher}>+</button>
            <button onClick={onDecreaseHigher}>-</button>
        </div>
    )
}

function TreatmentForm({ treatmentInfos, treatmentInfo, setTreatmentInfos, setNextId }) {
    const onRemove = () => {
        if(treatmentInfos.length === 3) {
            alert('시술은 3개 이상이어야 합니다.');
            return
        }
        setTreatmentInfos(treatmentInfos.filter(ti => ti.id !== treatmentInfo.id));
        setNextId(prevId => prevId - 1);
    }

    return (
        <div>
            <button onClick={onRemove}>삭제</button>
            <input type={Text} placeholder={'시술 이름'}/>
            <input type={Text} placeholder={'가격'}/>
            <input type={Text} placeholder={'설명'}/>
            <TreatmentTime 
                treatmentInfos={treatmentInfos}
                treatmentInfo={treatmentInfo} 
                setTreatmentInfos={setTreatmentInfos}/>
            <BlankTime 
                treatmentInfos={treatmentInfos}
                treatmentInfo={treatmentInfo} 
                setTreatmentInfos={setTreatmentInfos}/>
                <hr></hr>
        </div>
        
    )
}

function CreateTreatment() {

    const [nextId, setNextId] = useState(3);
    const [treatmentInfos, setTreatmentInfos] = useState([
        {
            id: 0,
            name: "",
            price: "",
            description: "",
            required_time: 30,
            blanktime_lower: 0,
            blanktime_higher: 0,
            image: null,
        },
        {
            id: 1,
            name: "",
            price: "",
            description: "",
            required_time: 30,
            blanktime_lower: 0,
            blanktime_higher: 0,
            image: null,
        },
        {
            id: 2,
            name: "",
            price: "",
            description: "",
            required_time: 30,
            blanktime_lower: 0,
            blanktime_higher: 0,
            image: null,
        }
    ])

    const onIncrease = () => {
        if (treatmentInfos.length === 30) {
            alert('최대 시술 개수는 30개 입니다.');
            return;
        }
        const new_treatmentInfo = {
            id: nextId,
            name: "",
            price: "",
            description: "",
            required_time: 30,
            blanktime_lower: 0,
            blanktime_higher: 0,
            image: null,
        }
        setNextId(prevId => prevId + 1);
        setTreatmentInfos(treatmentInfos.concat(new_treatmentInfo));
        console.log(treatmentInfos);
    }

    return (
        <div className={'createTreatment-container'}>
            {treatmentInfos.map((treatmentInfo, i) => {
                return (<TreatmentForm key={i}
                        treatmentInfos={treatmentInfos}
                        treatmentInfo={treatmentInfo}
                        setTreatmentInfos={setTreatmentInfos}
                        setNextId={setNextId}/>);
            })}
            <div>
                <button onClick={onIncrease}>시술 추가</button>
            </div>
            <div>
                <button>완료</button>
            </div>
        </div>
    )
}

export default CreateTreatment;