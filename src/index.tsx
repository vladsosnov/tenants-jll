import { AppRouter } from 'AppRouter';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { reportWebVitals } from './reportWebVitals';

render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
