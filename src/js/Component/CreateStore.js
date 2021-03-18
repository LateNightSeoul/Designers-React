import React from 'react';
import '../../css/createStore.css';

function CreateStore() {
    return (
        <div className={'createStore-container'}>
            <div className={'createStore-logo'}>가게 생성</div>
            <div className={'input-container'}>
                <input type={Text} placeholder={'가게 이름'} />
                <input type={Text} placeholder={'주소'} />
                <input type={Text} placeholder={'가게 설명'} />
                <input type={Text} placeholder={'운영시간 설정'} />
            </div>
            <div>다음</div>
        </div>
    )
}

export default CreateStore;