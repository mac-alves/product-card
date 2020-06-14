import styled from 'styled-components';

interface GradientProps {
    gradient: Array<string>
}

export const Container = styled.div`
    position: relative;
    width: 50%;
    height: 475px;
    box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1),
    0 -15px 35px rgba(0, 0, 0, 0.1),
    0 15px 35px rgba(0, 0, 0, 0.1);
`;

export const Gradients = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

export const Gradient = styled.div<GradientProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -2;
    /* background-image: linear-gradient(45deg, #0136af, #22abfa); */
    background-image: linear-gradient(
        45deg, 
        ${props => props.gradient[0]}, 
        ${props => props.gradient[1]}
    );
    

    &.first{
        z-index: 0;
        animation: 1s width ease;
    }

    &.secod{
        z-index: -1;
    }

    @keyframes width {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
`;

export const Nike = styled.h1`
    position: absolute;
    top: 85px;
    left: 15px;
    font-size: 11rem;
    text-transform: uppercase;
    line-height: .9;
    color: #fff;
    opacity: 0.1;

    @media (max-width: 1000PX) {
        top: 20%;
        left: 5%;
    }

    @media (max-width: 490px){
        font-size: 7rem;
    }
`;

export const Logo = styled.img`
    position: absolute;
    width: 100px;
    left: 20px;
    top: 20px;


    @media (max-width: 600px){
        width: 70px;
    }

    @media (max-width: 490px){
        width: 60px;
        top: 10px;
        left: 10px;
    }
`;


export const Share = styled.a`
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 1.3rem;
    text-decoration: none;
    color: ${props => props.theme.color};
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 600px){
        width: 40px;
        height: 40px;

        & .icon {
            font-size: 1rem;
        }
    }

    @media (max-width: 490px){
        width: 35px;
        height: 35px;
        top: 10px;
        right: 10px;

        & .icon{
            font-size: .8rem;
        }
    }
`;

export const Shoe = styled.img`
    position: absolute;
    width: 140%;
    opacity: 0;
    bottom: 0;
    right: 0;
    transform: rotate(-20deg);

    &.active {
        opacity: 1;
    }

    @media (max-width: 1070PX) {
        width: 135%;
    }

    @media (max-width: 1000PX){
        width: 100%;
        transform: rotate(-5deg) translateY(-50%);
        top: 55%;
        right: 2%;
    }
`;