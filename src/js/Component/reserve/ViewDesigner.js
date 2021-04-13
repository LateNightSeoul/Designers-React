import React, { useState } from 'react';


function Description() {
    return 
}

function TreatmentInfo() {

}

function MainImage({ img_url }) {
    return(
        <img src={require('../member/designer-photo.jpg')}/>
    )
}

function SubImage({ img_url }) {
    return(
        <img src={require('../member/designer-photo.jpg')}/>
    )
}

function ImageSlider() {
    const [img, setImg] = useState([
        {
            id: 0,
            img_url: '../member/designer-photo.jpg',            
        },
        {
            id: 1,
            img_url: '../member/designer-photo.jpg',   
        },
        {
            id: 2,
            img_url: '../member/designer-photo.jpg',   
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
        </React.Fragment>
    )
}

export default ViewDesigner;