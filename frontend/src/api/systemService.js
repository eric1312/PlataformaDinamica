import axios from 'axios';

const API_URL = 'http://tu-backend-laravel.test/api';

class SystemService {
    // Método para obtener los sistemas del usuario autenticado
    static async getUserSystems() {
        try {
            const response = await axios.get(`${API_URL}/user-systems`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Envía el token de autenticación
                },
            });
            return response.data.systems;
        } catch (error) {
            console.error('Error al obtener los sistemas:', error);
            throw error;
        }
    }
}

export default SystemService;