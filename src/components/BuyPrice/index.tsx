import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { Container, Buy, Price } from './styles';

interface Props {
    value: string;
}

const BuyPrice: React.FC<Props> = ({ value }) => {
    return (
        <Container>
            <Buy href="#"><i className="fas fa-shopping-cart"></i>Add to card</Buy>
            <Price>
                <FaDollarSign className="icon"/>
                <h1>{value}</h1>
            </Price>
        </Container>
    );
}

export default BuyPrice; 