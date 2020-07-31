import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--text);
    }

    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }

    *, button, input{
        border: 0;
        background: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html{
        background: var(--primary);
    }

    :root{
        --primary: #ffffff; /**background color */
        --secondary: #F5F5F5;
        --outline: #F3F3F3;
        --nubank: #961EC5;
        --link-hover-light: #E7B6FF;
        --link-hover: #a41ec5;
        --text: #111111;
        --white: #D9D9D9;
        --gray: #7A7A7A;
    }
`;
