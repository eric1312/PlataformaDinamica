import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importa el hook useAuth

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Usa el hook useAuth para acceder a la función login

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password); // Llama a la función login del contexto
            alert('Login exitoso');
        } catch (error) {
            alert('Error en el login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;