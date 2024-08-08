import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --nightBlack-color: #1C1D24;  
    --white-color: #ffffff; 
    --deepBlue-color: #172135;    
    --linen-color: #f8f5f2; 
    --lightIndigo-color: #efefff;    
    --blue-color: #d6e2fc;
    --oliveGreen-color: #222b28;
    --green-color: #e6f5f0;
    --coral-color: #ff5a65;
    --coralHover-color: #db4550;
    --coralFocus-color: #ffa7ae;
    --coralOverlay-color: rgba(255, 127, 80, 0.3);
    --yellow-color: #eff258;
    --pink-color: #f7bcf1;
    --indigo-color: #b3b2fb;
    // Sizes
    --smallContainer-width: 50rem;
    --normalContainer-width: 90rem;
    // Borders
    --small-borderRadius: .5rem;
    --normal-borderRadius: 1rem;
    --large-borderRadius: 2rem;
    // Fonts
    --default-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    // Effects
    --fast-transition: all 0.15s ease;
    --normal-transition: all 0.2s ease;
    --slow-transition: all 0.3s ease;
  }

  body {
    margin: 0;
    font-family: var(--default-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
