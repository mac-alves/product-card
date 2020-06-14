import { DefaultTheme } from 'styled-components';

export interface ThemeColorsProductProps {
    black: DefaultTheme;
    blue: DefaultTheme;
    green: DefaultTheme;
    orange: DefaultTheme;
    red: DefaultTheme;
}

export interface ProductsProps {
    key: keyof ThemeColorsProductProps;
    color: string;
    img: string;
    gradient: Array<string>;
}

export interface DataSet {
    title: string;
    subtitle: string;
    description: string;
    value: string;
    isNew: boolean;
    products: {
        models: Array<ProductsProps>,
        sizes: Array<number>
    }
}