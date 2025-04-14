<h1 align="center">Frontend React <img src="https://skillicons.dev/icons?i=react&perline=14" /> + Vite <img src="https://skillicons.dev/icons?i=vite&perline=14" /></h1>
<h2><ins>Introducción al Proyecto</ins></h2>
<p>Este proyecto es una aplicación web completa que combina un <b>frontend</b> moderno desarrollado con <b>React + Vite</b> y un <b>backend</b> robusto con <b>Java + Spring Boot</b>. Su objetivo es proporcionar una plataforma eficiente y escalable para la gestión de productos, permitiendo realizar operaciones <b>CRUD (Crear, Leer, Actualizar y Eliminar)</b> de forma sencilla y rápida.</p>

<h2><ins>Características Principales</ins></h2>

- **Frontend**: Desarrollado con **React** y optimizado con **Vite**, ofrece una interfaz de usuario intuitiva, rápida y dinámica para interactuar con la **API REST**.
- **Backend**: Construido con **Java** y **Spring Boot**, expone una **API RESTful** que maneja la lógica de negocio y se comunica con una **Base de Datos SQL**.
- **Buenas prácticas**: El proyecto sigue principios como la ***separación de responsabilidades***, ***inyección de dependencias*** y ***modularidad***, garantizando un código limpio, escalable y mantenible.

<h2><ins>Descripción de cada herramienta utilizada en este proyecto</ins></h2>

<img src="https://skillicons.dev/icons?i=react&perline=14" /> **React**: Es una biblioteca de JavaScript para ***construir interfaces de usuario interactivas y reutilizables***. Se basa en **componentes** y utiliza un sistema de renderizado eficiente llamado **Virtual DOM** para mejorar el rendimiento.

<img src="https://skillicons.dev/icons?i=vite&perline=14" /> **Vite**: Es un entorno de desarrollo rápido para proyectos en JavaScript y TypeScript. Se usa principalmente con **React**, **Vue** y otros frameworks, ***proporcionando un servidor de desarrollo optimizado y una construcción rápida*** basada en **esbuild**.

<img src="https://skillicons.dev/icons?i=nodejs&perline=14" /> **Node.Js**: Es un entorno de ejecución de JavaScript ***del lado del servidor***. Permite ***construir aplicaciones web escalables y manejar operaciones de backend***, como **Bases de Datos**, **autenticación** y **lógica de negocio**.

<h2><ins>Imagenes del Proyecto</ins></h2>
<h3><ins>Sin Conexión al Backend</ins></h3>

