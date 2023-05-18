import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;  
        padding: 0; 
        box-sizing: border-box; 

        font-family: 'Roboto', sans-serif;
        color: #fff;
    }

    html {
        background: #101213;
    }

    body {
        background: radial-gradient(at bottom right, #89f96d, #101213, #101213);
        min-height: 100vh;

        @media (max-width: 768px) {
            background: linear-gradient(to bottom right, #101213, #101213, #89f96d);
            background: -webkit-linear-gradient(to bottom, #101213, #101213, #89f96d);
        }
    }
`;

export default GlobalStyles;
