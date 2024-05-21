import styled from 'styled-components'

const RoundOutlineButton = styled.button`
    background-color: rgba(36, 59, 185, 0.2);
    color: #fff;
    padding: 16px 35px;
    margin: 0 9px;
    line-height: 14px;
    border: none;
    border-radius: 40px;
    border: 1px solid #243BB9;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600px;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: rgba(36, 59, 185, 0.5);
        border-color: #3F57DA;
    }
`;
const RoundButton = styled.button`
    background-color: #243BB9;
    color: #fff;
    padding: 16px 35px;
    margin: 0 9px;
    line-height: 14px;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600px;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: rgba(36, 59, 185, 0.5);
    }
`;

const IconButton = styled.div`
    background-image: linear-gradient(to bottom, rgba(116, 159, 246, 0.3), rgba(21, 57, 132, 0.3));
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 9.25px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600px;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: rgba(36, 59, 185, 0.5);
    }
`;


export { RoundOutlineButton, RoundButton, IconButton }