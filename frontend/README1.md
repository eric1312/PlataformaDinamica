# COMPONENTES 
El hook useAuth se usa en los componentes donde necesitas acceder al estado de autenticación o las funciones relacionadas.

No hay un archivo específico para el hook useAuth. Se importa y usa en los componentes que lo necesiten.

Ejemplos de componentes donde puedes usar useAuth:

Login.js: Para manejar el inicio de sesión.

Register.js: Para manejar el registro.

Navbar.js: Para mostrar el estado de autenticación y permitir cerrar sesión.

Dashboard.js: Para proteger rutas y mostrar contenido solo a usuarios autenticados.

# Estructura Final del Proyecto #

src/
├── context/
│   └── AuthContext.js       <-- Contexto de autenticación
├── components/
│   ├── Login.js             <-- Componente de Login (usa useAuth)
│   ├── Register.js          <-- Componente de Registro (usa useAuth)
│   ├── Navbar.js            <-- Componente de Navbar (usa useAuth)
│   └── Dashboard.js         <-- Componente Protegido (usa useAuth)
├── App.js
└── index.js

