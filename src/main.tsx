import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './store/index.ts';
import App from './App.tsx';
import { Provider } from 'react-redux';
import './index.css';
import './firebase.ts';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
