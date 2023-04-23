import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;  
        padding: 0; 
        box-sizing: border-box; 

        font-family: 'Roboto', sans-serif;
        color: #fff;
    }

    body {
        background: #101213;
        min-height: 100vh;
    }
`;

export default GlobalStyles;
