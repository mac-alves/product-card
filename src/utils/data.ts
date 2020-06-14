import { ThemeColorsProductProps, DataSet } from './interfaces';

import BlueImg from '../assets/img/blue.png';
import RedImg from '../assets/img/red.png';
import GreenImg from '../assets/img/green.png';
import OrangeImg from '../assets/img/orange.png';
import BlackImg from '../assets/img/black.png';

import black from '../styles/colors/black';
import blue from '../styles/colors/blue';
import green from '../styles/colors/green';
import orange from '../styles/colors/orange';
import red from '../styles/colors/red';

export const data: DataSet = {
    title: 'Nike Zoom KD 12',
    subtitle: "Men's running shoes",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    value: '189,99',
    isNew: true,
    products: {
        models: [
            { key: "blue", color: blue.color, img: BlueImg, gradient: blue.img.colorGradient}, 
            { key: "red", color: red.color, img: RedImg, gradient: red.img.colorGradient}, 
            { key: "green", color: green.color, img: GreenImg, gradient: green.img.colorGradient}, 
            { key: "orange", color: orange.color, img: OrangeImg, gradient: orange.img.colorGradient},
            { key: "black", color: black.color, img: BlackImg, gradient: black.img.colorGradient}, 
        ],
        sizes: [7, 8, 9, 10, 11]
    }
}

export const themeColorsProduct: ThemeColorsProductProps = { black, blue, green, orange, red }