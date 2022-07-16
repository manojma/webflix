import styled from 'styled-components/macro';

export const Container = styled.div`

    background: rgba(0,0,0,0.4); 
    background-image: linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8));
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding 165px 45px;
    
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;