![SinConexiónBackend](https://github.com/user-attachments/assets/d6d28ca2-b840-460c-9f96-bd2565541fa0)

<h3><ins>Activando el Backend</ins></h3>

Proyecto: [Backend API RESTful con Java + Spring Boot](https://github.com/CCrisstian/Java_SpringBoot_API-RESTful)
![image](https://github.com/user-attachments/assets/cd5e8048-8330-4447-89d8-4cf3b761bd8c)

Ejecutando en la terminal del editor de codigo (**VS Code**) el comando
```jsx
npm run dev
```
- Esto inicia el servidor local y proporciona una URL (generalmente **http://localhost:5173/**) donde ver la aplicación corriendo.

![image](https://github.com/user-attachments/assets/a466dffe-0d40-4d5e-bdcd-bcdda05c1b57)
![image](https://github.com/user-attachments/assets/5e99facb-7ef9-4e16-bec8-d8126b955235)

<h1 align="center">Jerarquía de Componentes dentro del Proyecto</h1>
<p>Este proyecto <b>Frontend</b> en <b>React</b> sigue una estructura clara basada en componentes y servicios, separando la lógica de negocio de la interfaz visual.</p>

```javascript
main.jsx                  ← Punto de entrada
 └── ProductsApp.jsx      ← Componente principal (Padre)
      ├── ProductForm.jsx          ← Hijo - Formulario (Crear/Editar productos)
      ├── ProductTable.jsx         ← Hijo - Tabla (Visualizar/Eliminar/Seleccionar productos)
      └── productService.js        ← Servicio (Comunicación con el Backend vía Axios)
```

- `main.jsx`
  - Punto de entrada de la aplicación **React**. Monta el componente principal `ProductsApp` en el **DOM** utilizando `ReactDOM.createRoot`. También habilita el `StrictMode` de **React** para detectar posibles errores durante el desarrollo.
- `ProductsApp.jsx`
  - Componente principal del **Frontend**. Se encarga de:
    - Obtener los productos desde el **Backend**.
    - Administrar el estado global de la aplicación.
    - Coordinar la lógica entre los formularios (`ProductForm`) y la tabla (`ProductTable`).
- `ProductForm.jsx`
  - Formulario para la creación o edición de productos. Captura los datos ingresados por el usuario y los envía al componente padre (`ProductsApp`) para su persistencia en la **Base de Datos**. Se inicializa con valores por defecto y responde a cambios en el producto seleccionado.
- `ProductTable.jsx`
  - Tabla que muestra todos los productos cargados. Permite seleccionar un producto para editarlo o eliminarlo, notificando estas acciones al componente principal (`ProductsApp`).
- `productService.js`
  - Servicio que conecta el **Frontend** con el **Backend** mediante **Axios**. Contiene funciones para realizar operaciones **CRUD** sobre los productos (**findAll**, **create**, **update**, **remove**). Se utiliza únicamente desde `ProductsApp.jsx`.

<h1 align="center">'main.jsx'</h1>
<p>El archivo <b>main.jsx</b> es el punto de entrada principal de la aplicación <b>React</b>. Aquí se inicia la ejecución de la interfaz del usuario, se monta el componente principal <b>ProductsApp</b> en el <b>DOM</b> y se activa el <b>modo estricto</b> de <b>React</b> para ayudar a detectar errores comunes en desarrollo.</p>

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ProductsApp} from './ProductsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsApp title={'Frontend React!'}/>
  </StrictMode>,
)
```
- `<ProductsApp />`. Es el componente principal de la aplicación, que se encarga de toda la lógica de productos. Se le pasa una propiedad `title` con el valor **"Frontend React!"**.

<h1 align="center">'ProductsApp.jsx'</h1>
<p><b>ProductsApp</b> es el componente raíz del <b>Frontend</b>. Contiene toda la lógica central de la aplicación, incluyendo:</p>

- Carga de productos desde el **Backend**
- Manejo del estado global de la lista de productos
- Gestión del formulario (crear/editar)
- Gestión de acciones del usuario (seleccionar, eliminar productos)
- Coordinación con los servicios definidos en `productService.js`

<h2><ins>Funcionalidades</ins></h2>

- **Estado de productos**

Almacena la lista actual de productos. Se actualiza dinámicamente tras operaciones **CRUD**.
```jsx
const [products, setProducts] = useState([]);
```

- **Estado de producto seleccionado**

Almacena un producto seleccionado para ser editado. Este estado se pasa al formulario.
```jsx
const [productSelected, setProductSelected] = useState({
     id: 0,
     name: '',
     description: '',
     price: ''
});
```

- **Carga inicial de productos**

Al montar el componente, se ejecuta `getProducts()` para hacer un **GET** al **Backend** y cargar los productos iniciales.
```jsx
const getProducts = async () => {
    const result = await findAll();
    setProducts(result.data || []);
}

useEffect(() => {
    getProducts();
    console.log('cargando la pagina ...')
}, []);
```

- **Crear o actualizar un producto**

Dependiendo del valor de **id**, se decide si **'Crear'** un nuevo producto o **'Actualizar'** uno existente. Después de la operación, el estado `products` se actualiza.
```jsx
const handlerAddProduct = async (product) => {
    if (product.id > 0) {
        // Actualizar
        const response = await update(product);
        setProducts(products.map(p => p.id === product.id ? response.data : p));
    } else {
        // Crear
        const response = await create(product);
        setProducts([...products, response.data]);
    }
}
```

- **Seleccionar producto para edición**

Cuando el usuario elige editar un producto, este se copia al estado `productSelected`, que se envía al formulario para llenar los campos.
```jsx
const handlerProductSelected = (product) => {
    setProductSelected({ ...product });
}
```

- **Eliminar producto**

Elimina el producto del **Backend** y luego actualiza el estado eliminándolo localmente.
```jsx
const handlerRemoveProduct = (id) => {
    remove(id);
    setProducts(products.filter(product => product.id !== id));
}
```

<h2><ins>Conexión con otros componentes</ins></h2>

- `<ProductForm />`:
  - Recibe como props el **handler** `handlerAddProduct` y el `productSelected`.
- `<ProductTable />`:
  - Recibe la lista products y dos **handlers**:
    - `handlerProductSelected` para **editar**
    - `handlerRemoveProduct` para **eliminar**

<h1 align="center">'ProductForm.jsx'</h1>
<p><b>ProductForm</b> es un componente controlado que permite al usuario crear o editar productos. Se encarga de capturar la entrada del usuario y enviar los datos al componente principal (<b>ProductsApp</b>) para ser procesados (guardados o actualizados).</p>
<h2><ins>Funcionalidades</ins></h2>

- **Estado local del formulario**

El componente mantiene su propio estado utilizando `useState` para controlar los campos del formulario. Este estado se inicializa con la constante `initialDataForm`:
```jsx
const initialDataForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
};

const [form, setForm] = useState(initialDataForm);
```
Esto permite que:
- El **formulario comience vacío** ***al renderizarse por primera vez***.
- Los campos puedan **'resetearse'** fácilmente después de una **creación** o **edición**.

Los valores de `form` se actualizan dinámicamente a medida que el usuario escribe en los campos (`onChange`), manteniendo el formulario completamente controlado por **React**.

Luego, se desestructura el objeto `form` para extraer sus propiedades individuales de forma más cómoda:
```jsx
const { id, name, description, price } = form;
```
Esto permite:
- Asignar directamente los valores a los campos del formulario.
- Utilizar cada propiedad de forma limpia en **JSX** sin repetir `form.name`, `form.description`, etc.

- **Inicialización con un producto seleccionado**

Cuando el usuario selecciona un producto desde la tabla, este **hook** actualiza el formulario para que sus campos se llenen con los datos del producto a editar.
```jsx
useEffect(() => {
    setForm(productSelected);
}, [productSelected]);
```

- **Envío del formulario**
  - Previene el comportamiento por defecto del navegador.
  - Verifica que los campos no estén vacíos.
  - Llama a la función `handlerAdd()` (pasada como **prop** desde `ProductsApp`) para procesar el producto.
  - Luego, reinicia el formulario a sus valores por defecto.
```jsx
<form onSubmit={event => {
    event.preventDefault();
    if (!name || !description || !price) {
        alert('Debe completar los datos del formulario!');
        return;
    }
    handlerAdd(form);
    setForm(initialDataForm);
}}>
```

- **Manejo de cambios en inputs**

 Cada **input** usa `onChange` para actualizar el estado local (`form`) de manera controlada:
 ```jsx
onChange={(event) => setForm({...form, name: event.target.value})}
```
 Esto permite mantener **sincronizados** los valores del formulario con el estado `React`.

- **Props esperadas**
  - `handlerAdd`: Función encargada de manejar el producto creado o editado.
  - `productSelected`: Objeto con los datos del producto a editar. Si está vacío, el formulario se usa para crear uno nuevo.
 ```jsx
ProductForm.propTypes = {
    handlerAdd: PropTypes.func.isRequired,
    productSelected: PropTypes.object.isRequired
}
 ```

<h1 align="center">'ProductTable.jsx'</h1>
<p><b>ProductTable</b> es un componente de presentación que recibe la lista de productos como prop y los muestra en una tabla.</p>
Permite al usuario:

- **'Visualizar'** los productos disponibles.
- **'Seleccionar'** un producto para editarlo.
- **'Eliminar'** un producto del sistema.

***No maneja estado propio ni lógica de negocio***, sino que delegada la gestión de eventos al componente *"padre"* `ProductsApp`.
<h2><ins>Funcionalidades</ins></h2>

- **Listado de productos en una tabla**

El componente recibe la **prop** `products` (array de objetos) y la recorre con `.map()` para **'mostrar'** cada producto en una fila:
 ```jsx
products.map(product => (
  <tr key={product.id}>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.description}</td>
    <td>{product.price}</td>
    ...
  </tr>
))
 ```

- **Botón para 'Seleccionar' producto ('Actualizar')**

Al hacer clic, se llama a la función `handlerProductSelected` (recibida por **props**), pasando como argumento el producto actual. Esto permite al **"padre"** (`ProductsApp`) preparar ese producto para edición y enviarlo al formulario.
```jsx
<button onClick={() => handlerProductSelected(product)}>
  Update
</button>
```

- **Botón para 'Eliminar' producto**

Este botón dispara la función `handlerRemoveProduct`, que **'Elimina'** el producto según su `id`.
```jsx
<button onClick={() => handlerRemoveProduct(product.id)}>
  Remove
</button>
```
- **Props esperadas**
```jsx
ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,
  handlerRemoveProduct: PropTypes.func.isRequired
}
```
  - `products`: Lista de productos a mostrar.
  - `handlerProductSelected`: Función para manejar la **'Selección'** de un producto (edición).
  - `handlerRemoveProduct`: Función para manejar la **'Eliminación'** de un producto.

<h1 align="center"><img src="https://axios-http.com/assets/logo.svg" alt="Axios Logo" width="240"/></h1>
<p><b>Axios</b> es una librería de <b>JavaScript</b> basada en promesas que se utiliza para realizar <b>peticiones HTTP</b> desde el navegador o desde <b>Node.js</b>. Permite comunicarse fácilmente con <b>APIs</b> externas o internas, enviando y recibiendo datos de manera sencilla.</p>

<h2><ins>Se usa principalmente para:</ins></h2>

- Obtener datos desde un servidor (**GET**)
- Enviar datos al servidor (**POST**, **PUT**, **DELETE**, etc.)
- Manejar respuestas y errores de forma clara y concisa
- Configurar encabezados, tokens de autenticación, tiempo de espera y más

**Axios** es muy común en proyectos ****React**** para ***'conectar el Frontend con el Backend'***.

<h1 align="center">'productService.js'</h1>
<p>El archivo <b>productService.js</b> encapsula toda la lógica de comunicación entre el <b>Frontend React</b> y el <b>Backend Java + Spring Boot</b>. Su función es actuar como una capa de servicio que facilita el consumo de la <b>API RESTful</b> del <b>Backend</b>, mediante <b>solicitudes HTTP</b> utilizando <b>Axios</b>.</p>
<p>Esta clase se encarga de realizar operaciones <b>CRUD</b> (<b>Crear, Leer, Actualizar y Eliminar</b>) sobre la tabla <b>'products'</b> que reside en una <b>Base de Datos SQL</b>, sin que los componentes del <b>Frontend</b> tengan que preocuparse por los detalles técnicos de la comunicación.</p>
<h2><ins>Funciones</ins></h2>

🖥️ **Frontend** (`productService.js` con **React** + **Axios**):
- ***Solo se encarga de 'enviar'*** **solicitudes** (**GET**, **POST**, **PUT**, **DELETE**) al **Backend**.
- Muestra la interfaz de usuario.
- ***No tiene conocimiento de la*** **Base de Datos** ***ni de la*** **lógica interna** del negocio.
- Usa **Axios** para consumir la **API** del **Backend**.
  
⚙️ **Backend** (`ProductController.java` con **Spring Boot**):
- ***Se encarga de 'recibir' esas solicitudes*** y tomar decisiones (**validaciones**, **reglas de negocio**, etc).
- Llama a los servicios, que a su vez consultan los repositorios (conexión real a la **Base de Datos**).
- Devuelve una respuesta estructurada (**JSON**).

🛢️ **Base de Datos** (**SQL**):
- Guarda los datos persistentes (productos en este caso).
- El **Backend** accede a ella a través del servicio y el repositorio.

🧠 En resumen:
- 📲 **Frontend** = **Interfaz** + **Solicitudes**
- ⚙️ **Backend** = **Lógica** + **Persistencia**
- 🗃️ **Base de Datos** = **Almacenamiento**

<h2><ins>Responsabilidades separadas:</ins></h2>

- `Conexión con el Backend`
  - Define la **URL** base del **Backend** local que expone los endpoints **REST** para interactuar con la **Base de Datos**.
```javascript
// Ruta del Backend, proyecto 'https://github.com/CCrisstian/Java_SpringBoot_API-RESTful'
const baseUrl = 'http://localhost:8080';
```

- `findAll()`
  - Recupera todos los productos disponibles en la **Base de Datos**.
  - Se conecta con el endpoint **GET** del **Backend** y devuelve un arreglo de productos.
```javascript
export const findAll = async () => {
    try {
        const response = await axios.get(baseUrl);  // Solicitud HTTP GET
        return response;
    } catch (error) {
        console.log(error);
    }
    return [];
}
```

- `create({ name, description, price })`
  - Crea un nuevo producto con los datos proporcionados.
  - Envía una solicitud **POST** con los campos **name, description y price** al **Backend**, que los almacena en la **Base de Datos**.
```javascript
export const create = async ({ name, description, price }) => {
    try {
        return await axios.post(baseUrl, { name, description, price })    // Solicitud HTTP POST
    } catch (error) {
        console.log(error);
    }
    return undefined;
}
```
 
- `update({ id, name, description, price })`
  - **Actualiza** un producto existente, identificándolo mediante su **'id'**.
  - Envía una solicitud **PUT** con los nuevos datos para reemplazar los valores anteriores del producto en la **Base de Datos**.
```javascript
export const update = async ({ id, name, description, price }) => {
    try {
        return await axios.put(`${baseUrl}/${id}`, { name, description, price })    // Solicitud HTTP PUT
    } catch (error) {
        console.log(error);
    }
    return undefined;
}
```

- `remove(id)`
  - **Elimina** un producto de la **Base de Datos**, utilizando su identificador único **'id'**.
  - Realiza una solicitud **DELETE** para quitar el producto correspondiente del servidor.
```javascript
export const remove = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`)  // Solicitud HTTP DELETE
    } catch (error) {
        console.log(error);
    }
}
```
<h1 align="center"><img src="https://sweetalert2.github.io/images/SweetAlert2.png" alt="SweetAlert2 Logo" width="240"/></h1>
<p><b>SweetAlert2</b> es una librería moderna de <b>JavaScript</b> que permite mostrar alertas personalizadas y visualmente atractivas en el navegador. Reemplaza las alertas estándar de <b>JavaScript</b> (alert, confirm, prompt) con cuadros de diálogo animados, configurables y con un diseño más profesional.</p>

<h2><ins>¿Para qué sirve?</ins></h2>

- Mostrar **mensajes de éxito, error o advertencia**
- **Confirmar acciones** del usuario (como eliminar un registro)
- **Recoger datos de entrada** a través de **formularios** embebidos
- Mejorar la experiencia del usuario con alertas elegantes y responsivas
