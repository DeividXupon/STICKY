import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { GlobalStyles } from './components/globalStyles';
import Header from './components/header';
import LocalStoragerProvaider from './context/localStoragerProvaider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />

    <LocalStoragerProvaider>
      <App />
    </LocalStoragerProvaider>
    
  </React.StrictMode>
);
