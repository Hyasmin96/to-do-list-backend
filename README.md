# To Do List - Backend (Node.js + Express)

## Descripción
Backend de una aplicación web para gestionar tareas y metas personales (To Do List). Permite agregar y eliminar tareas y metas mediante endpoints REST.

Los datos se almacenan en memoria (arreglos), por lo que no persisten al reiniciar el servidor.

## Tecnologías utilizadas
- Node.js (LTS) v24.13.1
- Express v5.2.1
- JavaScript

## Características
- API REST para tareas y metas
- Middleware de autorización mediante API Key
- Datos almacenados en memoria (sin base de datos)
- Endpoints para agregar, eliminar y obtener datos

## Endpoints disponibles
### Tareas
- `GET /tasks/getTasks`
- `POST /tasks/addTask`
- `DELETE /tasks/removeTask/:id`

### Metas
- `GET /goals/getGoals`
- `POST /goals/addGoal`
- `DELETE /goals/removeGoal/:id`

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
   git clone https://github.com/Hyasmin96/to-do-list-backend.git

2. Ingresar a la carpeta del proyecto:
   cd to-do-list-backend

3. Instalar dependencias:
   npm install

4. Ejecutar el servidor:
   npm start

5. Probar en Postman o navegador:
   http://localhost:3000/tasks/getTasks

