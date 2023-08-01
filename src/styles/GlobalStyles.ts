import { createGlobalStyle } from 'styled-components';
import { PoppinsMedium, PoppinsSemiBold, PoppinsRegular } from '../assets';
 
export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "PoppinsMedium";
        src: local("PoppinsMedium"),
            url(${PoppinsMedium}) format("truetype");
    }

    @font-face {
        font-family: "PoppinsSemiBold";
        src: local("PoppinsSemiBold"),
            url(${PoppinsSemiBold}) format("truetype");
    }
    @font-face {
        font-family: "PoppinsRegular";
        src: local("PoppinsRegular"),
            url(${PoppinsRegular}) format("truetype");
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'PoppinsRegular', sans-serif;
        font-size: ${p => p.theme.fontSizes.regular}
    }

    h1,
    h2,
    h3,
    h4,
    p {
        margin: 0;
    }
`