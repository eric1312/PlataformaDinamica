import React from 'react';
import { useAuth } from '../context/AuthContext'; // Importa el hook useAuth

const Dashboard = () => {
    const { user } = useAuth(); // Usa el hook useAuth para acceder al usuario

    if (!user) {
        return <p>No tienes acceso a esta página. Por favor, inicia sesión.</p>;
    }

    return (
        <div>
            <h1>Bienvenido al Dashboard</h1>
            <p>Hola, {user.name}!</p>
        </div>
    );
};

export default Dashboard;