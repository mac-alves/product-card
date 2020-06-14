import React, { useCallback } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { Container, Gradients, Gradient, Nike, Logo, Share, Shoe } from './styles';
import LogoImg from '../../assets/img/logo.png';
import { ProductsProps, ThemeColorsProductProps } from '../../utils/interfaces';

interface Props {
    products:  Array<ProductsProps>;
    colorSelected: keyof ThemeColorsProductProps;
    prevColorSelected: keyof ThemeColorsProductProps;
    setAnimationEnd(arg0: boolean): void;
}

const ShoeBackground: React.FC<Props> = ({ products, colorSelected, prevColorSelected, setAnimationEnd }) => {

    const selectClassGradient = useCallback((key: keyof ThemeColorsProductProps) => {
        let className = "";
        
        if (colorSelected === key && prevColorSelected === key) {
            className = "first secod";
        } else if (colorSelected === key && prevColorSelected !== key){
            className = "first";
        } else if (colorSelected !== key && prevColorSelected === key) {
            className = "secod";
        }

        return className;
    }, [colorSelected, prevColorSelected]);

    return (
        <Container>
            <Gradients>
                { products.map((product, key) => (
                    <Gradient
                        key={key}
                        className={selectClassGradient(product.key)}
                        gradient={product.gradient}
                        onAnimationEnd={() => setAnimationEnd(true)}
                    ></Gradient>
                )) }
            </Gradients>
            <Nike>nike</Nike>
            <Logo src={LogoImg} alt=""/>
            <Share href="#">
                <FaShareAlt className="icon" />
            </Share>
            <div>
                { products.map((product, key) => (
                    <Shoe 
                        key={key}
                        src={product.img} 
                        alt=""
                        className={(colorSelected === product.key) ? "active" : ""}/>
                )) }
            </div>
        </Container>
    );
}

export default ShoeBackground;