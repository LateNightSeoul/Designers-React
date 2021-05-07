import React, { useState } from 'react';

function TreatmentInfo({ treatment_name, price }) {
    return(
        <li>
            <span>{treatment_name}</span>
            <span>{price}</span>
        </li> 
    )
}

function Content({ img_url, designer, address, treatments, like}) {
    return(
        <div>
            <img src={img_url} width='120' height='160'/>
            <div>디자이너 {designer}</div>
            <div>주소 {address}</div>
            <div>좋아요 {like}</div>
            <div>
                <ul>
                   가격표 {treatments.map((treatment, i) => <TreatmentInfo treatment_name={treatment.treatment_name}
                                                                price={treatment.price}/>)}
                 </ul>
            </div>
        </div>
    )
}

function ContentView() {

    const [region, setRegion] = useState([
        {
            id: 0,
            gu: '성북구',
        },
        {
            id: 1,
            gu: '강북구'
        },
        {
            id: 2,
            gu: '강남구'
        }
    ])

    const [contents, setContents] = useState([
        {
            id: 0,
            img_url: 'https://i.picsum.photos/id/682/200/300.jpg?hmac=z-Zlq9KVG3pNsE5Jo6A7vqnh-B910bdMztU5AZKQV-o',
            designer: '이해석',
            like: 895,
            address: '서울시 성북구',
            treatments: [
                {
                    treatment_name: '애즈펌',
                    price: 35000
                },
                {
                    treatment_name: '남성컷',
                    price: 12000
                },
                {
                    treatment_name: '여성컷',
                    price: 12000
                },
                {
                    treatment_name: '호일펌',
                    price: 55000
                },
            ]
        },
        {
            id: 1,
            img_url: 'https://i.picsum.photos/id/101/200/300.jpg?hmac=xUDvORQTxaML0fp9wnx4y6LIHvc7M-tNcOJz8rDLRXo',   
            designer: '이종영',
            like: 5692,
            address: '서울시 성북구',
            treatments: [
                {
                    treatment_name: '가르마펌',
                    price: 45000
                },
                {
                    treatment_name: '남성컷',
                    price: 22000
                },
                {
                    treatment_name: '여성컷',
                    price: 32000
                },
                {
                    treatment_name: '호일펌',
                    price: 45000
                },
            ]
        }
    ])

    return(
        <div>
            <div>
                <select>
                    <option value=''>지역 설정</option>
                    {region.map((r, i) => <option value={r.gu}>{r.gu}</option>)}
                </select>
            </div>
            <div>
                {contents.map((content, i) => <Content id={content.id}
                                                        img_url={content.img_url}
                                                        designer={content.designer}
                                                        address={content.address}
                                                        treatments={content.treatments}
                                                        like={content.like}
                                                        ></Content>)}
            </div>
        </div>
    )
}

function Search() {
    const [search, setSerach] = useState('');

    const onChangeInput = (e) => {
        setSerach(e.target.value);
    }
    
    return (
            <div>
                배경 사진
                <input type={Text} 
                    placeholder='검색어를 입력하세요.'
                    onChange={onChangeInput}/>
            </div> 
    )
}

function Main() {
    const [search, setSerach] = useState('');

    const onChangeInput = (e) => {
        setSerach(e.target.value);
    }
    
    return (
        <div>
            <Search/>
            <ContentView/>
        </div>
    )
}

export default Main;