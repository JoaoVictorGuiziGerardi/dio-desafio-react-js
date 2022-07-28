import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
    body{
        background-color: rgb(230,232,250, 0.4);
        color: rgb(0,0,0,0.8);
        margin: 0;
        font-family: Helvetica, sans-serif;
        width: 100w;
    }

    a{
        text-decoration: none;
        color: rgb(80,80,189);
    }

    a:hover{
        color: blue;
        cursor: pointer;
    }
`;

export default GlobalCSS;
