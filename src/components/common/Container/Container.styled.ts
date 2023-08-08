import styled from "styled-components";
import bg from '../../../assets/images/bg.jpg'

export const Box = styled.div`
	min-width: 320px;
    min-height: calc(100vh - 168px);
    width: 100%;
    margin: 0 auto;
    padding: 42px 0;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: 768px) {
        min-height: calc(100vh - 92px);
        padding: 40px 0 125px 0;
    }

    @media (min-width: 1440px) {
        padding: 64px 0 193px 0;
    }
`