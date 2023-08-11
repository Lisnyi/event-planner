import { createGlobalStyle } from 'styled-components';
import { PoppinsMedium, PoppinsSemiBold, PoppinsRegular, PoppinsLight, AlataRegular } from '../assets';
 
export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "PoppinsLight";
        src: local("PoppinsLight"),
            url(${PoppinsLight}) format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: "PoppinsMedium";
        src: local("PoppinsMedium"),
            url(${PoppinsMedium}) format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: "PoppinsSemiBold";
        src: local("PoppinsSemiBold"),
            url(${PoppinsSemiBold}) format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: "PoppinsRegular";
        src: local("PoppinsRegular"),
            url(${PoppinsRegular}) format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: "AlataRegular";
        src: local("AlataRegular"),
            url(${AlataRegular}) format("truetype");
        font-display: swap;
    }

    body {
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'PoppinsRegular', sans-serif;
        font-size: 14px;
    }

    h1,
    h2,
    h3,
    h4,
    p {
        margin: 0;
    }

    input,
    div,
    section,
    ul {
        box-sizing: border-box;
    }
`