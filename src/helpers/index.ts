import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Tenant page', route);
  return render(ui, { wrapper: BrowserRouter });
};
