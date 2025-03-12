import React from 'react';
import { useAuth } from '../context/AuthContext'; // Importa el hook useAuth

const Navbar = () => {
    const { user, logout } = useAuth(); // Usa el hook useAuth para acceder al usuario y la función logout

    return (
        <nav>
            {user ? (
                <>
                    <span>Bienvenido, {user.name}</span>
                    <button onClick={logout}>Cerrar Sesión</button>
                </>
            ) : (
                <span>Por favor, inicia sesión</span>
            )}
        </nav>
    );
};

export default Navbar;