import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tenants, TenantProfile, NotFound } from 'pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tenants />} />
        <Route path="/tenant-profile/:tenantId" element={<TenantProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
