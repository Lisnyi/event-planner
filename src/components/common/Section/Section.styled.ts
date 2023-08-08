import styled from "styled-components";

export const Box = styled.section`
    height: 100%;
    width: 320px;
    margin: 0 auto;
    padding: 0 24px;

    @media (min-width: 768px) {
        width: 768px;
        padding: 0 40px;
    }

    @media (min-width: 1440px) {
        width: 1440px;
        padding: 0 80px;
    }
`