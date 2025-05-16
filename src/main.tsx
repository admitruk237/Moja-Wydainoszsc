import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './store/index.ts';
import App from './App.tsx';
import { Provider } from 'react-redux';
import './index.css';
import './firebase.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
