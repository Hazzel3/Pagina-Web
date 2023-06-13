const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const path = require('path');
const morgan = require("morgan");
const cors = require("cors");

const db = require("./config/db") // Conexión a la base de datos
const app = express();


// Middleware para los archivos estáticos
//app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("common"));
app.use(cors({ origin: "*" }));

// Middleware para la autenticación
const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/signin');
  }
};

// Ruta de inicio de sesión
app.get('/signin', (req, res) => {
  // Renderizar el formulario de inicio de sesión
});

app.post('/signin', (req, res) => {
  // Procesar el inicio de sesión y autenticar al usuario
});

// Ruta de registro de usuario
app.get('/signup', (req, res) => {
  // Renderizar el formulario de registro de usuario
});

app.post('/signup', (req, res) => {
  // Procesar el registro de usuario y guardar en la base de datos
  res.json({ data: "login correct" })
});

// Ruta para cerrar sesión
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/signin');
});

// Rutas protegidas para operaciones CRUD de clientes
app.get('/clientes', requireAuth, (req, res) => {
  // Obtener todos los clientes de la base de datos y renderizar la lista
});

app.get('/clientes/:id', requireAuth, (req, res) => {
  // Obtener un cliente específico de la base de datos y renderizar los detalles
});

app.post('/clientes', requireAuth, (req, res) => {
  // Crear un nuevo cliente en la base de datos
});

app.put('/clientes/:id', requireAuth, (req, res) => {
  // Actualizar los datos de un cliente en la base de datos
});

app.delete('/clientes/:id', requireAuth, (req, res) => {
  // Eliminar un cliente de la base de datos
});

app.get("/", (req, res) => {
  res.json({ message: "backend" });
})

// Configuración del servidor
app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});
