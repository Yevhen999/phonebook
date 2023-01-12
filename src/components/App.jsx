import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};
