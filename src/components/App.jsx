import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
