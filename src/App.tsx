/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import './App.css';

import Blue from './assets/img/blue.png';
import Red from './assets/img/red.png';
import Green from './assets/img/green.png';
import Orange from './assets/img/orange.png';
import Black from './assets/img/black.png';
import Logo from './assets/img/logo.png';

interface KonvaTextEventTarget extends EventTarget {
    index: number
}

interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
    target: KonvaTextEventTarget
}

const App: React.FC = () => {
    const sizes = useRef<HTMLDivElement>(null);
    const colors = useRef<HTMLDivElement>(null);
    const shoes = useRef<HTMLDivElement>(null);
    const gradients = useRef<HTMLDivElement>(null);
    const shoeBg = useRef<HTMLDivElement>(null);

    let prevColor: any = 'blue';
    let animationEnd: boolean = true;

    function changeSize(event: KonvaMouseEvent) {
        sizes.current?.querySelectorAll('.size')
                      .forEach(size => size.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }

    function changeColor(event: KonvaMouseEvent){
        if (!animationEnd) return;

        let primary = event.currentTarget.dataset.primary;
        let color = event.currentTarget.getAttribute('color');  
        let shoe = shoes.current?.querySelector(`.shoe[color="${color}"]`);
        let gradient = gradients.current?.querySelector(`.gradient[color="${color}"]`);
        let prevGradient = gradients.current?.querySelector(`.gradient[color="${prevColor}"]`);

        colors.current?.querySelectorAll('.color')
             .forEach(color => color.classList.remove('active'));
        
        event.currentTarget.classList.add('active');
        
        document.documentElement.style.setProperty('--primary', (primary) ? primary : '#2175f5');
        
        shoes.current?.querySelectorAll('.shoe')
             .forEach(shoe => shoe.classList.remove('show'));
        shoe?.classList.add('show');

        gradients.current?.querySelectorAll('.gradient')
             .forEach(gradient => gradient.classList.remove('first', 'secod'));
        gradient?.classList.add('first');
        prevGradient?.classList.add('secod');
        
        prevColor = color;
        animationEnd = false;
        gradient?.addEventListener('animationend', () => {
            animationEnd = true;
        });
    }

    return (
        <div className="container">
            <div className="card">
                <div className="shoeBackground" ref={shoeBg}>
                    <div className="gradients" ref={gradients}>
                        <div className="gradient first" color="blue"></div>
                        <div className="gradient" color="red"></div>
                        <div className="gradient" color="green"></div>
                        <div className="gradient" color="orange"></div>
                        <div className="gradient" color="black"></div>
                    </div>
                    <h1 className="nike">nike</h1>
                    <img src={Logo} alt="" className="logo"/>
                    <a href="#" className="share"><i className="fas fa-share-alt"></i></a>
                    <div ref={shoes}>
                        <img src={Blue} alt="" className="shoe show" color="blue"/>
                        <img src={Red} alt="" className="shoe" color="red"/>
                        <img src={Green} alt="" className="shoe" color="green"/>
                        <img src={Orange} alt="" className="shoe" color="orange"/>
                        <img src={Black} alt="" className="shoe" color="black"/>
                    </div>
                </div>
                <div className="info">
                    <div className="shoeName">
                        <div>
                            <h1 className="big">Nike Zoom KD 12</h1>
                            <span className="new">new</span>
                        </div>
                        <h3 className="small">Men's running shoes</h3>
                    </div>
                    <div className="description">
                        <h3 className="title">Product Info</h3>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                    <div className="color-container">
                        <h3 className="title">Color</h3>
                        <div className="colors" ref={colors}>
                            <span onClick={changeColor} className="color active" data-primary="#2175f5" color="blue"></span>
                            <span onClick={changeColor} className="color" data-primary="#f84848" color="red"></span>
                            <span onClick={changeColor} className="color" data-primary="#29b864" color="green"></span>
                            <span onClick={changeColor} className="color" data-primary="#ff5521" color="orange"></span>
                            <span onClick={changeColor} className="color" data-primary="#444" color="black"></span>
                        </div>
                    </div>
                    <div className="size-container">
                        <h3 className="title">size</h3>
                        <div className="sizes" ref={sizes}>
                            <span onClick={changeSize} className="size active">7</span>
                            <span onClick={changeSize} className="size">8</span>
                            <span onClick={changeSize} className="size">9</span>
                            <span onClick={changeSize} className="size">10</span>
                            <span onClick={changeSize} className="size">11</span>
                        </div>
                    </div>
                    <div className="buy-price">
                        <a href="#" className="buy"><i className="fas fa-shopping-cart"></i>Add to card</a>
                        <div className="price">
                            <i className="fas fa-dollar-sign"></i>
                            <h1>189.99</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App; 
