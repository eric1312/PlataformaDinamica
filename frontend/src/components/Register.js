import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importa el hook useAuth

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const { register } = useAuth(); // Usa el hook useAuth para acceder a la función register

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(name, email, password, passwordConfirmation); // Llama a la función register del contexto
            alert('Registro exitoso');
        } catch (error) {
            alert('Error en el registro');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Confirmar Contraseña"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
            />
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default Register;