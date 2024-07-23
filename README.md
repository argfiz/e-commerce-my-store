Welcome to the e-commerce "e-Box" API REST

Tutorial de Pre-configuración para el Proyecto "e-commerce-my-store"

Este tutorial te guiará a través de los pasos necesarios para configurar y ejecutar el proyecto "e-commerce-my-store" después de clonarlo desde el repositorio. Asegúrate de tener Node.js y Docker instalados en tu sistema antes de comenzar.
Requisitos Previos:

    Node.js: Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde nodejs.org.

    Docker: Asegúrate de tener Docker instalado en tu sistema. Puedes descargarlo desde docker.com.

Paso 1: Clonar el Repositorio

Clona el repositorio de tu proyecto desde GitHub a tu máquina local:

git clone https://github.com/argfiz/e-commerce-my-store.git
cd e-commerce-my-store


Paso 2: Instalar Dependencias

Instala las dependencias del proyecto utilizando npm (Node Package Manager):

npm install

Esto instalará todas las dependencias listadas en el archivo package.json, tanto las dependencias de desarrollo como las de producción.


Paso 3: Configurar el Ambiente de Desarrollo

    Crear un archivo .env (si es necesario):
    Si tu proyecto requiere variables de entorno, crea un archivo .env en la raíz del proyecto y define las variables necesarias. Por ejemplo:

DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=your_password
DB_NAME=my_store

Asegurarse de que Docker esté en ejecución:
Verifica que Docker esté corriendo en tu sistema. Si no está iniciado, abre Docker Desktop y arráncalo.


Paso 4: Configurar y Ejecutar el Contenedor PostgreSQL

En tu archivo docker-compose.yml, asegúrate de que la configuración sea correcta. Aquí hay un ejemplo básico:

version: "3.9"
services:
  postgres:
    image: postgres:13
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: your_password
      POSTGRES_DB: my_store
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data


Luego, inicia el contenedor de PostgreSQL:

docker-compose up -d


Paso 5: Ejecutar el Servidor en Modo Desarrollo

Para iniciar el servidor en modo desarrollo y ver los cambios en tiempo real, ejecuta:

npm run dev


Paso 6: Verificar la Conexión a la Base de Datos

Verifica que la conexión a la base de datos esté funcionando correctamente. Puedes hacer esto abriendo una sesión en el contenedor PostgreSQL y ejecutando un comando simple:

docker-compose exec postgres bash
psql -h localhost -d my_store -U admin

Dentro de psql, puedes ejecutar:

SELECT * FROM task;

Esto debería devolver las filas de la tabla task si todo está configurado correctamente.


Paso 7: Ejecutar ESLint para Verificar el Código

Para asegurarte de que tu código sigue las reglas de estilo y sintaxis definidas, puedes ejecutar ESLint:

npm run lint

Con estos pasos, deberías tener tu proyecto "e-commerce-my-store" configurado y listo para ser ejecutado en tu máquina local.



NODE.JS.: POO-CRUD

DOCKER/PGADMIN

LIBRARY: EXPRESS-FAKER-BOOM-JOI-CORS-DOTENV  (HTTPS-HELMET)


