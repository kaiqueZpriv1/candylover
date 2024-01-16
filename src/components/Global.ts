import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* Titulos - fontes grandes */
    h1, h3{
        font-family: 'Open Sans', sans-serif;
    }
    /* Paragrafos */
    p, button, a{
        text-decoration: none;
        font-family: 'Raleway', sans-serif;
    }
    /* para texto decorativos */
    span{
        font-family: 'Caveat', cursive;
    }
`;
