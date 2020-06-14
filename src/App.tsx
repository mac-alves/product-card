/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback } from 'react';
import { MouseEvent } from 'react';

import BlueImg from './assets/img/blue.png';
import RedImg from './assets/img/red.png';
import GreenImg from './assets/img/green.png';
import OrangeImg from './assets/img/orange.png';
import BlackImg from './assets/img/black.png';
import LogoImg from './assets/img/logo.png';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
import { 
    Container, 
    Card, 
    ShoeBackground, 
    Gradients,
    Gradient,
    Nike,
    Logo,
    Share,
    Shoe,
    Info,
    ShoeName,
    Description,
    Title,
    Text,
    ColorContainer,
    Colors,
    Color,
    SizeContainer,
    Sizes,
    Size,
    BuyPrice,
    Buy,
    Price
} from './styles';

import black from './styles/colors/black';
import blue from './styles/colors/blue';
import green from './styles/colors/green';
import orange from './styles/colors/orange';
import red from './styles/colors/red';

interface KonvaMouseEvent extends MouseEvent<HTMLElement> {
    target: EventTarget
}

interface ThemeColorsProductProps {
    black: DefaultTheme;
    blue: DefaultTheme;
    green: DefaultTheme;
    orange: DefaultTheme;
    red: DefaultTheme;
}

const ThemeColorsProduct: ThemeColorsProductProps = { black, blue, green, orange, red }

const SizesProducts = [7, 8, 9, 10, 11];

interface ProductsProps {
    key: keyof ThemeColorsProductProps;
    color: string;
    img: string;
    gradient: Array<string>;
}

const Products: Array<ProductsProps> = [
    { key: "blue", color: blue.color, img: BlueImg, gradient: blue.img.colorGradient}, 
    { key: "red", color: red.color, img: RedImg, gradient: red.img.colorGradient}, 
    { key: "green", color: green.color, img: GreenImg, gradient: green.img.colorGradient}, 
    { key: "orange", color: orange.color, img: OrangeImg, gradient: orange.img.colorGradient},
    { key: "black", color: black.color, img: BlackImg, gradient: black.img.colorGradient}, 
];

const App: React.FC = () => {
    const [ theme, setTheme ] = useState<DefaultTheme>(blue);
    const [ sizeSelected, setSizeSelected ] = useState(7);
    const [ colorSelected, setColorSelected ] = useState("blue");
    const [ prevColorSelected, setPrevColorSelected ] = useState("blue");
    const [ animationEnd, setAnimationEnd ] = useState(true);

    function handleColor(key: keyof ThemeColorsProductProps){
        if (!animationEnd) return;
        
        setTheme(ThemeColorsProduct[key]);
        setPrevColorSelected(colorSelected);
        setColorSelected(key);
        setAnimationEnd(false);
    }

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
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Card>
                    <ShoeBackground>
                        <Gradients>
                            { Products.map((product, key) => (
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
                        <Share href="#"><i className="fas fa-share-alt"></i></Share>
                        <div>
                            { Products.map((product, key) => (
                                <Shoe 
                                    key={key}
                                    src={product.img} 
                                    alt=""
                                    className={(colorSelected === product.key) ? "active" : ""}/>
                            )) }
                        </div>
                    </ShoeBackground>
                    <Info>
                        <ShoeName>
                            <div>
                                <h1 className="big">Nike Zoom KD 12</h1>
                                <span className="new">new</span>
                            </div>
                            <h3 className="small">Men's running shoes</h3>
                        </ShoeName>
                        <Description>
                            <Title>Product Info</Title>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</Text>
                        </Description>
                        <ColorContainer>
                            <Title>Color</Title>
                            <Colors>
                                { Products.map((product, key) => (
                                    <Color 
                                        key={key}
                                        onClick={() => handleColor(product.key)}
                                        className={(colorSelected === product.key) ? "active" : ""}
                                        color={product.color}
                                    ></Color>
                                )) }
                            </Colors>
                        </ColorContainer>
                        <SizeContainer>
                            <Title>size</Title>
                            <Sizes>
                                { SizesProducts.map((size, key) => (
                                    <Size 
                                        key={key} 
                                        onClick={() => setSizeSelected(size)} 
                                        className={(sizeSelected === size) ? "active" : ""}
                                    >{size}</Size>
                                )) }
                            </Sizes>
                        </SizeContainer>
                        <BuyPrice>
                            <Buy href="#"><i className="fas fa-shopping-cart"></i>Add to card</Buy>
                            <Price>
                                <i className="fas fa-dollar-sign"></i>
                                <h1>189.99</h1>
                            </Price>
                        </BuyPrice>
                    </Info>
                </Card>
            </Container>
        </ThemeProvider>
    );
}

export default App; 
