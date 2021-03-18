import React, { useEffect, useState } from 'react';
import '../../css/createDesigner.css';

function Option({ number }) {
    return (
        <option value={number}>{number}</option>
    )
}

function ChooseNumber({ getDesignerNumber }) {
    function getNumbers() {
        let numbers = [];
        for(let i = 0; i < 11; i++) {
            numbers.push(i);
        }
        return numbers
    }

    const numbers = getNumbers();

    const onChange = (e) => {
        getDesignerNumber(e.target.value);
    }

    return(
        <div className={'chooseNumber-container'}>
            <select name={'designer-numbers'} onChange={getDesignerNumber}>
                {numbers.map((number, i) => (<Option key={i} number={number}/>))}
            </select>
        </div>
    )
}

function DesignerForm({ designerNumber }) {

    console.log(designerNumber);

    const getDesignerNumber = () => {
        let numbers = [];
        for(let i = 0; i < designerNumber; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    const numbers = getDesignerNumber();

    return(
        numbers.map((number, i) => (<div key={i}>디자이너{i+1}</div>))
    )
}

function CreateDesigner() {

    const [designerNumber, setDesignerNumber] = useState(0);

    const getDesignerNumber = (e) => {
        setDesignerNumber(e.target.value);
    }
    
    console.log(designerNumber);

    return(
        <div className={'createDesigner-container'}>
            <div>
                <ChooseNumber getDesignerNumber={getDesignerNumber}/>
            </div>
            <div>
                <DesignerForm designerNumber={designerNumber}/>            
            </div>
            <hr/>
            
        </div>
        
    )
}

export default CreateDesigner;