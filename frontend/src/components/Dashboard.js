import React from 'react';
import { useAuth } from '../context/AuthContext'; // Importa el hook useAuth

const Dashboard = () => {
    const { user, logout } = useAuth(); // Usa el hook useAuth para acceder al usuario y la función logout

    if (!user) {
        return <p>No tienes acceso a esta página. Por favor, inicia sesión.</p>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-600 mt-6">Dashboard</h2>
            <p className="text-lg mt-2">Hola, {user.name}!</p>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
                onClick={logout}
            >
                Cerrar sesión
            </button>
        </div>
    );
};

export default Dashboard;