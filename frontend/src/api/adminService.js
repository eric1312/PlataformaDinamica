import axios from 'axios';

const API_URL = 'http://tu-backend-laravel.test/api';

class AdminService {
    // Obtener todos los usuarios
    static async getUsers() {
        try {
            const response = await axios.get(`${API_URL}/admin/users`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return response.data.users;
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw error;
        }
    }

    // Obtener todos los sistemas
    static async getSystems() {
        try {
            const response = await axios.get(`${API_URL}/admin/systems`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return response.data.systems;
        } catch (error) {
            console.error('Error al obtener sistemas:', error);
            throw error;
        }
    }

    // Asignar un sistema a un usuario
    static async assignSystemToUser(userId, systemId) {
        try {
            const response = await axios.post(
                `${API_URL}/admin/assign-system`,
                { user_id: userId, system_id: systemId },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            return response.data.message;
        } catch (error) {
            console.error('Error al asignar sistema:', error);
            throw error;
        }
    }

    // Remover un sistema de un usuario
    static async removeSystemFromUser(userId, systemId) {
        try {
            const response = await axios.post(
                `${API_URL}/admin/remove-system`,
                { user_id: userId, system_id: systemId },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            return response.data.message;
        } catch (error) {
            console.error('Error al remover sistema:', error);
            throw error;
        }
    }
}

export default AdminService;