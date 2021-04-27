import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    height: 34px;
    background: #eee linear-gradient(to bottom, #fcfcfc, #eee);
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    
    & a{
        text-decoration: none;
        color: black;
    }

    &:hover::before {
        content: "";    
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.07);
    }

`;

export default Button;