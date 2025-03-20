import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Ruta pública */}
            <Route path="/login" element={<Login />} />

            {/* Rutas protegidas */}
            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Rutas protegidas para administradores */}
            <Route element={<PrivateRoutes role="admin" />}>
                <Route path="/admin" element={<AdminPanel />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;