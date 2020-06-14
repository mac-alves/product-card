import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 40px;
    overflow: hidden;

    @media (max-width: 400px){
        padding: 20px;
    }
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 860px;

    @media (max-width: 1000PX) {
        flex-direction: column;
        width: 100%;
        box-shadow: 0 0 35px 1px rgba(0, 0, 0, 0.1);

        & > div{
            width: 100%;
            box-shadow: none;
        }
    }
`;

export const Info = styled.div`
    width: 50%;
    background-color: #fff;
    z-index: 1;
    padding: 35px 40px;
    box-shadow: 15px 0 30px rgba(0, 0, 0, 0.1),
    0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);

    @media (max-width: 490px){
        padding: 20px;
    }
`;

export const Description = styled.div`
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

export const Text = styled.p`
    color: #555;
    font-size: 17px;

    @media (max-width: 490px){
        font-size: .8rem;
    }
`;