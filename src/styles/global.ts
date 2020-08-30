import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* justify-content: center; */
    /* align-items: center; */
  }

  body{
    background: #2C003E;
    -webkit-font-smoothing: antialiased
  }

  body, input, button, a {
    font: 16px Poppins, sans-serif;
    color: #fff;
  }
  #root {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px
  }

  button{
    cursor: pointer
  }
`;
