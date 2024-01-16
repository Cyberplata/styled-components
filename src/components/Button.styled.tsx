import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
    border: none;
    background-color: #fc4343;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #6f19f1;
    }

    &:last-child {
        background-color: #75ef77;
    }
`

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #fae806;
    color: #706f6f;

    &:hover {
        animation: ${MyAnimation} 2s infinite;
    }
`