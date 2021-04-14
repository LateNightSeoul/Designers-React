import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

function Description() {
    const [mockData, setMockData] = useState({
        content: '<div>ㅎㅇ요</div><br/> <div>❤❤</div>'
    })

    return(
        <div>
            <div>설명</div>
            {ReactHtmlParser(mockData.content)}
        </div>
    )
}

function TreatmentInfo() {
    const [mockData, setMockData] = useState([
        {
            name: '애즈펌',
            price: 60000,
        },
        {
            name: '남성컷',
            price: 17000,
        },
        {
            name: '볼륨펌',
            price: 39000
        }
    ])

    return(
        <ul>
            {mockData.map((data, i) => (
                <li>
                    <div>{data.name}</div>
                    <div>{data.price}원</div>
                </li>
            ))}
        </ul>
    )
}

function MainImage({ img_url }) {
    return(
        <img src={img_url} width='200' height='300'/>
    )
}

function SubImage({ img_url }) {
    return(
        <img src={img_url} width='200' height='300'/>
    )
}

function ImageSlider() {
    const [img, setImg] = useState([
        {
            id: 0,
            img_url: 'https://i.picsum.photos/id/682/200/300.jpg?hmac=z-Zlq9KVG3pNsE5Jo6A7vqnh-B910bdMztU5AZKQV-o',            
        },
        {
            id: 1,
            img_url: 'https://i.picsum.photos/id/101/200/300.jpg?hmac=xUDvORQTxaML0fp9wnx4y6LIHvc7M-tNcOJz8rDLRXo',   
        },
        {
            id: 2,
            img_url: 'https://i.picsum.photos/id/696/200/300.jpg?hmac=Ukxvga_1GYxgfAqzwDhBPfVta6-hJKUhayVlI1yMIdk',   
        }
    ])

    const [imgNumber, setImgNumber] = useState(0);

    const onClickLeft = (e) => {
        e.preventDefault();

        if(imgNumber === 0) {
            setImgNumber(img.length - 1);
        } else {
            setImgNumber(prev => prev - 1);
        }
        console.log(imgNumber);
    }

    const onClickRight = (e) => {
        e.preventDefault();

        if(imgNumber + 1 === img.length) {
            setImgNumber(0);
        } else {
            setImgNumber(prev => prev + 1);
        }
        console.log(imgNumber);
    }

    return(
        <div>
            <div>
                디자이너 포트폴리오
            </div>
            {img.map((image) => {
                if(image.id === imgNumber) {
                    return <MainImage img_url={image.img_url}/>
                }
            })}
            <hr></hr>
            {img.map((image, i) => <SubImage key={i} img_url={image.img_url}/>)}
            <button onClick={onClickLeft}>left</button>
            <button onClick={onClickRight}>right</button>
        </div>
    )
}

function DesignerInfo({ designer_name, address, designer_store, like_count }) {
    const [mockData, setMockData] = useState({
        designer_name: '이해석',
        like_count: 76,
        address: '서울시 성북구 길음로',
        designer_store: '엘리헤어'
    })
    
    return(
        <div>
            <img></img>
            <div>{mockData.designer_name}</div>
            <div>{mockData.like_count}</div>
            <div>{mockData.address}</div>
            <div>{mockData.designer_store}</div>
            <button>예약하기</button>
        </div>
    )
}


function ViewDesigner() {
    return(
        <React.Fragment>
            <DesignerInfo></DesignerInfo>
            <hr></hr>
            <ImageSlider></ImageSlider>
            <hr></hr>
            <TreatmentInfo></TreatmentInfo>
            <hr></hr>
            <Description></Description>
        </React.Fragment>
    )
}

export default ViewDesigner;