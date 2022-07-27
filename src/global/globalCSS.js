import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
    body{
        background-color: rgb(230,232,250, 0.4);
        color: rgb(0,0,0,0.8);
        margin: 0;
        font-family: roboto, sans-serif;
        width: 100w;
    }

    a, p{
        text-decoration: none;
    }
`;

export default GlobalCSS;
