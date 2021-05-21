import axios from 'axios';
import React, { useState } from 'react';

function LikeComponent({ id, designer_name, address, designer_store, point }) {
    return(
        <div>
            <img src={require('./designer-photo.jpg')} width='120' height='180'/>
            <div>{designer_name}</div>
            <div>{address}</div>
            <div>{designer_store}</div>
            <div>{point}</div>
            <button>취소</button>
        </div>
    )
}

function LikeList() {

    const [listData, setListData] = useState([])

    const getData = () => {

        const url = 'http://localhost:8080/like/getList'

        axios.get(url)
            .then((res) => {console.log(res);})
            .catch((res) => {})
    }

    getData();

    const [mockData, setMockData] = useState([
        {
            id: 1,
            designer_name: '수란',
            address: '서울시 성북구 길음로',
            designer_store: '엘리헤어',
            point: 1340,
        },
        {
            id: 2,
            designer_name: '제리',
            address: '서울시 성북구 한성대',
            designer_store: '꿈헤어',
            point: 200,
        }
    ])

    return(
        <div className='like-container'>
            <div>좋아요</div>
            <ul>
                {mockData.map((data) => (
                    <LikeComponent
                        id={data.id}
                        designer_name={data.designer_name}
                        address={data.address}
                        designer_store={data.designer_store}
                        point={data.point}/>))}
            </ul>
        </div>
    )
}

export default LikeList;