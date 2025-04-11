<h1 align="center">Frontend React <img src="https://skillicons.dev/icons?i=react&perline=14" /> + Vite <img src="https://skillicons.dev/icons?i=vite&perline=14" /></h1>
<h2><ins>Introducción al Proyecto</ins></h2>
<p>Este proyecto es una aplicación web completa que combina un <b>frontend</b> moderno desarrollado con <b>React + Vite</b> y un <b>backend</b> robusto con <b>Java + Spring Boot</b>. Su objetivo es proporcionar una plataforma eficiente y escalable para la gestión de productos, permitiendo realizar operaciones <b>CRUD (Crear, Leer, Actualizar y Eliminar)</b> de forma sencilla y rápida.</p>

<h2>Características Principales</h2>

- **Frontend**: Desarrollado con **React** y optimizado con **Vite**, ofrece una interfaz de usuario intuitiva, rápida y dinámica para interactuar con la **API REST**.
- **Backend**: Construido con **Java** y **Spring Boot**, expone una **API RESTful** que maneja la lógica de negocio y se comunica con una **Base de Datos SQL**.
- **Buenas prácticas**: El proyecto sigue principios como la ***separación de responsabilidades***, ***inyección de dependencias*** y ***modularidad***, garantizando un código limpio, escalable y mantenible.

<h2><ins>Descripción de cada herramienta utilizada en este proyecto</ins></h2>

<img src="https://skillicons.dev/icons?i=react&perline=14" /> **React**: Es una biblioteca de JavaScript para ***construir interfaces de usuario interactivas y reutilizables***. Se basa en **componentes** y utiliza un sistema de renderizado eficiente llamado **Virtual DOM** para mejorar el rendimiento.

<img src="https://skillicons.dev/icons?i=vite&perline=14" /> **Vite**: Es un entorno de desarrollo rápido para proyectos en JavaScript y TypeScript. Se usa principalmente con **React**, **Vue** y otros frameworks, ***proporcionando un servidor de desarrollo optimizado y una construcción rápida*** basada en **esbuild**.

<img src="https://skillicons.dev/icons?i=nodejs&perline=14" /> **Node.Js**: Es un entorno de ejecución de JavaScript ***del lado del servidor***. Permite ***construir aplicaciones web escalables y manejar operaciones de backend***, como **Bases de Datos**, **autenticación** y **lógica de negocio**.

<h2><ins>Comandos de creacion del Proyecto</ins></h2>
<p>Usando los siguientes comandos ingresados por "Simbolo de Sistema" (Windows).</p> 

```bash
npx
create-vite
```
```bash
Project name: 3-react-products

Select a framework: React

Select a variant: JavaScript
```
```bash
cd 3-react-products
```
```bash
npm install
```
```bash
npm i prop-types
```
```bash
npm run dev
```
- Usa `npx` para ejecutar `create-vite` sin instalarlo globalmente.
- Crea un nuevo proyecto llamado **"3-react-products"**.
- Selección de **Framework**: Seleccionado `React` como el **framework** principal para el **frontend**.
- Selección de **Variante**: Seleccionado `JavaScript`, lo que significa que no se usará **TypeScript** en este proyecto.
- Acceder al directorio del proyecto
- Instalar las dependencias
- Instala la librería `PropTypes`, que permite definir y validar los tipos de propiedades en componentes de `React`.
- Esto inicia el servidor local y proporciona una URL (generalmente **http://localhost:5173/**) donde ver tu aplicación corriendo. / También es el comando para ejecutar el proyecto desde un editor de código.

<h1 align="center">package.json</h1>

```json
{
  "name": "3-react-products",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.9",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "sweetalert2": "^11.15.10"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "vite": "^6.0.5"
  }
}
```

 **Elementos principales** del `package.json`
- `name: "3-react-products"`. Nombre del proyecto.
- `private: true`. Evita que el paquete se publique en el registro de npm.

🔥 **Scripts** (`scripts`) Comandos útiles para desarrollo y producción:
- `dev: "vite"` → Inicia el servidor de desarrollo.
- `build: "vite build"` → Genera los archivos para producción.
- `lint: "eslint ."` → Ejecuta **ESLint** para analizar el código.
- `preview: "vite preview"` → Sirve la aplicación en modo producción localmente.

📦 **Dependencias** (`dependencies`) Librerías necesarias para ejecutar la aplicación:
- `axios`: **Cliente HTTP** para hacer peticiones a **APIs**.
- `prop-types`: Define tipos de propiedades en componentes `React`.
- `react / react-dom`: Core de `React` y renderizado en el `DOM`.
  - `react`: Es el núcleo de `React`, que permite crear interfaces de usuario declarativas mediante componentes.
  - `react-dom`: Se encarga de conectar `React` con el `DOM` del navegador para renderizar los componentes en la página.
  - `DOM` (**Document Object Model**): es una representación estructurada en forma de árbol de un documento **HTML**. Permite que los lenguajes de programación, como `JavaScript`, interactúen y modifiquen la estructura, contenido y estilo de una página web de forma dinámica. 
- `sweetalert2`: Librería para mostrar ***alertas personalizadas***.

🔧 **Dependencias de desarrollo** (`devDependencies`) Herramientas útiles solo en desarrollo:
- `@types/react`, `@types/react-dom`. Tipos de `React` para mejorar compatibilidad (útil con `TypeScript`).
- `@vitejs/plugin-react`. Plugin para integrar `React` con `Vite`.
- `vite`. Herramienta de **desarrollo** y **construcción ultrarrápida**.
