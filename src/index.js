import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './style/GlobalStyle';
import styled from 'styled-components';
import porckatBall2 from "./image/porckatBall2.png";

const Gs = styled.div`
  cursor: url(${porckatBall2}), auto;
  height: 100%;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gs>
      <App />
    </Gs>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
