import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tenants, TenantDetails, NotFound } from 'pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tenants />} />
        <Route path="/details/:tenantId" element={<TenantDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
