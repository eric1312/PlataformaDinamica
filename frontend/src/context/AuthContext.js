import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from '../api/auth'; // Importa el servicio de autenticación

// Crear el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para el usuario autenticado
    const [loading, setLoading] = useState(true); // Estado para manejar la carga inicial

    // Verificar si hay un usuario autenticado al cargar la aplicación
    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        }
        setLoading(false);
    }, []);

    // Función para iniciar sesión
    const login = async (email, password) => {
        try {
            const response = await AuthService.login({ email, password });
            setUser(response.user); // Actualiza el estado del usuario
            return response;
        } catch (error) {
            throw error;
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        AuthService.logout();
        setUser(null); // Limpia el estado del usuario
    };

    // Función para registrarse
    const register = async (name, email, password, password_confirmation) => {
        try {
            const response = await AuthService.register({ name, email, password, password_confirmation });
            setUser(response.user); // Actualiza el estado del usuario
            return response;
        } catch (error) {
            throw error;
        }
    };

    // Valores que estarán disponibles en el contexto
    const value = {
        user,
        login,
        logout,
        register,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};