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
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "title"
    "description"
    "date"
    "time"
    "location"
    "category"
    "picture"
    'priority';

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "title location"
            "description category"
            "description picture"
            "date priority"
            "time .";
        column-gap: 25px;
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        grid-template-areas: 
            "title date category"
            "description time picture"
            "description location priority";
        column-gap: 25px;
    }
`