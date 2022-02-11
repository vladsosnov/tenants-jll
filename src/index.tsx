import { AppRouter } from 'AppRouter';
import React from 'react';
import { render } from 'react-dom';
import { reportWebVitals } from './reportWebVitals';

render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
