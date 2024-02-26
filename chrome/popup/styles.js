// Import the required components from the Lit Library 
import { css, unsafeCSS } from '../scripts/lit/lit-core.min.js';

/**
 * The object to access the API functions of the browser.
 * @constant
 * @type {{runtime: object, tabs: object, i18n: object}} BrowserAPI
 */
const brw = chrome;

export const sharedStyles = css`
    div {
        margin: 20px auto;
    }

    a:link,
    a:visited {
        color: inherit;
    }

    h2 {
        margin: 0.5em 0;
    }

    * {
    font-family: "Lato", sans-serif;
}

`;

export const patternLinkStyles = css`
    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const actionButtonStyles = css`
    div span {
        color: #217284;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }

    div span:hover {
        text-decoration: underline;
    }

    @media (prefers-color-scheme: dark) {
        div {
            color: #33bfde;
        }
    }
`;

export const patternsListStyles = css`
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 10px 0;
    }
`;

