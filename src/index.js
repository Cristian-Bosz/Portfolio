import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './styles/intro.css';
import './styles/aboutMe.css';
import './styles/pastillas.css';
import './styles/projects.css';
import './styles/thorkey.css';
import './styles/blueocean.css';
import './styles/kyber.css';
import './styles/walletfy.css';
import './styles/bszStore.css';
import './styles/footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
