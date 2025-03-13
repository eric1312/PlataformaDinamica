import React, { useEffect, useState } from 'react';
import AdminService from '../api/adminService';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [systems, setSystems] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedSystem, setSelectedSystem] = useState(null);
    const [loading, setLoading] = useState(true);

    // Obtener usuarios y sistemas al cargar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersData = await AdminService.getUsers();
                const systemsData = await AdminService.getSystems();
                setUsers(usersData);
                setSystems(systemsData);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Asignar un sistema a un usuario
    const handleAssignSystem = async () => {
        if (!selectedUser || !selectedSystem) {
            alert('Selecciona un usuario y un sistema');
            return;
        }

        try {
            const message = await AdminService.assignSystemToUser(selectedUser, selectedSystem);
            alert(message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Remover un sistema de un usuario
    const handleRemoveSystem = async () => {
        if (!selectedUser || !selectedSystem) {
            alert('Selecciona un usuario y un sistema');
            return;
        }

        try {
            const message = await AdminService.removeSystemFromUser(selectedUser, selectedSystem);
            alert(message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h1>Panel de Administración</h1>

            <div>
                <h2>Usuarios</h2>
                <select onChange={(e) => setSelectedUser(e.target.value)}>
                    <option value="">Selecciona un usuario</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h2>Sistemas</h2>
                <select onChange={(e) => setSelectedSystem(e.target.value)}>
                    <option value="">Selecciona un sistema</option>
                    {systems.map((system) => (
                        <option key={system.id} value={system.id}>
                            {system.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <button onClick={handleAssignSystem}>Asignar Sistema</button>
                <button onClick={handleRemoveSystem}>Remover Sistema</button>
            </div>
        </div>
    );
};

export default AdminPanel;