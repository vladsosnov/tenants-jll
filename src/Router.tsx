import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from './NotFound';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={}></Route>
        <Route path="/" element={}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
