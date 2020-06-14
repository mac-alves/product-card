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

export const ShoeBackground = styled.div`
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

interface GradientProps {
    gradient: Array<string>
}

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

    &:hover{
        transform: scale(1.1);
    }

    & i {
        line-height: 50px;
    }

    @media (max-width: 600px){
        width: 40px;
        height: 40px;

        & i {
            font-size: 1rem;
            line-height: 40px;
        }
    }

    @media (max-width: 490px){
        width: 35px;
        height: 35px;
        top: 10px;
        right: 10px;

        & i{
            font-size: .8rem;
            line-height: 35px;
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

export const ShoeName = styled.div`
    padding: 0 0 10px 0;
    border-bottom: 1px solid #dadada;

    & div {
        display: flex;
        align-items: center;
    }

    & div .big {
        margin-right: 10px;
        font-size: 2rem;
        color: #333;
        line-height: 1;
    }

    & div .new {
        background-color: ${props => props.theme.color};
        text-transform: uppercase;
        color: #fff;
        padding: 3px 10px;
        border-radius: 5px;
    }

    & .small {
        font-weight: 500;
        color: #444;
        margin-top: 3px;
        text-transform: capitalize;
    }

    @media (max-width: 490px){
        & div .big{
            font-size: 1.3rem;
        }

        & .small{
            font-size: 1rem;
        }

        & .new{
            padding: 2px 6px;
            font-size: .9rem;
        }
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

export const ColorContainer = styled.div`
    border-bottom: 1px solid #dadada;
    padding: 10px 0;
`;

export const Colors = styled.div`
    padding: 8px 0;
    display: flex;
    align-items: center;
`;

interface ColorProps {
    color: string
}

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

export const SizeContainer = styled.div`
    border-bottom: 1px solid #dadada;
    padding: 10px 0;
    margin-bottom: 10px;
`;

export const Sizes = styled.div`
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

export const BuyPrice = styled.div`
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

    & i {
        font-size: 1.4rem;
        margin-right: 1px;
    }

    @media (max-width: 490px){
        & h1{
            font-size: 1.5rem;
        }

        & i{
            font-size: .9rem;
        }
    }
`;