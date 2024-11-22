Proyecto: NestJS con MongoDB - Gestión de Libros y Autores
Este proyecto es una API desarrollada con NestJS y MongoDB que permite gestionar libros y autores. Los libros pueden estar relacionados con varios autores, y la API incluye funcionalidades para crear, listar y calcular promedios de páginas por capítulo.

Características del proyecto
Autores

Crear un autor.
Listar todos los autores.
Libros

Crear un libro relacionado con autores.
Listar todos los libros con información de los autores.
Calcular el promedio de páginas por capítulo para cada libro.

Requisitos previos
Node.js: Asegúrate de tener Node.js (v18 o superior) instalado.
MongoDB: Necesitas una instancia de MongoDB ejecutándose en mongodb://localhost:27017.
Postman o cURL: Para realizar las pruebas de los endpoints.

Instalación
Clona este repositorio:
https://github.com/SolMarina/libros-autores-orion

Instala las dependencias:
npm install

Configura tu base de datos en el archivo app.module.ts (opcional):
MongooseModule.forRoot('mongodb://localhost:27017/orion-test')

Inicia el servidor en modo de desarrollo:
npm run start:dev

Estructura del proyecto:
src/
├── app.module.ts
├── authors/
│   ├── authors.module.ts
│   ├── authors.controller.ts
│   ├── authors.service.ts
│   ├── schemas/
│   │   ├── author.schema.ts
│   ├── dto/
│   │   ├── create-author.dto.ts
├── books/
│   ├── books.module.ts
│   ├── books.controller.ts
│   ├── books.service.ts
│   ├── schemas/
│   │   ├── book.schema.ts
│   ├── dto/
│   │   ├── create-book.dto.ts
├── main.ts
