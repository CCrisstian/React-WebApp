import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ProductTable } from './components/ProductTable';
import { ProductForm } from './components/ProductForm';
import { create, findAll, remove, update } from './services/productService';
import Swal from 'sweetalert2';
import imagen from './assets/technicaldifficulties-1024x576.jpg';
import './ProductsApp.css';

export const ProductsApp = ({ title = 'Title default!' }) => {

    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    });

    const getProducts = async () => {
        const result = await findAll(); // Obtener el listado desde la Base de Datos
        setProducts(result.data || []); // Si result.data es undefined, asigna un array vacío
    }

    useEffect(() => {
        getProducts();
        console.log('cargando la pagina ...')
    }, []);

    const handlerAddProduct = async (product) => {  //Se encarga de persistir el 'producto'
        if (product.id > 0) {
            const response = await update(product); // ACTUALIZAR
            setProducts(
                products.map(prod => {
                    if (prod.id == product.id) {
                        return { ...response.data };
                    }
                    return prod;
                })
            );
            Swal.fire({
                title: "Actualizado con exito!",
                text: `Producto ${product.name} actualizado con exito!`,
                icon: "success"
            });
        } else {
            const response = await create(product); // CREAR
            setProducts([...products, { ...response.data }]);
            Swal.fire({
                title: "Creado con exito!",
                text: `Producto ${product.name} creado con exito!`,
                icon: "success"
            });
        }
    }

    const handlerProductSelected = (product) => {
        setProductSelected({ ...product })
        console.log(productSelected);   //solo para visualizar que funciona correctamente
    }

    const handlerRemoveProduct = (id) => {
        Swal.fire({
            title: "¿Estás seguro que quieres eliminar?",
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!"
        }).then(result => {
            if (result.isConfirmed) {
                remove(id);
                setProducts(products.filter(product => product.id != id));
                Swal.fire({
                    title: "Eliminado con exito!",
                    text: "Producto eliminado con exito",
                    icon: "success"
                });
            }
        });
    }

    return <div className='logo-pattern-bg'>
        <h1 align="center">
            <span className="title-background">{title} <img src="https://skillicons.dev/icons?i=react" width="80" /></span>
        </h1>
        <div className='row'>
            <div className='col-md-4 container'>
                <div className="w-auto mx-auto">
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
                </div>
            </div>
            <div className='col-md-8'>
                <div className="product-table-wrapper">
                    {
                        (products.length > 0) ? (
                            <ProductTable
                                products={products}
                                handlerProductSelected={handlerProductSelected}
                                handlerRemoveProduct={handlerRemoveProduct}
                            />) :
                            (
                                <div className="alert alert-warning">
                                    No hay productos en el sistema!
                                    <img src={imagen} alt="Dificultades técnicas" width="500" />
                                </div>
                            )
                    }
                </div>
            </div>

        </div>
    </div>
}

ProductsApp.propTypes = { //Con esto validamos que el valor de title sea un 'String'
    title: PropTypes.string.isRequired
}
