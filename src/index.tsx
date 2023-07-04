import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { GlobalStyles } from './components/globalStyles';
import Header from './components/header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Header/>
    <App />
  </React.StrictMode>
);
