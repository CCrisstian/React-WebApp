import axios from "axios";

// Este archivo es el elemento que permite conectar el Frontend con el Backend

// Ruta del Backend, proyecto 'https://github.com/CCrisstian/Java_SpringBoot_API-RESTful'
const baseUrl = 'http://localhost:8080';

// Funciones
export const findAll = async () => {
    try {
        const response = await axios.get(baseUrl);  // Solicitud HTTP GET
        return response;
    } catch (error) {
        console.log(error);
    }
    return [];
}

export const create = async ({ name, description, price }) => {
    try {   // Se escribe de esta forma porque en este caso el nombre del atributo y del valor coinciden
        return await axios.post(baseUrl, { name, description, price })    // Solicitud HTTP POST
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const update = async ({ id, name, description, price }) => {
    try {                    // `rutaURL/id`
        return await axios.put(`${baseUrl}/${id}`, { name, description, price })    // Solicitud HTTP PUT
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const remove = async (id) => {
    try {                   // `rutaURL/id`
        await axios.delete(`${baseUrl}/${id}`)  // Solicitud HTTP DELETE
    } catch (error) {
        console.log(error);
    }
}
