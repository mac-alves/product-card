import React from 'react';
import { ProductsProps, ThemeColorsProductProps } from '../../utils/interfaces';
import { Container, Title, Content, Color } from './styles';

interface Props {
    models: Array<ProductsProps>;
    colorSelected: keyof ThemeColorsProductProps;
    handleColor(key: keyof ThemeColorsProductProps): void;
}

const Colors: React.FC<Props> = ({ models, colorSelected, handleColor }) => {
    return (
        <Container>
            <Title>Color</Title>
            <Content>
                { models.map((product, key) => (
                    <Color 
                        key={key}
                        onClick={() => handleColor(product.key)}
                        className={(colorSelected === product.key) ? "active" : ""}
                        color={product.color}
                    ></Color>
                )) }
            </Content>
        </Container>
    );
}

export default Colors;