import React from 'react';

import { Container, Title, Content, Size } from './styles';

interface Props {
    sizes: Array<number>;
    sizeSelected: number;
    setSizeSelected(value: number): void;
}

const Sizes: React.FC<Props> = ({ sizeSelected, setSizeSelected, sizes }) => {
    return (
        <Container>
            <Title>size</Title>
            <Content>
                { sizes.map((size, key) => (
                    <Size 
                        key={key} 
                        onClick={() => setSizeSelected(size)} 
                        className={(sizeSelected === size) ? "active" : ""}
                    >{size}</Size>
                )) }
            </Content>
        </Container>
    );
}

export default Sizes; 