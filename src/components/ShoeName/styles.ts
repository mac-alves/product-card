import styled from 'styled-components';

interface NewProps {
    show: boolean;
}

export const Container = styled.div`
    padding: 0 0 10px 0;
    border-bottom: 1px solid #dadada;

    & div {
        display: flex;
        align-items: center;
    }
`;

export const Big = styled.h1`
    margin-right: 10px;
    font-size: 2rem;
    color: #333;
    line-height: 1;

    @media (max-width: 490px){
        font-size: 1.3rem;
    }
`;

export const New = styled.span<NewProps>`
    display: ${props => (props.show) ? 'block' : 'none'};
    background-color: ${props => props.theme.color};
    text-transform: uppercase;
    color: #fff;
    padding: 3px 10px;
    border-radius: 5px;

    @media (max-width: 490px){
        padding: 2px 6px;
        font-size: .9rem;
    }
`;

export const Small = styled.h3`
    font-weight: 500;
    color: #444;
    margin-top: 3px;
    text-transform: capitalize;

    @media (max-width: 490px){
        font-size: 1rem;
    }
`;