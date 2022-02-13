import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tenants, TenantDetails, NotFound } from 'pages';
import { Header } from './components/Shared';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Tenants />} />
        <Route path="/details/:tenantId" element={<TenantDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
