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
- Esto inicia el servidor local y proporciona una URL (generalmente **http://localhost:5173/**) donde ver la aplicación corriendo. / También es el comando para ejecutar el proyecto desde un editor de código.

<h1 align="center"><img src="https://axios-http.com/assets/logo.svg" alt="Axios Logo" width="240"/></h1>
<p><b>Axios</b> es una librería de <b>JavaScript</b> basada en promesas que se utiliza para realizar <b>peticiones HTTP</b> desde el navegador o desde <b>Node.js</b>. Permite comunicarse fácilmente con <b>APIs</b> externas o internas, enviando y recibiendo datos de manera sencilla.</p>

<h2><ins>Se usa principalmente para:</ins></h2>

- Obtener datos desde un servidor (**GET**)
- Enviar datos al servidor (**POST**, **PUT**, **DELETE**, etc.)
- Manejar respuestas y errores de forma clara y concisa
- Configurar encabezados, tokens de autenticación, tiempo de espera y más

**Axios** es muy común en proyectos ****React**** para ***'conectar el Frontend con el Backend'***.

<h2><ins>Instalación de Axios</ins></h2>
<p>Para instalar <b>Axios</b> en el proyecto, abrir la terminal de <b>Visual Studio Code</b> y ejecutar el siguiente comando:</p>

```bash
npm i axios
```

Luego, verificar que se haya agregado correctamente en el archivo `package.json`, dentro de la sección `"dependencies"`:
```json
"dependencies": {
  "axios": "^1.8.4",
  "prop-types": "^15.8.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "sweetalert2": "^11.6.13"
}
```
Con esto, **Axios** queda listo para ser usado en el proyecto para realizar **peticiones HTTP** de forma sencilla y eficiente.

<h1 align="center">productService.js</h1>
<p></p>


<h1 align="center"><img src="https://sweetalert2.github.io/images/SweetAlert2.png" alt="SweetAlert2 Logo" width="240"/></h1>
<p><b>SweetAlert2</b> es una librería moderna de <b>JavaScript</b> que permite mostrar alertas personalizadas y visualmente atractivas en el navegador. Reemplaza las alertas estándar de <b>JavaScript</b> (alert, confirm, prompt) con cuadros de diálogo animados, configurables y con un diseño más profesional.</p>

<h2><ins>¿Para qué sirve?</ins></h2>

- Mostrar **mensajes de éxito, error o advertencia**
- **Confirmar acciones** del usuario (como eliminar un registro)
- **Recoger datos de entrada** a través de **formularios** embebidos
- Mejorar la experiencia del usuario con alertas elegantes y responsivas

<h2><ins>Instalación</ins></h2>
<p>Para instalar <b>SweetAlert2</b> en el <b>Frontend</b>, se debe abrir la terminal en el proyecto (por ejemplo, desde <b>VSCode</b>) y ejecutar:</p>

```bash
npm install sweetalert2
```
Una vez instalado, la dependencia se agregará automáticamente en el archivo `package.json`:

```json
"dependencies": {
  "sweetalert2": "^11.6.13",
  ...
}
```
Ahora es posible importar y utilizar **SweetAlert2** en los componentes de **React** para mostrar alertas personalizadas.
