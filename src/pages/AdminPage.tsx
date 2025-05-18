import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { User } from '../types'; // Asumiendo que tienes un tipo User definido

const AdminPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Estados para el formulario de creación de usuario
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await api.get('/admin/users'); // Endpoint del backend
      setUsers(response.data);
      setError('');
    } catch (err) {
      setError('Error al cargar usuarios. Asegúrate de tener permisos de administrador.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleUserStatus = async (userId: string, isActive: boolean) => {
    try {
      await api.patch(`/admin/users/${userId}/toggle-status`, { isActive: !isActive });
      // Actualizar la lista de usuarios localmente o volver a fetched
      setUsers(users.map(user => user.id === userId ? { ...user, isActive: !isActive } : user));
    } catch (err) {
      alert('Error al cambiar el estado del usuario.');
      console.error(err);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreatingUser(true);
    try {
      // Usamos el endpoint de registro público por ahora
      // El admin luego deberá ir a Prisma Studio para asignar rol 'admin' y suscripción si es necesario
      // o podríamos crear un endpoint específico en el backend para que el admin cree usuarios con más control.
      await api.post('/users/register', {
        name: newUserName,
        email: newUserEmail,
        password: newUserPassword,
      });
      alert('Usuario creado exitosamente. Refresca para ver la lista o actualiza el rol/suscripción manualmente.');
      setNewUserName('');
      setNewUserEmail('');
      setNewUserPassword('');
      fetchUsers(); // Volver a cargar usuarios
    } catch (err: any) {
      alert(`Error al crear usuario: ${err.response?.data?.error || err.message}`);
      console.error(err);
    } finally {
      setIsCreatingUser(false);
    }
  };

  if (loading) return <div className="p-4">Cargando panel de administración...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>

      {/* Sección para Crear Usuario */}
      <div className="mb-8 p-4 border rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Crear Nuevo Usuario</h2>
        <form onSubmit={handleCreateUser} className="space-y-3">
          <div>
            <label htmlFor="newUserName" className="block text-sm font-medium">Nombre:</label>
            <input 
              id="newUserName" 
              type="text" 
              value={newUserName} 
              onChange={(e) => setNewUserName(e.target.value)} 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="newUserEmail" className="block text-sm font-medium">Email:</label>
            <input 
              id="newUserEmail" 
              type="email" 
              value={newUserEmail} 
              onChange={(e) => setNewUserEmail(e.target.value)} 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="newUserPassword" className="block text-sm font-medium">Contraseña:</label>
            <input 
              id="newUserPassword" 
              type="password" 
              value={newUserPassword} 
              onChange={(e) => setNewUserPassword(e.target.value)} 
              required 
              minLength={6} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button 
            type="submit" 
            disabled={isCreatingUser}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isCreatingUser ? 'Creando...' : 'Crear Usuario'}
          </button>
        </form>
      </div>

      {/* Sección para Listar Usuarios */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Lista de Usuarios</h2>
        {users.length === 0 ? (
          <p>No hay usuarios registrados.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suscripción</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.subscriptionStatus} (Vence: {user.subscriptionEndDate ? new Date(user.subscriptionEndDate).toLocaleDateString() : 'N/A'})</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.isActive ? 'Sí' : 'No'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        onClick={() => handleToggleUserStatus(user.id, user.isActive || false)} 
                        className={`px-3 py-1 text-sm rounded ${user.isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                      >
                        {user.isActive ? 'Desactivar' : 'Activar'}
                      </button>
                      {/* Aquí podrías añadir un botón para editar suscripción, etc. */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
