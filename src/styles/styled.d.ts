import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        color: string,
        img: {
            name: string,
            colorGradient: Array<string>
        }
    }
}