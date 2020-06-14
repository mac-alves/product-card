/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import ShoeBackground from './components/ShoeBackground';
import ShoeName from './components/ShoeName';
import Colors from './components/Colors';
import Sizes from './components/Sizes';
import BuyPrice from './components/BuyPrice';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
import { 
    Container, 
    Card,
    Info,
    Description,
    Title,
    Text,
} from './styles';

import { ThemeColorsProductProps } from './utils/interfaces';
import { data, themeColorsProduct } from './utils/data';

const App: React.FC = () => {
    const [ theme, setTheme ] = useState<DefaultTheme>(themeColorsProduct["blue"]);
    const [ sizeSelected, setSizeSelected ] = useState(data.products.sizes[0]);
    const [ colorSelected, setColorSelected ] = useState<keyof ThemeColorsProductProps>("blue");
    const [ prevColorSelected, setPrevColorSelected ] = useState<keyof ThemeColorsProductProps>("blue");
    const [ animationEnd, setAnimationEnd ] = useState(true);

    function handleColor(key: keyof ThemeColorsProductProps){
        if (!animationEnd) return;
        
        setTheme(themeColorsProduct[key]);
        setPrevColorSelected(colorSelected);
        setColorSelected(key);
        setAnimationEnd(false);
    }

    return (
        <ThemeProvider theme={theme}> 
            <Container>
                <GlobalStyle />
                <Card>
                    <ShoeBackground 
                        products={data.products.models} 
                        colorSelected={colorSelected} 
                        setAnimationEnd={setAnimationEnd} 
                        prevColorSelected={prevColorSelected}/>

                    <Info>
                        <ShoeName  
                            isNew={data.isNew} 
                            title={data.title}
                            subtitle={data.subtitle} />

                        <Description>
                            <Title>PRODUCT INFO</Title>
                            <Text>{data.description}</Text>
                        </Description>
                        
                        <Colors 
                            models={data.products.models}
                            colorSelected={colorSelected} 
                            handleColor={handleColor} />

                        <Sizes 
                            sizes={data.products.sizes}
                            sizeSelected={sizeSelected} 
                            setSizeSelected={setSizeSelected} />

                        <BuyPrice value={data.value}/>
                    </Info>
                </Card>
            </Container>
        </ThemeProvider>
    );
}

export default App; 
