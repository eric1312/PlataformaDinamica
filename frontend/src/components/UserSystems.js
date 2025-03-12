import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserSystems() {
    const [systems, setSystems] = useState([]);

    useEffect(() => {
        axios.get('/api/user-systems')
            .then(response => {
                setSystems(response.data);
            })
            .catch(error => {
                console.error('Error fetching user systems:', error);
            });
    }, []);

    return (
        <div>
            <h2>Sistemas del Usuario</h2>
            <ul>
                {systems.map(system => (
                    <li key={system.id}>{system.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserSystems;