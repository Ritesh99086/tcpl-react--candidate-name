import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Pages/Login';
import Signup from './component/Pages/Signup';
import DashboardPage from './component/Pages/DashboardPage';
import Users from './component/Dashboard/User';
import Products from './component/Dashboard/Products';
import Orders from './component/Dashboard/Orders';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route exact path="/" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
