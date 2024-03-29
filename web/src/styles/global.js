import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  *{
    margin:0;
    outline:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    background:#191920 url(${background}) no-repeat center top;
    background-size:cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  body,input,buton{
    font:14px Roboto, sans-serif;
  }

  #root{
    max-width:1020px;
    margin: 0 auto;
    padding:0 20 50px;
  }

  button{
    cursor:pointer;
  }

`;
