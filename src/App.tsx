import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";


function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn>Hello</StyledBtn>
            </Box>
        </div>
    );
}

export default App;

// a:hover {
//
// }

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }
    
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`