import styled from 'styled-components';

interface ColorProps {
    color: string
}

export const Container = styled.div`
    border-bottom: 1px solid #dadada;
    padding: 10px 0;
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

export const Color = styled.span<ColorProps>`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 0 10px;
    border: 5px solid;
    cursor: pointer;
    transition: 0.5s;

    background-color: ${props => props.color};
    border-color: ${props => props.color};

    &.active{
        border-color: #fff;
        box-shadow: 0 0 10px .5px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
    }


    @media (max-width: 490px){
        margin: 0 6px;
        width: 0 20px;
        width: 20px;
        height: 20px;
        border-width: 4px;
    }
`;