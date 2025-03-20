import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Asegúrate de que AuthContext esté configurado

const PrivateRoutes = ({ role }) => {
    const { token, user } = useContext(AuthContext); // Obtén el token y el usuario del contexto de autenticación

    // Si no hay token, redirige al login
    if (!token) return <Navigate to="/login" />;

    // Si se requiere un rol específico y el usuario no lo tiene, redirige al dashboard
    if (role && user.role !== role) return <Navigate to="/dashboard" />;

    // Si todo está bien, renderiza las rutas hijas
    return <Outlet />;
};

export default PrivateRoutes;