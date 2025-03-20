import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSystems from './components/UserSystems';
import AdminPanel from './components/AdminPanel';
import PrivateRoutes from './routes/PrivateRoutes'; // Importa el componente PrivateRoutes
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta pública */}
                <Route path="/login" element={<Login />} />

                {/* Ruta protegida para usuarios autenticados */}
                <Route element={<PrivateRoutes />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                {/* Ruta protegida para administradores */}
                <Route element={<PrivateRoutes role="admin" />}>
                    <Route path="/admin" element={<AdminPanel />} />
                </Route>

                {/* Ruta pública adicional */}
                <Route path="/user-systems" element={<UserSystems />} />
            </Routes>
        </Router>
    );
}

export default App;
