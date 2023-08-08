import styled from "styled-components";
import { Form } from "formik";

export const CustomForm = styled(Form)`
    margin: 0 auto;
    padding: 40px 16px;
    background-color: white;
    
    @media (min-width: 768px) {
        padding: 40px 24px;
    }

    @media (min-width: 1440px) {
        padding: 40px 40px 24px 40px;
    }
`

export const Wrapper = styled.div`
    display: grid;
    width: 100%;
    gap: 20px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 25px;
    }
`