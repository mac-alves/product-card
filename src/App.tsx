import React from 'react';
import './App.css';

import Blue from './assets/img/blue.png';
import Red from './assets/img/red.png';
import Green from './assets/img/green.png';
import Orange from './assets/img/orange.png';
import Black from './assets/img/black.png';
import Logo from './assets/img/logo.png';

const App: React.FC = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="shoeBackground">
                    <div className="gradients">
                        <div className="gradient" color="blue"></div>
                        <div className="gradient" color="red"></div>
                        <div className="gradient" color="green"></div>
                        <div className="gradient" color="orange"></div>
                        <div className="gradient" color="black"></div>
                    </div>
                    <h1 className="nike">nike</h1>
                    <img src={Logo} alt="" className="logo"/>
                    <a href="#" className="share"><i className="fas fa-share-alt"></i></a>

                    <img src={Blue} alt="" className="shoe show" color="blue"/>
                    <img src={Red} alt="" className="shoe" color="red"/>
                    <img src={Green} alt="" className="shoe" color="green"/>
                    <img src={Orange} alt="" className="shoe" color="orange"/>
                    <img src={Black} alt="" className="shoe" color="black"/>
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
                        <div className="colors">
                            <span className="color active" color="blue"></span>
                            <span className="color" color="red"></span>
                            <span className="color" color="green"></span>
                            <span className="color" color="orange"></span>
                            <span className="color" color="black"></span>
                        </div>
                    </div>
                    <div className="size-container">
                        <h3 className="title">size</h3>
                        <div className="sizes">
                            <span className="size active">7</span>
                            <span className="size">8</span>
                            <span className="size">9</span>
                            <span className="size">10</span>
                            <span className="size">11</span>
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
