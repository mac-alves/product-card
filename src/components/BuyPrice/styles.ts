import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Buy = styled.a`
    padding: .7rem 1rem;
    background-color: ${props => props.theme.color};
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 1.1rem;
    transition: .5s;

    &:hover{
        transform: scale(1.1);
    }

    & i {
        margin-right: 2px;
    }

    @media (max-width: 490px){
        padding: .5rem .8rem;
        font-size: .8rem;
    }

    @media (max-width: 400px){
        & i{
            display: none;
        }
    }
    
`;

export const Price = styled.div`
    color: #333;
    display: flex;
    align-items: flex-start;

    & h1 {
        font-size: 2.1rem;
        font-weight: 600;
        line-height: 1;
    }

    & .icon {
        font-size: 1.4rem;
        margin-right: 1px;
    }

    @media (max-width: 490px){
        & h1{
            font-size: 1.5rem;
        }

        & .icon{
            font-size: .9rem;
        }
    }
`;