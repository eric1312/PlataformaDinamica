import axios from 'axios'; // Asegúrate de tener axios instalado

const instance = axios.create({
    baseURL: '/api',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

// Configura la URL base de tu API backend
const API_URL = 'http://tu-backend-laravel.test/api';

class AuthService {
    // Método para iniciar sesión
    login(user) {
        return instance
            .post(`${API_URL}/login`, {
                email: user.email,
                password: user.password,
            })
            .then(response => {
                // Si la respuesta incluye un token, lo guardamos en localStorage
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    // Método para cerrar sesión
    logout() {
        localStorage.removeItem('user'); // Elimina el usuario del localStorage
    }

    // Método para registrarse
    register(user) {
        return instance.post(`${API_URL}/register`, {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
        });
    }

    // Método para obtener el usuario autenticado
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

const authServiceInstance = new AuthService(); // Asigna la instancia a una variable

export default authServiceInstance; // Exporta la instancia del servicio