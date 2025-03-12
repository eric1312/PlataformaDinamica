import axios from 'axios'; // Asegúrate de tener axios instalado

// Configura la URL base de tu API backend
const API_URL = 'http://tu-backend-laravel.test/api';

class AuthService {
    // Método para iniciar sesión
    login(user) {
        return axios
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
        return axios.post(`${API_URL}/register`, {
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

export default new AuthService(); // Exporta una instancia del servicio