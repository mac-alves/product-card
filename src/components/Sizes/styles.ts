import styled from 'styled-components';

export const Container = styled.div`
    border-bottom: 1px solid #dadada;
    padding: 10px 0;
    margin-bottom: 10px;
`;

export const Title = styled.h3`
    color: #3a3a3a;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;

    @media (max-width: 490px){
        font-size: .9rem;
    }
`;

export const Content = styled.div`
    padding: 8px 0;
    display: flex;
    align-items: center;
`;

export const Size = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background-color: #eee;
    margin: 0 10px;
    text-align: center;
    line-height: 40px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: .3s;

    &.active{
        background-color: ${props => props.theme.color};
        color: #fff;
    }

    @media (max-width: 490px){
        width: 30px;
        height: 30px;
        margin: 0 8px;
        font-size: .9rem;
        line-height: 30px;
    }
`;