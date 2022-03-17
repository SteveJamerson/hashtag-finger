import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --white: #ffffff;
        --black: #000000;
        --gray-100: #dedede;
        --gray-900: #707070;
        --primary: var(--gray-900);
        --secondary: var(--white);
        --light: var(--gray-100);
        --dark: var(--black);
        --error: red;
        --success: green;
        --color-body: var(--white);
        --color-error: var(--error);
        --color-success: var(--success);
        --font-size-default: 16px;
        --font-size-h1: 2.25rem;
        --font-size-h2: 1.875rem;
        --font-size-h3: 1.25rem;
        --font-size-h4: 1.2rem;
        --font-size-h5: 1.1rem;
        --font-size-h6: 1rem;
        --font-size-body: .875rem;
        --font-size-small: .8rem;
        --font-size-smaller: .75rem;
    }
    * {
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    }
    html {
    overflow-x:hidden;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    }
    body {
    margin: 0;
    font-size: var(--font-size-body);
    font-weight: 400;
    font-family: inherit;
    line-height: calc(1rem * 2);
    color: var(--white);
    background-color: #1e3e7b;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    h6,
    h5,
    h4,
    h3,
    h2,
    h1 {
        font-family: inherit;
        font-weight: 400;
        font-size: var(--size);
        margin-top: 0;
        margin-bottom: 0.75rem;
        line-height: calc(var(--size) * 1.25);
    }
    h1 {
    --size: var(--font-size-h1);
    }
    h2 {
    --size: var(--font-size-h2);
    }
    h3 {
    --size: var(--font-size-h3);
    }
    h4 {
    --size: var(--font-size-h4);
    }
    h5 {
    --size: var(--font-size-h5);
    }
    h6 {
    --size: var(--font-size-h6);
    }
    p {
        --size: var(--font-size-body);
        margin-top: 0;
        margin-bottom: 0.75rem;
        font-weight: 300;
        line-height: calc(var(--size) * 2);
    }
    a {
        --size: var(--font-size-body);
        font-size: var(--size);
    }
`;
