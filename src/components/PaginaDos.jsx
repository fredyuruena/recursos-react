import React, { useState, useEffect } from "react";
import axios from "axios";

function PaginaDos() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    username: ""
  });

  const [editUser, setEditUser] = useState(null);

 
  //   Cargar usuarios
  
  const getUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

 
  //   Crear usuario

  const handleCreate = async (e) => {
    e.preventDefault();

    const res = await axios.post(API_URL, newUser);
    setUsers([...users, res.data]);

    setNewUser({ name: "", email: "", username: "" });
  };

  
  //   Editar usuario
 
  const handleEdit = async (e) => {
    e.preventDefault();

    const res = await axios.put(`${API_URL}/${editUser.id}`, editUser);

    setUsers(users.map((u) => (u.id === editUser.id ? res.data : u)));
    setEditUser(null);
  };

  
  //   Eliminar usuario
  
  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que quieres eliminar este usuario?");

    if (!confirm) return;

    await axios.delete(`${API_URL}/${id}`);

    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1>Gestión de Usuarios</h1>

    
      {/*        FORMULARIO CREAR           */}
     

      <h2>Crear nuevo usuario</h2>

      <form
        onSubmit={handleCreate}
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          maxWidth: "350px",
          background: "#1e1e1e",
          padding: "1.5rem",
          borderRadius: "10px",
        }}
      >
        {/* Inputs */}
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) =>
            setNewUser({ ...newUser, name: e.target.value })
          }
          required
          style={{
            padding: "0.7rem",
            background: "#2c2c2c",
            border: "1px solid #555",
            borderRadius: "6px",
            color: "white",
          }}
        />

        <input
          type="email"
          placeholder="Correo"
          value={newUser.email}
          onChange={(e) =>
            setNewUser({ ...newUser, email: e.target.value })
          }
          required
          style={{
            padding: "0.7rem",
            background: "#2c2c2c",
            border: "1px solid #555",
            borderRadius: "6px",
            color: "white",
          }}
        />

        <input
          type="text"
          placeholder="Usuario"
          value={newUser.username}
          onChange={(e) =>
            setNewUser({ ...newUser, username: e.target.value })
          }
          required
          style={{
            padding: "0.7rem",
            background: "#2c2c2c",
            border: "1px solid #555",
            borderRadius: "6px",
            color: "white",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "0.6rem",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Agregar
        </button>
      </form>

  
      {/*        FORMULARIO EDITAR          */}
      

      {editUser && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Editando usuario: {editUser.name}</h2>

          <form
            onSubmit={handleEdit}
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              maxWidth: "350px",
              background: "#1e1e1e",
              padding: "1.5rem",
              borderRadius: "10px",
            }}
          >
            <input
              type="text"
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
              style={{
                padding: "0.7rem",
                background: "#2c2c2c",
                border: "1px solid #555",
                borderRadius: "6px",
                color: "white",
              }}
            />

            <input
              type="email"
              value={editUser.email}
              onChange={(e) =>
                setEditUser({ ...editUser, email: e.target.value })
              }
              style={{
                padding: "0.7rem",
                background: "#2c2c2c",
                border: "1px solid #555",
                borderRadius: "6px",
                color: "white",
              }}
            />

            <input
              type="text"
              value={editUser.username}
              onChange={(e) =>
                setEditUser({ ...editUser, username: e.target.value })
              }
              style={{
                padding: "0.7rem",
                background: "#2c2c2c",
                border: "1px solid #555",
                borderRadius: "6px",
                color: "white",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "0.6rem",
                background: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      )}

      {/* ================================= */}
      {/*      LISTA DE USUARIOS (CARDS)    */}
      {/* ================================= */}

      <h2 style={{ marginTop: "2rem", color: "white" }}>Usuarios</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "10px",
              background: "#f9f9f9",
              color: "black", 
            }}
          >
            <h3>{user.name}</h3>
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => setEditUser(user)}
                style={{
                  background: "#007BFF",
                  color: "white",
                  padding: "0.4rem 0.7rem",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Editar
              </button>

              <button
                onClick={() => handleDelete(user.id)}
                style={{
                  background: "red",
                  color: "white",
                  padding: "0.4rem 0.7rem",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default PaginaDos;